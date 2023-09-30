import React  from "react"; 
import './assests/counterStyle.css'
import { increment , decrement,} from "./actions/counterActions"; 
import { useDispatch , useSelector } from "react-redux";

const Counter1 =()=>{
  const changeCount = useSelector((state)=>state.changeCount);
  const dispatch  = useDispatch()
  return(
    <div className="container">
      <h2> Counter using react redux</h2>
      <div className="child">
        <button onClick={()=>dispatch(decrement())} id="minusbtn"> - </button>
        <span className="state"> {changeCount} </span>
        <button onClick={()=>dispatch(increment())} id="plusbtn"> + </button>
        
      </div>
    </div>
  )
}

export default Counter1 ;