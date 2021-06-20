import { useState } from 'react'

import "./Expenseform.css"
const Expenseform = (props) => {
    const [inputTitle,setinputTitle] = useState('');
    const [inputAmount,setinputAmount] = useState('');
    const [inputDate,setinputDate] = useState('');
    const titleChangeHandler = (event)=>{
        //console.log(event.target.value);
    setinputTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
       // console.log(event.target.value);
        setinputAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        //console.log(event.target.value);
        setinputDate(event.target.value);
    };
   const submitHandler = (event) => {
   event.preventDefault();
   const expensedata = {
       
   title : inputTitle,
   amount : inputAmount,
   date : new Date(inputDate)
   };
   props.getnewdata(expensedata);
   setinputTitle('');
   setinputAmount('');
   setinputDate('');
   };
    return (
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value ={inputTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value = {inputAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2021-07-01" value={inputDate} onChange={dateChangeHandler}/>
            </div>

        </div>
        <div className="new-expense__actions">
            <button type="submit" >Add Expense</button>
        </div>
        </form>
    )
}
export default Expenseform;
