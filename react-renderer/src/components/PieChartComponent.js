import React, { Component } from 'react';
import {PieChart, Pie, Legend, Tooltip, Cell} from 'recharts';

const MyPieChart = (props) => {
    const TwoSimplePieChart = () => {
        if (props.piechart){
            var dataNode = props.piechart;
            return (
                <PieChart width={dataNode.width} height={dataNode.height}>
                    {/* default: 800; 400 */}
                  <Pie isAnimationActive={dataNode.isAnimationActive} data={dataNode.data} cx={dataNode.cx} cy={dataNode.cy} outerRadius={dataNode.outerRadius} label>
                    {
                        dataNode.data.map((entry, index) => <Cell fill={dataNode.colors[index % dataNode.colors.length]}/>)
                    }
                  </Pie>
                  {/* default: true; data; 200; 200; 80 */}
                  <Tooltip/>
                 </PieChart>
              );
        }
        else{
            return (
                <div></div>
            );
        }
    }

    return (
        <div>
            <TwoSimplePieChart />
        </div>
    )
}

export default MyPieChart;