import React, { useState } from 'react'

const ConditionShow = () => {
    const [ show, setShow] = useState(false);
    const openShow = ()=>{
        setShow(true)
    }
  return (
    <div>   
            <h1> Hello Srinivas Good morning</h1>
            <h5 onClick={openShow}> Click to show</h5>
                {show &&(
                    <>
                        <h5> Data qwill show after click on show</h5>
                        <h5>Welcome to cinema of chiru</h5>
                        <h5>Welcome to cinema of chiru</h5>
                        <h5>Welcome to cinema of chiru</h5>
                        <h5>Welcome to cinema of chiru</h5>
                        <h5>Welcome to cinema of chiru</h5>
                        <p onClick={() => setShow(false)}>Close</p>
                    </>
                )}

                
      
    </div>
  )
}

export default ConditionShow
