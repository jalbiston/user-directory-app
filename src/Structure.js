import { render } from '@testing-library/react'
import { MdArrowBackIosNew} from 'react-icons/md'
import {MdArrowForwardIos} from 'react-icons/md'
import Functionality from "./Functionality"
import React, { useState } from 'react'
import {data} from "./data"
import Edit from './Edit'


const Structure = () => {
  const [editing, setEditing] = useState(false)
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

          {editing? <Edit cardNumber= {cardNumber} setEditing = {setEditing} />:(<Functionality cardNumber = {cardNumber}/>)}
        
        <div className="controls">
            <h3 className="previous-h3"
            onClick ={() => {
              if(cardNumber <= 1){
                alert("You can't have a negative card, idiot!")
              } else {
                setCardNumber(cardNumber -1)
              }
            }}
            > <MdArrowBackIosNew /> Previous </h3>
            <div className ='control-btns'>
              <button
              onClick ={() => {
                setEditing(true)
              }}
              >Edit</button>
              <button
              onClick ={() => {
                let num = cardNumber -1
                console.log(num)
                data.splice(num, 1)
                alert(`Why do you have to be so mean?????`)
              }}
              >Delete</button>
              <button>New</button>
            </div>
            <h3 className="next-h3"
            onClick ={()  => {
            if(cardNumber >= data.length){
              // stop moving the cards
              alert("There No more cards Foo")
            } else {
              // allow user to keep going
              setCardNumber(cardNumber +1)
            }

            }}
            > Next <MdArrowForwardIos />
            </h3>
          </div>
        </div>
     </div>

    </div>
  );
}

export default Structure;
