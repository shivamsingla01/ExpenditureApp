import { useState } from 'react'

import Expensefilter from "./expense-filter"
import ExpenseList from './ExpensesList.js'
import ExpensesChart from './ExpensesChart.js'
import "./expenses.css"
const Expenses = (props) => {
    const [filteredyear, setFilteredyear] = useState('2021');
   const changefilteryear = (year) => {
       setFilteredyear(year);
   }
   const filteredexpenses = props.data.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredyear;
   });
   const updatedata = (keyid) => {
    props.changeData(keyid);
   }
   //console.log("hi");
    return (
    
    <div className="expenses"> 
     <Expensefilter selected={filteredyear} onChangeFilter={changefilteryear}/>
     <ExpensesChart expenses = {filteredexpenses} />
     <ExpenseList items={filteredexpenses} updateData={updatedata} y={filteredyear}/>
    
  </div>);
};
export default Expenses;
