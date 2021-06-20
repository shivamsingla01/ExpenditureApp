import "./Newexpense.css"
import Expenseform from "./Expenseform"
const Newexpense = (props) => {
    const newdata = (data) => {
        //console.log(data);
        if(data.title===""){alert("Empty Title section !!");return;}
        if(data.amount===""){alert("Empty Amount section !! ");return;}
        if(isNaN(data.date.getTime())){alert("Invalid date !!");return;}
        
    const expensedata = {
            ...data,
            id: Math.random().toString()
        };
        console.log(expensedata.id)
        props.liftup(expensedata);
    }
    return (
        <div className="new-expense">
         <Expenseform getnewdata = {newdata}/>
        </div>
    )
}
export default Newexpense;