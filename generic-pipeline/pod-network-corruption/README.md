# Pod Network Corruption

## Experiment Metadata

<table>
<tr>
<th> Name </th>
<th> Description </th>
<th> Documentation Link </th>
</tr>
<tr>
 <td> Pod Network Corruption </td>
 <td> This chaos action Injects packet corruption on the specified container by starting a traffic control (tc) process with netem rules to add egress packet corruption. Corruption is injected via pumba library with command Pumba netem corruption by passing the relevant network interface, packet-corruption-percentage, chaos duration, and regex filter for the container name. </td>
 <td>  <a href="https://docs.litmuschaos.io/docs/pod-network-corruption/"> Here </a> </td>
 </tr>
 </table

### Pipeline Runs


| Job ID |   Test Description         | Execution Time | Release Tag   | Test Result   |
 |---------|---------------------------| --------------|--------|--------|
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/223807">223807</a>           |  Inject Network Packet Corruption Into Application Pod           | Wed Oct  7 20:58:50 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/222990">222990</a>           |  Inject Network Packet Corruption Into Application Pod           | Mon Oct  5 16:38:11 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/220578">220578</a>           |  Inject Network Packet Corruption Into Application Pod           | Tue Sep 29 14:44:30 2020(IST)  | img | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/220543">220543</a>           |  Inject Network Packet Corruption Into Application Pod           | Tue Sep 29 14:28:37 2020(IST)  | img | N/A :cold_sweat: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/219643">219643</a>           |  Inject Network Packet Corruption Into Application Pod           | Fri Sep 25 12:36:47 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/218363">218363</a>           |  Inject Network Packet Corruption Into Application Pod           | Mon Sep 21 23:54:05 2020(IST)  | 1.8.1 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/217930">217930</a>           |  Inject Network Packet Corruption Into Application Pod           | Mon Sep 21 10:47:03 2020(IST)  | 1.8.1 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Fri Sep 18 17:06:08 2020(IST)  | 1.8.1 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Thu Sep 17 16:28:16 2020(IST)  | 1.8.0 | Failed :worried: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Tue Sep 15 21:39:10 2020(IST)  | 1.8.0 | Failed :worried: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Tue Sep 15 18:57:32 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Tue Sep 15 17:33:31 2020(IST)  | v15 | Awaited :cold_sweat: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Mon Sep 14 01:06:10 2020(IST)  | latest | Failed :worried: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Mon Sep 14 00:16:46 2020(IST)  | latest | Failed :worried: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Thu Sep  3 17:32:05 2020(IST)  | v7 | Failed :worried: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Mon Aug 31 23:17:48 2020(IST)  | v3 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Mon Aug 31 19:54:45 2020(IST)  | latest | Awaited :cold_sweat: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Mon Aug 31 18:00:02 2020(IST)  | latest | Awaited :cold_sweat: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Mon Aug 31 17:38:28 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Sun Aug 30 17:31:57 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Wed Aug 26 17:24:40 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Tue Aug 25 16:20:52 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Thu Aug 20 18:44:06 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Thu Aug 20 14:23:37 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Sun Aug 16 22:01:57 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Sun Aug 16 17:32:00 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Sun Aug 16 00:28:43 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Sat Aug 15 20:11:50 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Wed Aug 12 14:18:19 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Wed Aug 12 12:18:06 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Wed Aug 12 01:08:05 2020(IST)  | 1.6.2 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Tue Aug 11 20:02:24 2020(IST)  | 1.6.2 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Sat Aug  8 20:33:23 2020(IST)  | 1.6.2 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Wed Aug  5 06:17:05 2020(IST)  | 1.6.2 | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Wed Aug  5 02:22:56 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/"></a>           |  Inject Network Packet Corruption Into Application Pod           | Mon Jul 27 17:16:16 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/183242">183242</a>           |  Inject Network Packet Corruption Into Application Pod           | Mon Jul 27 06:27:00 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/180694">180694</a>           |  Inject Network Packet Corruption Into Application Pod           | Wed Jul 22 01:52:17 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/180071">180071</a>           |  Inject Network Packet Corruption Into Application Pod           | Mon Jul 20 21:06:24 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/179577">179577</a>           |  Inject Network Packet Corruption Into Application Pod           | Mon Jul 20 13:22:02 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/179088">179088</a>           |  Inject Network Packet Corruption Into Application Pod           | Mon Jul 20 11:14:55 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/178485">178485</a>           |  Inject Network Packet Corruption Into Application Pod           | Fri Jul 17 07:00:00 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/177519">177519</a>           |  Inject Network Packet Corruption Into Application Pod           | Thu Jul 16 06:59:59 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/177281">177281</a>           |  Inject Network Packet Corruption Into Application Pod           | Wed Jul 15 19:36:10 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/177131">177131</a>           |  Inject Network Packet Corruption Into Application Pod           | Wed Jul 15 18:31:53 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/177055">177055</a>           |  Inject Network Packet Corruption Into Application Pod           | Wed Jul 15 17:04:32 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/176458">176458</a>           |  Inject Network Packet Corruption Into Application Pod           | Wed Jul 15 12:15:53 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/176342">176342</a>           |  Inject Network Packet Corruption Into Application Pod           | Wed Jul 15 11:21:45 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/175737">175737</a>           |  Inject Network Packet Corruption Into Application Pod           | Wed Jul 15 03:06:28 2020(IST)  | ci | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/175706">175706</a>           |  Inject Network Packet Corruption Into Application Pod           | Wed Jul 15 02:04:50 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/175081">175081</a>           |  Inject Network Packet Corruption Into Application Pod           | Tue Jul 14 20:55:33 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/174980">174980</a>           |  Inject Network Packet Corruption Into Application Pod           | Tue Jul 14 18:39:33 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/174807">174807</a>           |  Inject Network Packet Corruption Into Application Pod           | Tue Jul 14 17:35:57 2020(IST)  | latest | Passed :smiley: |
|     <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/174752">174752</a>           |  Inject Network Packet Corruption Into Application Pod           | Tue Jul 14 16:34:44 2020(IST)  | latest | Passed :smiley: |
 |    <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/174726">174726</a>   |  Inject Network Packet Corruption Into Application Pod           |  Tue Jul 14 15:03:25 2020(IST)     |latest  |Passed :smiley:  |
