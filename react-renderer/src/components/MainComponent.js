import React, { Component } from 'react';
import MyPieChart from './PieChartComponent';
import Async from 'react-async';

const async_fetch = () =>
  fetch("http://localhost:8000/show_token/?id=22")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "piechart": {
                "width": 800,
                "height": 400,
                "isAnimationActive": true,
                "data": [
                    { "name": "Noname_0", "value": 31.19, "test": "shit"},
                    // { "name": "18******496@163.com", "value": 10.84 },
                    // { "name": "guoy********dama@gmail.com", "value": 8.84 },
                    // { "name": "ariesmeowww", "value": 6.67 },
                    // { "name": "oH_q_wVdzlF5LBPc3MFAck-1KDR0", "value": 4.42 },
                    { "name": "Noname_1", "value": 4 }
                ],
                "cx": 200,
                "cy": 200,
                "outerRadius": 80,
            }
        }
    }

    render() {
        const Fragment = () => {
            return(
                <div>
                    <Async promiseFn={async_fetch}>
                        {
                            ({data, err, isloading}) => {
                                if (err) {
                                    return(<div><h2>Error!</h2></div>)
                                }
                                if (isloading) {
                                    return(<div><h2>Waiting for data ...</h2></div>)
                                }
                                if (data) {
                                    this.state.piechart.data = data['token_detail'];
                                    console.log(JSON.stringify(data))

                                    return(
                                        <div>
                                            <MyPieChart piechart={this.state.piechart} />
                                            <p><h2>Debug</h2><br></br>{JSON.stringify(this.state.piechart)}</p>
                                        </div>
                                    )
                                }
                            }
                        }
                    </Async>
                    
                </div>
            )
        }

        return(
            <Fragment />
        )
    }
}

export default Main;