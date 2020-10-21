import React, { useEffect } from "react";
import "./ChartAnswer.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
const numA = getRandomInt(0, 400);
const maxB = 400 - numA;
let numB;
if (numA <400) {
  numB = getRandomInt(0, maxB);
} else {
  numB = 0;
}
const maxC = 400 - (numB + numA);
let numC;
if ((numA + numB) < 400) {
  numC = getRandomInt(0, maxC);
} else {
  numC = 0;
}
const maxD = 400 - (numB + numA + numC);
let numD;
if (numA + numB < 400) {
 numD = getRandomInt(0, maxD);
} else {
  numD = 0;
}

console.log(numA, numB, numC, numD);

const ChartAnswer = ({ answers }) => {
  const data = [
    { name: answers[0].variant, uv: numA, pv: 2400, amt: 2400 },
    { name: answers[1].variant, uv: numB, pv: 2400, amt: 2400 },
    { name: answers[2].variant, uv: numC, pv: 2400, amt: 2400 },
    { name: answers[3].variant, uv: numD, pv: 2400, amt: 2400 },
  ];

  const renderBarChart = (
    <BarChart width={450} height={300} data={data}>
      <XAxis dataKey="name" stroke="#8884d8" />
      <YAxis domain={[0, 400]} />
      <Tooltip content={<CustomToolTip answers={answers} />} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar
        dataKey="uv"
        fill="#8884d8"
        barSize={30}
        label={{ fill: "red", fontSize: 20 }}
      />
    </BarChart>
  );
  return (
    <div className="backdrop">
      <div className="chart">{renderBarChart}</div>
    </div>
  );
};

const CustomToolTip = ({ active, label, answers }) => {
  useEffect(() => {}, [active]);
  const getIntroOfPage = (label) => {
    if (label === answers[0].variant) {
      return `A: ${answers[0].answer_text}`;
    } else if (label === answers[1].variant) {
      return `B: ${answers[1].answer_text}`;
    } else if (label === answers[2].variant) {
      return `C: ${answers[2].answer_text}`;
    } else if (label === answers[3].variant) {
      return `D: ${answers[3].answer_text}`;
    }
  };
  if (active) {
    return (
      <div>
        <p>{getIntroOfPage(label)}</p>
      </div>
    );
  }
  return null;
};

export default ChartAnswer;
