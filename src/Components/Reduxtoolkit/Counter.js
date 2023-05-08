import React from 'react'
import { useState } from 'react'

function Counter() {
  const[number,setnumber]=useState('');
  return (
    <div>
           <div className="container m-5 p-3">
                   <h4><b>Redux ToolKit</b></h4>

                  <div className="row bg-dark p-4">
                      <div className="col-sm-4"></div>
                      <div className="col-sm-4">
                            <button className='btn btn-light'>-</button>
                            <span>{number} </span>
                            <button className='btn btn-light'>+</button>
                      </div>
                      <div className="col-sm-4"></div>
                  </div>
           </div>
    </div>
  )
}

export default Counter
