# Pod Network Latency

## Experiment Metadata

<table>
<tr>
<th> Name </th>
<th> Description </th>
<th> Documentation Link </th>
</tr>
<tr>
 <td> Pod Network Latency </td>
 <td> This experiment causes flaky access to application replica by injecting network delay using pumba. It injects latency on the specified container by starting a traffic control (tc) process with netem rules to add egress delays. It Can test the application's resilience to lossy/flaky network </td>
 <td>  <a href="https://docs.litmuschaos.io/docs/pod-network-latency/"> Here </a> </td>
 </tr>
 </table>

### Pipeline Runs


| Job ID |   Test Description         | Execution Time | Release Tag   | Test Result   |
 |---------|---------------------------| --------------|--------|--------|
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/223808">223808</a>           |  Inject Network Latency Into Application Pod           | Wed Oct  7 21:01:11 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/222992">222992</a>           |  Inject Network Latency Into Application Pod           | Mon Oct  5 16:42:50 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/220579">220579</a>           |  Inject Network Latency Into Application Pod           | Tue Sep 29 14:46:49 2020(IST)  | img | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/219644">219644</a>           |  Inject Network Latency Into Application Pod           | Fri Sep 25 12:39:18 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/218364">218364</a>           |  Inject Network Latency Into Application Pod           | Mon Sep 21 23:56:25 2020(IST)  | 1.8.1 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/217931">217931</a>           |  Inject Network Latency Into Application Pod           | Mon Sep 21 10:49:26 2020(IST)  | 1.8.1 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Fri Sep 18 17:08:44 2020(IST)  | 1.8.1 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Thu Sep 17 16:32:24 2020(IST)  | 1.8.0 | Failed :worried: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Tue Sep 15 21:40:17 2020(IST)  | 1.8.0 | Failed :worried: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Tue Sep 15 19:00:20 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Tue Sep 15 17:40:25 2020(IST)  | v15 | Awaited :cold_sweat: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Mon Sep 14 01:08:51 2020(IST)  | latest | Failed :worried: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Mon Sep 14 00:21:10 2020(IST)  | latest | Failed :worried: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Thu Sep  3 17:34:26 2020(IST)  | v7 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Mon Aug 31 23:20:06 2020(IST)  | v3 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Mon Aug 31 19:56:39 2020(IST)  | latest | Awaited :cold_sweat: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Mon Aug 31 18:01:55 2020(IST)  | latest | Awaited :cold_sweat: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Mon Aug 31 17:40:46 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Sun Aug 30 17:34:15 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Wed Aug 26 17:27:05 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Tue Aug 25 16:23:11 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Thu Aug 20 18:46:27 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Thu Aug 20 14:26:00 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Sun Aug 16 22:04:14 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Sun Aug 16 17:34:22 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Sun Aug 16 00:31:07 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Sat Aug 15 20:14:13 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Wed Aug 12 14:20:27 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Wed Aug 12 12:20:13 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Wed Aug 12 01:10:13 2020(IST)  | 1.6.2 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Tue Aug 11 20:04:21 2020(IST)  | 1.6.2 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Sat Aug  8 20:35:25 2020(IST)  | 1.6.2 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Wed Aug  5 06:19:06 2020(IST)  | 1.6.2 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Wed Aug  5 02:24:57 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Latency Into Application Pod           | Mon Jul 27 17:18:19 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/183243">183243</a>           |  Inject Network Latency Into Application Pod           | Mon Jul 27 06:28:59 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/180695">180695</a>           |  Inject Network Latency Into Application Pod           | Wed Jul 22 01:54:20 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/180072">180072</a>           |  Inject Network Latency Into Application Pod           | Mon Jul 20 21:09:14 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/179579">179579</a>           |  Inject Network Latency Into Application Pod           | Mon Jul 20 13:25:58 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/179089">179089</a>           |  Inject Network Latency Into Application Pod           | Mon Jul 20 11:16:58 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/178486">178486</a>           |  Inject Network Latency Into Application Pod           | Fri Jul 17 07:02:01 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/177520">177520</a>           |  Inject Network Latency Into Application Pod           | Thu Jul 16 07:01:59 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/177282">177282</a>           |  Inject Network Latency Into Application Pod           | Wed Jul 15 19:38:11 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/177132">177132</a>           |  Inject Network Latency Into Application Pod           | Wed Jul 15 18:33:54 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/177056">177056</a>           |  Inject Network Latency Into Application Pod           | Wed Jul 15 17:06:33 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/176459">176459</a>           |  Inject Network Latency Into Application Pod           | Wed Jul 15 12:17:53 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/176343">176343</a>           |  Inject Network Latency Into Application Pod           | Wed Jul 15 11:23:46 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/175738">175738</a>           |  Inject Network Latency Into Application Pod           | Wed Jul 15 03:08:28 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/175707">175707</a>           |  Inject Network Latency Into Application Pod           | Wed Jul 15 01:56:26 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/175082">175082</a>           |  Inject Network Latency Into Application Pod           | Tue Jul 14 20:57:22 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/174981">174981</a>           |  Inject Network Latency Into Application Pod           | Tue Jul 14 18:41:34 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/174808">174808</a>           |  Inject Network Latency Into Application Pod           | Tue Jul 14 17:37:59 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/174753">174753</a>           |  Inject Network Latency Into Application Pod           | Tue Jul 14 16:36:43 2020(IST)  | latest | Passed :smiley: |
 |    <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/174727">174727</a>   |  Inject Network Latency Into Application Pod           |  Tue Jul 14 15:05:28 2020(IST)     |latest  |Passed :smiley:  |
