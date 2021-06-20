
//import { useState } from "react";
import Expenseitem from "./Expenseitems"
import "./ExpensesList.css"

const ExpenseList = (props) => {
    
const buttonhandler = (idkey) => {
    props.updateData(idkey);
    
}; 

if(props.items.length===0){
    return (<h2 className="expenses-list__fallback">No expenses.</h2>)
}
   
       return (<div className="expenses-list">{props.items.map(expense => <Expenseitem key = {expense.id} id = {expense.id} title={expense
        .title} amount={expense.amount} date={expense.date} onclickhandler={buttonhandler}/>)}
        <div className="total-expense">Total expenses of year {props.y}     =    ${props.items.reduce((accum,item)=>accum+parseInt(item.amount),0)} </div>
        </div>);
   
};
export default ExpenseList;
