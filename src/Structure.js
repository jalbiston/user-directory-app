import { render } from '@testing-library/react'
import { MdArrowBackIosNew} from 'react-icons/md'
import {MdArrowForwardIos} from 'react-icons/md'
import Functionality from "./Functionality"
import React, { useState } from 'react'


const Structure = () => {
  
  let [cardNumber, setCardNumber] = useState(1)
  
console.log(cardNumber)
    return (
    <div className="App">
     <header>
       <h1> Home</h1>
     </header>
     <div className="container">
        <div className="powder">
          {/* functionality parts */}
        <Functionality cardNumber = {cardNumber}/>
        <div className="controls">
            <h3 className="previous-h3"
            onClick ={() => setCardNumber(cardNumber - 1)}
            > <MdArrowBackIosNew /> Previous </h3>
            <div className ='control-btns'>
              <button>Edit</button>
              <button>Delete</button>
              <button>New</button>
            </div>
            <h3 className="next-h3"
            onClick ={() => setCardNumber(cardNumber + 1)}
            > Next <MdArrowForwardIos />
            </h3>
          </div>
        </div>
     </div>

    </div>
  );
}

export default Structure;
