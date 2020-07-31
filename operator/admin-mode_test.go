package operator

import (
	"log"
	"testing"

	"github.com/litmuschaos/litmus-e2e/pkg"
	"github.com/litmuschaos/litmus-e2e/pkg/environment"
	"github.com/litmuschaos/litmus-e2e/pkg/types"
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
	_ "k8s.io/client-go/plugin/pkg/client/auth/gcp"
	"k8s.io/klog"
)

func TestAdminModeTest(t *testing.T) {

	RegisterFailHandler(Fail)
	RunSpecs(t, "BDD test")
}

//BDD Tests for testing admin mode functionality
//Checking for the creation of runner pod for application in same namespace
var _ = Describe("BDD of operator reconcile resiliency check", func() {

	// BDD TEST CASE 1
	// All Litmus components are in litmus namespace and application pod is in defalt ns
	Context("Check for litmus components", func() {

		It("Should check for creation of runner pod", func() {

			testsDetails := types.TestDetails{}
			clients := environment.ClientSets{}

			//Getting kubeConfig and Generate ClientSets
			By("[PreChaos]: Getting kubeconfig and generate clientset")
			if err := clients.GenerateClientSetFromKubeConfig(); err != nil {
				klog.Infof("Unable to Get the kubeconfig due to %v", err)
			}

			//Fetching all the default ENV
			//Note: please don't provide custom experiment name here
			By("[PreChaos]: Fetching all default ENVs")
			klog.Infof("[PreReq]: Getting the ENVs for the %v test", testsDetails.ExperimentName)
			environment.GetENV(&testsDetails, "pod-delete", "adminengine")

			// Checking the chaos operator running status
			By("[Status]: Checking chaos operator status")
			if err := pkg.OperatorStatusCheck(&testsDetails, clients); err != nil {
				log.Fatalf("Operator status check failed, due to %v", err)
			}

			//Creating application for pod-delete in default namespace
			By("Creating deployment for pod-delete chaos")
			if err := pkg.CreateDeployment(clients, "adminapp", "nginx:1.12", "default"); err != nil {
				log.Fatalf("Operator status check failed, due to %v", err)
			}

			//Waiting for deployment to get ready
			if err := pkg.DeploymentStatusCheck(&testsDetails, "adminapp", "default", clients); err != nil {
				log.Fatalf("Error Timeout, %v", err)
			}
			testsDetails.AppNS = "default"
			testsDetails.AppLabel = "run=adminapp"
			//Installing admin RBAC for the chaos
			By("[Install]: Installing RBAC for pod-delete")
			if err := pkg.InstallAdminRbac(&testsDetails); err != nil {
				log.Fatalf("Fail to install rbac, due to %v", err)
			}

			//Installing Chaos Experiment for pod-delete
			By("[Install]: Installing pod-delete chaos experiment")
			if err := pkg.InstallGoChaosExperiment(&testsDetails, testsDetails.ChaosNamespace); err != nil {
				log.Fatalf("Fail to install chaos experiment, due to %v", err)
			}

			//Installing Chaos Engine for container-kill
			By("[Install]: Installing chaos engine")
			if err := pkg.InstallGoChaosEngine(&testsDetails, testsDetails.ChaosNamespace); err != nil {
				log.Fatalf("Fail to install chaosengine, due to %v", err)
			}

			//Checking runner pod running state
			testsDetails.AppNS = "litmus"
			By("[Status]: Runner pod running status check")
			if _, err := pkg.RunnerPodStatus(&testsDetails, testsDetails.AppNS, clients); err != nil {
				log.Fatalf("Runner pod status check failed, due to %v", err)
			}

			//Waiting for experiment job to get completed
			//And Print the logs of the job pod (chaos pod)
			By("[Status]: Wait for job completion and then print logs")
			if _, err := pkg.JobLogs(&testsDetails, testsDetails.AppNS, clients); err != nil {
				log.Fatalf("Fail to get the expweriment job pod logs, due to %v", err)
			}

			//Checking the chaosresult verdict
			By("[Verdict]: Checking the chaosresult verdict")
			if _, err := pkg.ChaosResultVerdict(&testsDetails, clients); err != nil {
				log.Fatalf("ChasoResult Verdict check failed, due to %v", err)
			}
		})
	})
	// BDD TEST CASE 2
	// Operator in litmus ns, engine and experiment is in test ns
	// Application is in deafult ns
	Context("Check for litmus components", func() {

		It("Should check for creation of runner pod", func() {
			testsDetails := types.TestDetails{}
			clients := environment.ClientSets{}

			//Getting kubeConfig and Generate ClientSets
			By("[PreChaos]: Getting kubeconfig and generate clientset")
			if err := clients.GenerateClientSetFromKubeConfig(); err != nil {
				klog.Infof("Unable to Get the kubeconfig due to %v", err)
			}

			//Fetching all the default ENV
			//Note: please don't provide custom experiment name here
			By("[PreChaos]: Fetching all default ENVs")
			klog.Infof("[PreReq]: Getting the ENVs for the %v test", testsDetails.ExperimentName)
			environment.GetENV(&testsDetails, "pod-delete", "adminengine")

			//Create Namespace for the test
			By("Creating namespace")
			if _, err := pkg.CreateNamespace(clients, "test"); err != nil {
				log.Fatalf("Namespace creation failed, due to %v", err)
			}
			testsDetails.ChaosNamespace = "test"
			testsDetails.AppNS = "default"
			testsDetails.AppLabel = "run=adminapp"
			//Installing admin RBAC for the chaos
			By("[Install]: Installing RBAC")
			if err := pkg.InstallAdminRbac(&testsDetails); err != nil {
				log.Fatalf("Fail to install rbac, due to %v", err)
			}

			//Installing Chaos Experiment for pod-delete
			By("[Install]: Installing pod-delete chaos experiment")
			if err := pkg.InstallGoChaosExperiment(&testsDetails, testsDetails.ChaosNamespace); err != nil {
				log.Fatalf("Fail to install chaos experiment, due to %v", err)
			}

			//Installing Chaos Engine for container-kill
			By("[Install]: Installing chaos engine")
			if err := pkg.InstallGoChaosEngine(&testsDetails, testsDetails.ChaosNamespace); err != nil {
				log.Fatalf("Fail to install chaosengine, due to %v", err)
			}

			//Checking runner pod running state
			testsDetails.AppNS = "test"
			By("[Status]: Runner pod running status check")
			if _, err := pkg.RunnerPodStatus(&testsDetails, testsDetails.AppNS, clients); err != nil {
				log.Fatalf("Runner pod status check failed, due to %v", err)
			}

			//Waiting for experiment job to get completed
			//And Print the logs of the job pod (chaos pod)
			By("[Status]: Wait for job completion and then print logs")
			if _, err := pkg.JobLogs(&testsDetails, testsDetails.AppNS, clients); err != nil {
				log.Fatalf("Fail to get the expweriment job pod logs, due to %v", err)
			}

			//Checking the chaosresult verdict
			By("[Verdict]: Checking the chaosresult verdict")
			if _, err := pkg.ChaosResultVerdict(&testsDetails, clients); err != nil {
				log.Fatalf("ChasoResult Verdict check failed, due to %v", err)
			}
		})
	})

})