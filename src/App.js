import { useState } from "react"
import Newexpense from "./Components/NewExpense/NewExpense"
import Expenses from "./Components/Expenses/Expenses"
var dummy = [];


function App() {
  const [expenses,updateexpenses] = useState(dummy);
  const getdata = (data) => {
    console.log(data.id);
    updateexpenses(expenses => {return [data, ...expenses];});
  };
  const changedata = (kid) =>{
    console.log(kid);
  updateexpenses(expenses => {return expenses.filter((expense)=>{return expense.id!==kid;})});
  }
  return (
    <div>
      
      <Newexpense liftup = {getdata}/>
      <Expenses data = {expenses} changeData={changedata}/>
    
    </div>
  );
}

export default App;
