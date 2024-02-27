
import React, { useState } from "react";
import dayjs from 'dayjs';
import { DatePicker, Space } from 'antd';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const initialData = [
  {
    name: "01-10-2022",
    uv: 3400,
    pv: 2400,
    amt: 2400
  },
  {
    name: "01-01-2023",
    uv: 3000,
    pv: 2798,
    amt: 2210
  },
  {
    name: "01-04-2024",
    uv: 2000,
    pv: 2800,
    amt: 2290
  },
  {
    name: "01-07-2023",
    uv: 1780,
    pv: 1908,
    amt: 2000
  },
  {
    name: "01-10-2023",
    uv: 1890,
    pv: 1800,
    amt: 2181
  },
  {
    name: "01-01-2024",
    uv: 2390,
    pv: 1800,
    amt: 2500
  },
  {
    name: "01-04-2024",
    uv: 2490,
    pv: 2300,
    amt: 2100
  }
];
const { RangePicker } = DatePicker;
export default function Chart() {
  const [data, setData] = useState(initialData);

  const getDateInMS = (dateVal: any) => {
    let date = new Date(dateVal);
    return date.getTime();
  };

  const onDateChange = (val: any) => {
    let startTimeMs = getDateInMS(val[0].format());
    let endTimeMs = getDateInMS(val[1].format());
    
    // Filter data based on selected date range
    const filteredData = initialData.filter(entry => {
      const date = dayjs(entry.name, 'DD-MM-YYYY').toDate().getTime();
      return date >= startTimeMs && date <= endTimeMs;
    });

    // Update the state with filtered data
    setData(filteredData);
  };

  return (
    <>
    <LineChart
      width={1400}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
    </LineChart>
    <div className="flex justify-end">
    <RangePicker
      defaultValue={[dayjs('01-02-2023', "DD-MM-YYYY"), dayjs('01-02-2024', "DD-MM-YYYY")]}
      format={"DD-MM-YYYY"}
      onChange={onDateChange}
    />
    </div>
    </>
  );
}
