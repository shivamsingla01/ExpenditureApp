import "./ChartBar.css"
const ChartBar = (props) => {
    let barheight = '0%';
    if(props.maxValue>0){
        barheight = Math.round((props.value/props.maxValue)*100) +'%';
    }
    //console.log(barheight);
return (<div className = "chart-bar">
    <div className = "chart-bar__inner">
        <div className = "chart-bar__fill" style = {{height : barheight}}></div>
    </div>
    <div className = "chart-bar__label">{props.label}</div>
</div>)
};
export default ChartBar;