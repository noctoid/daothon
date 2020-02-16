import React, { Component } from 'react';
import { Async } from 'react-async';
import { Switch, Route, Redirect, useParams } from 'react-router-dom';
import queryString from 'query-string'
import MyPieChart from './PieChartComponent';


const default_piechart_config = { //default config
    "width": 800,
    "height": 400,
    "isAnimationActive": true,
    "data": [
        { "name": "Noname_0", "value": 31.19, "test": "shit" },
        { "name": "Noname_1", "value": 4 }
    ],
    "cx": 200,
    "cy": 200,
    "outerRadius": 80,
}

class MyAsyncFragment extends Component {
    // componentDidMount() {
    //     const values = queryString.parse(this.props.location.search)
    //     console.log(JSON.stringify(values));
    // }
    render() {
        const values = queryString.parse(this.props.location.search)
        // console.log("Params" + JSON.stringify(values))
        var piechart = Object.assign({}, default_piechart_config)
        // console.log("PieChart" + JSON.stringify(piechart))

        if (values.width) {
            piechart.width = eval(values.width)
        }
        if (values.height) {
            piechart.height = eval(values.height)
        }

        if (values.url) {
            return (AsyncPieChartFrag(values.url, piechart));
        }
        else {
            return (
                <div><h2>Null params</h2></div>
            )
        }
        return null;
    }
}

const async_fetch = (url) =>
    fetch(url) // "http://localhost:8000/show_token/?id=22"
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json());
        
const AsyncPieChartFrag = (url, mypiechart) => {
    // console.log(JSON.stringify(params));
    // const url = params.url;
    // const url = "http://localhost:8000/show_token/?id=22";
    // var mypiechart = Object.assign({}, default_piechart_config)
    // if (params.config){
    //     mypiechart = params.config;
    // }

    return (
        <div>
            <Async promise={async_fetch(url)}>
                {
                    ({ data, err, isloading }) => {
                        if (err) {
                            return (<div><h2>Error!</h2></div>)
                        }
                        if (isloading) {
                            return (<div><h2>Waiting for data ...</h2></div>)
                        }
                        if (data) {
                            // console.log(JSON.stringify(data))
                            mypiechart.data = data['token_detail'];

                            return (
                                <div>
                                    <MyPieChart piechart={mypiechart} />
                                    <p><h2>Debug</h2><br></br>{JSON.stringify(mypiechart)}</p>
                                </div>
                            )
                        }
                    }
                }
            </Async>

        </div>
    )
}

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>

                <Switch>
                    <Route path={"/query"} component={MyAsyncFragment} />
                    <Route exact path="/" component={() => AsyncPieChartFrag("http://localhost:8000/show_token/?id=22", default_piechart_config)} />
                </Switch>
            </div>
            // 
        )
    }
}

export default Main;