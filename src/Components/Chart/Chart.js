import ChartBar from "./ChartBar"
import "./Chart.css"
const Chart = (props) => {
  const arr = props.datapoints.map(datapoint => datapoint.value);
  const maxval= Math.max(...arr);
    return (
        <div className = "chart">

            {props.datapoints.map((datapoint) => (
                <ChartBar key={datapoint.label} value = {datapoint.value} maxValue = {maxval} label = {datapoint.label}/>
            ))}
        </div>
    );
};
export default Chart;