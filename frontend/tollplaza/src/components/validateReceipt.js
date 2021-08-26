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
        return <div>
            <center>
                <div>
                    <p>Validate receipt</p>
                </div>
                <div>
                    <p>Enter Receipt Number</p>
                    <input type="text"
                        onChange={(e) => { this.setState({ receiptId: e.target.value }) }}
                    /><br /><br />
                    <button onClick={() => this.validateReceipt()}> Check </button>
                </div>
            </center>
        </div >
    }
}

export default ValidateReceipt