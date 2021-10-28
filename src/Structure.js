import { MdArrowBackIosNew} from 'react-icons/md'
import {MdArrowForwardIos} from 'react-icons/md'


function Structure() {
  return (
    <div className="App">
     <header>
       <h1> Home</h1>
     </header>
     <div className="container">
        <div className="powder">
          
        <div className="controls">
            <h3> <MdArrowBackIosNew /> Previous </h3>
            <div className ='control-btns'>
              <button>Edit</button>
              <button>Delete</button>
              <button>New</button>
            </div>
            <h3 className="next-h3"> Next <MdArrowForwardIos /></h3>
          </div>
        </div>
     </div>

    </div>
  );
}

export default Structure;
