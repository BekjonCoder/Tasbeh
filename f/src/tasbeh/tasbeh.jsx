import { useState } from "react"; 
import "../index.css"
const Tasbeh = () => {
    const [count,setCount]=useState(0)
    function qushish(){
        setCount(count+1)
    }
    function ayirish(){
        setCount(count-1)

    }
    function remove(){
      setCount(0)
    }
    
    
  return (
    <>
    <div className="container">
    <div className="tasbeh">
    <div className="screen">
      <div className="count"><h3>{count}</h3></div>
    </div>
    <button className="small-button" onClick={remove}></button>
    <button className="small-button2" onClick={count>0 ? ayirish:undefined}></button>
    <button className="main-button" onClick={count===999999999?undefined:qushish}></button>
    <span className={count<=32 ?'alham':count<=65?'subhan':count<=98?'akbar':count<=131?'alham':'subhan'}></span>
    
    
  </div>
    </div>
    </>
  )
}

export default Tasbeh