import React, { Component } from 'react';


class ValidateReceipt extends Component {
    validateReceipt() {
        console.log(`state`, this.state);
        fetch('http://localhost:8081/tollplaza/validateReceipt', {
            method: 'post',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                alert(''
                    + "" + resp.msg + "\n\n\n"
                    + '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬\n\n'
                );
            });
        });
    }
    render() {
        return <div style={{
            'background-color': "#e0e0e0",
            "padding": "10px",
            "alignContent": "center",
            "width": "70%"
        }}>
            <center>
                <div>
                    <h3>Validate receipt</h3>
                </div>
                <div style={{
                    "padding": "40px"
                }}>
                    <span style={{ display: "inline-block", width: "20%" }}> Enter Receipt Number</span>
                    <input type="text"
                        onChange={(e) => { this.setState({ receiptId: e.target.value }) }}
                    /><br /><br />
                    <button style={{
                        "background-color": "#4CAF50",
                        "border": "none",
                        "color": "white",
                        "margin":"50px 0px 0px 0px",
                        "padding": "15px 32px",
                        "text-align": "center",
                        "text-decoration": "none",
                        "display": "inline-block",
                        "font-size": "16px"
                    }} onClick={() => this.validateReceipt()}> Check </button>
                </div>
            </center>
        </div >
    }
}

export default ValidateReceipt