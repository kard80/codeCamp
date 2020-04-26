import React from 'react'
import {Row, Col} from 'antd'
import '../../style/BodyPage/People.css'

export default function People() {
    return (
        <div className = "people">
            <Row className = "head">
              <table>
                  <tr>
                      <th>Name</th>
                      <th>Job Position</th>
                      <th>Department</th>
                      <th>Supervisor</th>
                      <th>Status</th>
                  </tr>
                  <tr>
                      <td><a href = "">Mike Jordan</a></td>
                      <td>Digital marketing</td>
                      <td>Marketing</td>
                      <td>Tony alba</td>
                      <td>Active</td>
                  </tr>
                  
              </table>
            </Row>
        </div>
    )
}
