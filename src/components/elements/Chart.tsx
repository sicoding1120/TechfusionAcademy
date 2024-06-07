import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Su", hours: 6 },
  { day: "Mo", hours: 8 },
  { day: "Tu", hours: 4 },
  { day: "We", hours: 9 },
  { day: "Th", hours: 6 },
  { day: "Fr", hours: 2 },
  { day: "Sa", hours: 8 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white p-2 rounded">
        <p className="label">{`${payload[0].value}h`}</p>
        <p className="intro">{label}</p>
      </div>
    );
  }

  return null;
};

const Chart = () => {
  return (
    <div className="p-4 bg-white rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-bold">Hours Activity</h2>
          <p className="text-green-500">+3% Increase than last week</p>
        </div>
        <div>
          <select className="p-2 border rounded" title="select">
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="hours" fill="#56B86F" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
