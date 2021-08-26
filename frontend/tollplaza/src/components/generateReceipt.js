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
                alert(JSON.stringify(resp));
            });
        });
    }
    render() {
        return <div>
            <div>
                <p>Generate receipt</p>
            </div>
            <div>
                <p>Enter Vehicle Number</p>
                <input type="text"
                    onChange={(e) => { this.setState({ vehicleRegNo: e.target.value }) }}
                /><br /><br />
                <p>Is Return</p>
                <input type="text"
                    onChange={(e) => { this.setState({ isReturn: e.target.value }) }}
                /><br /><br />
                <button onClick={() => this.generateReceipt()}> Generate </button>
            </div>
        </div >
    }
}

export default GenerateReceipt