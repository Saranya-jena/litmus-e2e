# Pod IO Stress Test

## Test Metadata
<table>
    <tr>
        <th> Name </th>
        <th> Description </th>
        <th> Docs </th>
    </tr>
    <tr>
        <td> Pod IO Stress Test </td>
        <td> This test the pod io experiment which causes io stress on the application pod. The experiment aims to verify the resiliency of applications that share this disk resource for ephemeral or persistent storage purposes</td>
       <td>  <a href="https://docs.litmuschaos.io/docs/pod-io-stress/"> Here </a> </td>
    </tr>
 </table>

### Pipeline Runs
 

| Job ID |   Test Description         | Execution Time | Release Tag   | Test Result   |
 |---------|---------------------------| --------------|--------|--------|
 |    <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/223811">223811</a>   |  IO stress on a app pods belonging to an app deployment           |  Wed Oct  7 21:09:31 2020(IST)     |ci  |Passed :smiley:  |
