import React, { Component } from 'react';


class GenerateReceipt extends Component {
    generateReceipt() {
        console.log(`state`, this.state);
        fetch('http://localhost:8081/tollplaza/generateReceipt', {
            method: 'post',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                alert(
                    'Your receipt has been generated:- \n\n'
                    + "\tReceipt Id: " + resp._id + "\n"
                    + "\tRegistration No.: " + resp.vehicleRegNo + "\n"
                    + "\tAmount: Rs" + resp.amount + "\n"
                    + "\tIssue Date: " + resp.issueDate + "\n"
                    + "\tReturn: " + (resp.isReturn === 'true' ? "Yes" : "No") + "\n"
                    + '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬\n\n'
                );
            });
        });
    }
    render() {
        const choices = ["Yes", "No"];
        return <div>
            <center>
                <div>
                    <h3>Generate receipt</h3>
                </div>
                <br />
                <div>
                    <span style={{ display: "inline-block", width: "20%" }}>Enter Vehicle Number</span>
                    <input type="text"
                        onChange={(e) => { this.setState({ vehicleRegNo: e.target.value }) }}
                    /><br /><br />
                    <span style={{ display: "inline-block", width: "20%" }}>Is Return Tour</span>
                    {
                        choices.map(choice => (
                            <div className="horizontalLi" >
                                <input type="radio" value={choice} name='radiovalues' onChange={(e) => {
                                    this.setState({ isReturn: (e.target.value === "Yes") ? "true" : "false" })
                                }} />
                                <b>{choice}</b>
                            </div>
                        ))
                    }
                    <br /><br />
                    <button onClick={() => this.generateReceipt()}> Generate </button>
                </div>
            </center>
        </div >
    }
}

export default GenerateReceipt