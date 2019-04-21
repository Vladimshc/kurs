import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

function CurrencyLineChart(props) {
    return (
        <ResponsiveContainer width="99%" height={400}>
            <LineChart data={props.data}>
                <XAxis dataKey="data" />
                <YAxis tickCount={10} />
                <CartesianGrid vertical={false} strokeDasharray="2 2" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="ask" stroke="#82ca9d" />
                <Line type="monotone" dataKey="bid" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default CurrencyLineChart;