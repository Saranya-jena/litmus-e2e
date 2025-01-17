# Kubelet Service Kill

## Experiment Metadata

<table>
<tr>
<th> Name </th>
<th> Description </th>
<th> Documentation Link </th>
</tr>
<tr>
 <td> Kubelet Service Kill </td>
 <td> This experiment causes kubelet service kill gracefully for a certain chaos duration. The experiment aims to verify resiliency of applications whose replicas may be evicted or becomes unreachable on account on nodes turning unschedulable (Not Ready) due to kubelet service kill. </td>
 <td>  <a href=""> Added soon </a> </td>
 </tr>
 </table>

### Pipeline Runs


| Job ID |   Test Description         | Execution Time | Release Tag   | Test Result   |
 |---------|---------------------------| --------------|--------|--------|
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/223817">223817</a>           |  Kills the kubelet service on the application node           | Wed Oct  7 21:23:46 2020(IST)  | ci | Awaited :cold_sweat: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/222995">222995</a>           |  Kills the kubelet service on the application node           | Mon Oct  5 16:52:22 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/220588">220588</a>           |  Kills the kubelet service on the application node           | Tue Sep 29 15:11:04 2020(IST)  | img | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/219653">219653</a>           |  Kills the kubelet service on the application node           | Fri Sep 25 13:04:27 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/218373">218373</a>           |  Kills the kubelet service on the application node           | Tue Sep 22 00:21:56 2020(IST)  | 1.8.1 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/217940">217940</a>           |  Kills the kubelet service on the application node           | Mon Sep 21 11:12:19 2020(IST)  | 1.8.1 | Awaited :cold_sweat: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Fri Sep 18 17:30:38 2020(IST)  | 1.8.1 | Awaited :cold_sweat: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Thu Sep 17 16:48:05 2020(IST)  | 1.8.0 | Awaited :cold_sweat: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Tue Sep 15 22:01:06 2020(IST)  | 1.8.0 | Awaited :cold_sweat: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Tue Sep 15 19:20:43 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Tue Sep 15 18:12:36 2020(IST)  | v15 | Failed :worried: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Mon Sep 14 01:32:45 2020(IST)  | latest | Failed :worried: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Thu Sep  3 17:54:33 2020(IST)  | v7 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Mon Aug 31 23:37:28 2020(IST)  | v3 | Awaited :cold_sweat: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Mon Aug 31 20:09:57 2020(IST)  | latest | Awaited :cold_sweat: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Sun Aug 30 17:54:32 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Wed Aug 26 17:46:24 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Tue Aug 25 16:43:23 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Thu Aug 20 19:05:26 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Thu Aug 20 14:45:45 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Sun Aug 16 22:23:10 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Sun Aug 16 17:53:29 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Sun Aug 16 00:49:40 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Sat Aug 15 20:33:39 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Wed Aug 12 14:37:21 2020(IST)  | ci | Awaited :cold_sweat: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Wed Aug 12 12:38:05 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Wed Aug 12 01:26:40 2020(IST)  | 1.6.2 | Awaited :cold_sweat: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Tue Aug 11 20:19:06 2020(IST)  | 1.6.2 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Sat Aug  8 20:52:01 2020(IST)  | 1.6.2 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Wed Aug  5 06:36:50 2020(IST)  | 1.6.2 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Wed Aug  5 02:43:52 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Kills the kubelet service on the application node           | Sat Aug  1 01:53:21 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/180702">180702</a>           |  Kills the kubelet service on the application node.           | Wed Jul 22 02:11:20 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/180079">180079</a>           |  Kills the kubelet service on the application node.           | Mon Jul 20 21:39:46 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/179582">179582</a>           |  Kills the kubelet service on the application node.           | Mon Jul 20 13:33:40 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/179096">179096</a>           |  Kills the kubelet service on the application node.           | Mon Jul 20 11:33:31 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/178493">178493</a>           |  Kills the kubelet service on the application node.           | Fri Jul 17 07:18:50 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/177527">177527</a>           |  Kills the kubelet service on the application node.           | Thu Jul 16 07:18:19 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/177289">177289</a>           |  Kills the kubelet service on the application node.           | Wed Jul 15 19:54:33 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/177139">177139</a>           |  Kills the kubelet service on the application node.           | Wed Jul 15 18:50:16 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/177063">177063</a>           |  Kills the kubelet service on the application node.           | Wed Jul 15 17:22:41 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/176466">176466</a>           |  Kills the kubelet service on the application node.           | Wed Jul 15 12:34:13 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/176350">176350</a>           |  Kills the kubelet service on the application node.           | Wed Jul 15 11:41:08 2020(IST)  | ci | Failed :worried: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/175745">175745</a>           |  Kills the kubelet service on the application node.           | Wed Jul 15 03:24:32 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/175714">175714</a>           |  Kills the kubelet service on the application node.           | Wed Jul 15 02:20:48 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/175089">175089</a>           |  Kills the kubelet service on the application node.           | Tue Jul 14 21:09:45 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/174988">174988</a>           |  Kills the kubelet service on the application node.           | Tue Jul 14 18:55:43 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/174814">174814</a>           |  Kills the kubelet service on the application node.           | Tue Jul 14 17:42:40 2020(IST)  | latest | Passed :smiley: |
 |    <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/174733">174733</a>   |  Kills the kubelet service on the application node.           |  Tue Jul 14 15:19:11 2020(IST)     |latest  |Passed :smiley:  |
