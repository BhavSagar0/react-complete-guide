import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const valuesArr = props.dataPoints.map(x => x.value);
    const totalMaximum = Math.max(...valuesArr);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
