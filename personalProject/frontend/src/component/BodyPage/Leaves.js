import React from 'react'
import '../../style/BodyPage/Leaves.css'

export default function Leaves() {
    return (
        <div className="leaves">
            <div className="summaryAndHistory">
                <div className="summary">
                    <div>
                        <table>
                            <tr>
                                <th>Summary</th>
                            </tr>
                            <tr>
                                <td>Annual leaves</td>
                                <td>9/10</td>
                            </tr>
                            <tr>
                                <td>Sick leaves</td>
                                <td>15/30</td>
                            </tr>
                            <tr>
                                <td>Leaves without pay</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Person leaves</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Parental leaves</td>
                                <td>90/90</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="history">
                    <div>
                        <h1>Request History</h1>
                        <select>
                            <option>2020 - Apr</option>
                            <option>2020 - Mar</option>
                        </select>
                        <table>
                            <tr>
                                <th>Leave type</th>
                                <th>Start date</th>
                                <th>End date</th>
                                <th>Total date</th>
                                <th>Status</th>
                            </tr>
                            <tr>
                                <td>Sick</td>
                                <td>April - 23</td>
                                <td>April - 25</td>
                                <td>3</td>
                                <td>Approved</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className="request">
                <h1>Leave Request</h1>
                <label>Leave type*</label>
                <select>
                    <option>--Select--</option>
                    <option></option>
                </select>
                <label>Start date*</label>
                <option>
                    <select>--Select</select>
                </option>
                <button>All day</button>
                <button>AM</button>
                <button>PM</button>
                <label>End date*</label>
                <option>
                    <select>--Select--</select>
                </option>
                <button>All day</button>
                <button>AM</button>
                <button>PM</button>
                <label>Approver*</label>
                <select>
                    <option>--Select</option>
                </select>
                <label>Reason</label>
                <textarea></textarea>
                <label>Request</label>
                <input type = "file" />
            </div>
        </div>
    )
}
