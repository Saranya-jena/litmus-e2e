# Pod Network Loss

## Experiment Metadata

<table>
<tr>
<th> Name </th>
<th> Description </th>
<th> Documentation Link </th>
</tr>
<tr>
 <td> Pod Network Loss </td>
 <td> This experiment injects chaos to disrupt network connectivity to kubernetes pods.The application pod should be healthy once chaos is stopped. It causes loss of access to application replica by injecting packet loss using pumba </td>
 <td>  <a href="https://docs.litmuschaos.io/docs/pod-network-loss/"> Here </a> </td>
 </tr>
 </table>

### Pipeline Runs


| Job ID |   Test Description         | Execution Time | Release Tag   | Test Result   |
 |---------|---------------------------| --------------|--------|--------|
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/223809">223809</a>           |  Inject Packet Loss Into Application Pod           | Wed Oct  7 21:03:37 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/222993">222993</a>           |  Inject Packet Loss Into Application Pod           | Mon Oct  5 16:45:29 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/220580">220580</a>           |  Inject Packet Loss Into Application Pod           | Tue Sep 29 14:49:09 2020(IST)  | img | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/219645">219645</a>           |  Inject Packet Loss Into Application Pod           | Fri Sep 25 12:41:37 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/218365">218365</a>           |  Inject Packet Loss Into Application Pod           | Mon Sep 21 23:58:44 2020(IST)  | 1.8.1 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/217932">217932</a>           |  Inject Packet Loss Into Application Pod           | Mon Sep 21 10:51:45 2020(IST)  | 1.8.1 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Fri Sep 18 17:11:18 2020(IST)  | 1.8.1 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Thu Sep 17 16:36:32 2020(IST)  | 1.8.0 | Failed :worried: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Tue Sep 15 21:44:26 2020(IST)  | 1.8.0 | Failed :worried: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Tue Sep 15 19:03:00 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Tue Sep 15 17:47:19 2020(IST)  | v15 | Awaited :cold_sweat: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Mon Sep 14 01:11:24 2020(IST)  | latest | Failed :worried: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Mon Sep 14 00:25:33 2020(IST)  | latest | Failed :worried: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Thu Sep  3 17:36:44 2020(IST)  | v7 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Mon Aug 31 23:22:24 2020(IST)  | v3 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Mon Aug 31 19:58:31 2020(IST)  | latest | Awaited :cold_sweat: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Sun Aug 30 17:36:33 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Wed Aug 26 17:29:26 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Tue Aug 25 16:25:37 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Thu Aug 20 18:48:40 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Thu Aug 20 14:28:17 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Sun Aug 16 22:06:32 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Sun Aug 16 17:36:39 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Sun Aug 16 00:33:21 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Sat Aug 15 20:16:29 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Wed Aug 12 14:22:39 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Wed Aug 12 12:22:18 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Wed Aug 12 01:12:22 2020(IST)  | 1.6.2 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Tue Aug 11 20:06:18 2020(IST)  | 1.6.2 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Sat Aug  8 20:37:18 2020(IST)  | 1.6.2 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Wed Aug  5 06:21:37 2020(IST)  | 1.6.2 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Wed Aug  5 02:26:58 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Packet Loss Into Application Pod           | Mon Jul 27 17:20:20 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/183244">183244</a>           |  Inject Packet Loss Into Application Pod           | Mon Jul 27 06:30:49 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/180696">180696</a>           |  Inject Packet Loss Into Application Pod           | Wed Jul 22 01:56:11 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/180073">180073</a>           |  Inject Packet Loss Into Application Pod           | Mon Jul 20 21:11:55 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/179580">179580</a>           |  Inject Packet Loss Into Application Pod           | Mon Jul 20 13:27:59 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/179090">179090</a>           |  Inject Packet Loss Into Application Pod           | Mon Jul 20 11:19:13 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/178487">178487</a>           |  Inject Packet Loss Into Application Pod           | Fri Jul 17 07:04:02 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/177521">177521</a>           |  Inject Packet Loss Into Application Pod           | Thu Jul 16 07:03:59 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/177283">177283</a>           |  Inject Packet Loss Into Application Pod           | Wed Jul 15 19:40:13 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/177133">177133</a>           |  Inject Packet Loss Into Application Pod           | Wed Jul 15 18:35:46 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/177057">177057</a>           |  Inject Packet Loss Into Application Pod           | Wed Jul 15 17:08:26 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/176460">176460</a>           |  Inject Packet Loss Into Application Pod           | Wed Jul 15 12:19:45 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/176344">176344</a>           |  Inject Packet Loss Into Application Pod           | Wed Jul 15 11:25:37 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/175739">175739</a>           |  Inject Packet Loss Into Application Pod           | Wed Jul 15 03:10:20 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/175708">175708</a>           |  Inject Packet Loss Into Application Pod           | Wed Jul 15 02:06:51 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/175291">175291</a>           |  Inject Packet Loss Into Application Pod           | Tue Jul 14 22:57:14 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/175083">175083</a>           |  Inject Packet Loss Into Application Pod           | Tue Jul 14 20:47:30 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/174982">174982</a>           |  Inject Packet Loss Into Application Pod           | Tue Jul 14 18:43:26 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/174809">174809</a>           |  Inject Packet Loss Into Application Pod           | Tue Jul 14 17:39:50 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/174754">174754</a>           |  Inject Packet Loss Into Application Pod           | Tue Jul 14 16:38:35 2020(IST)  | latest | Passed :smiley: |
 |    <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/174728">174728</a>   |  Inject Packet Loss Into Application Pod           |  Tue Jul 14 15:07:22 2020(IST)     |latest  |Passed :smiley:  |
