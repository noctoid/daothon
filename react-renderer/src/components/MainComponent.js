import React, { Component } from 'react';
import { Async } from 'react-async';
import { Switch, Route, Redirect, useParams } from 'react-router-dom';
import queryString from 'query-string'
import MyPieChart from './PieChartComponent';
import MyRadarChart from './RadarChartComponent';
import MyLineChart from './LineChartComponent';
import MyMixedChart from './MixedChartComponent';

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

const default_radarchart_config = {
    "cx": 300,
    "cy": 250,
    "width": 500,
    "height": 500,
    "outerRadius": 150,
    "data": [
        {
            "subject": "Idea Booster",
            "A": 0.3,
            "fullMark": 1.0,
        },
    ],
    "style": [
        {
            "name": "Mike",
            "dataKey": "A",
            "stroke": "#8884d8",
            "fill": "#8884d8",
            "fillOpacity": 0.6,
        },
    ]
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
                                    {/* <p><h2>Debug</h2><br></br>{JSON.stringify(mypiechart)}</p> */}
                                </div>
                            )
                        }
                    }
                }
            </Async>

        </div>
    )
}
const AsyncRadarChartFrag = (/*url, */myradarchart) => {
    // console.log(JSON.stringify(params));
    // const url = params.url;
    // const url = "http://localhost:8000/show_token/?id=22";
    // var mypiechart = Object.assign({}, default_piechart_config)
    // if (params.config){
    //     mypiechart = params.config;
    // }

    return (
        <div>
            <MyRadarChart radarchart={myradarchart} />
            {/* <p><h2>Debug</h2><br></br>{JSON.stringify(myradarchart)}</p> */}
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
                    <Route path={"/pie"} component={MyAsyncFragment} />
                    <Route exact path="/" component={() => AsyncPieChartFrag("http://localhost:8000/show_token/?id=22", default_piechart_config)} />
                    <Route exact path="/radar" component={MyRadarChart} />
                    <Route exact path="/line" component={MyLineChart} />
                    <Route exact path="/mixed" component={MyMixedChart} />
                </Switch>
            </div>
            // 
        )
    }
}

export default Main;