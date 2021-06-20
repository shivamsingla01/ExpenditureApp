import Expensedate from "./Expensedate.js"
import "./Expenseitem.css";
function Expenseitem(props){
    const onchangehandler = (event) =>{
        //console.log(props.id);
    props.onclickhandler(props.id);
    };
    //console.log(props);
return (
<div className="expense-item">
    <Expensedate date={props.date} />
    <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
    </div>
    <button className = "delete-button" onClick = {onchangehandler}>Delete</button>
    </div>);
}
export default Expenseitem;