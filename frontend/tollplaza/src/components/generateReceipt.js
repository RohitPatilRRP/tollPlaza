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
        return <div style={{
            'background-color': "#e0e0e0",
            "padding": "10px",
            "alignContent": "center",
            "width": "70%"
        }}>
            <center>
                <div style={{
                    "padding": "10px"
                }}>
                    <h3>Generate receipt</h3>
                </div>
                <br />
                <div>
                    <div style={{
                        "padding": "10px"
                    }}>
                        <span style={{ display: "inline-block", width: "20%" }}>Vehicle Registration No.</span>
                        <input type="text"
                            onChange={(e) => { this.setState({ vehicleRegNo: e.target.value }) }}
                        /><br /><br />
                    </div>
                    <div style={{
                        "padding": "20px"
                    }}>
                        <span style={{ display: "inline-block", width: "20%" }}>Return Journey</span>
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
                    </div>
                    <button style={{
                        "background-color": "#4CAF50",
                        "border": "none",
                        "color": "white",
                        "padding": "15px 32px",
                        "text-align": "center",
                        "text-decoration": "none",
                        "display": "inline-block",
                        "font-size": "16px"
                    }} onClick={() => this.generateReceipt()}> Generate </button>
                </div>
            </center>
        </div >
    }
}

export default GenerateReceipt