import React from 'react'
import { data } from './data'




function Edit(props) {
//     console.log(window)

// console.log(props)

    return (
        <div>
            {data
            .filter(item => item.id === props.cardNumber)
            .map(item => 
                <div key={item.id}>
                    <form className="editForm" 
                    onSubmit= {(e) => {
                        e.preventDefault()
                         props.setEditing(false)
                    }
                        }
                        
                    
                    >
                        <label> Edit First Name: <input type="text" className="inputBox" placeholder={item.name.first} /></label>
                        
                        
                        <label> Edit Last Name: <input type= "text"  className="inputBox" placeholder={item.name.last}/></label>
                        
                            
                    
                        <label> Edit City: <input type= "text"  className="inputBox" placeholder={item.city}/></label>
                         
                    
                        <label> Edit Job: <input type="text" className="inputBox" placeholder={item.title}/></label>
                        
                     
                        <label> Edit Employer:  <input type="text" className="inputBox" placeholder={item.employer}/></label>
                        
                    <br/>
                    


                    <label> Edit Favorite Movies: 
                    <ol className ="items">
                        <input type="text" className="inputBox" placeholder={item.favoriteMovies[0]} />
                        

                        <input type="text" className="inputBox" placeholder={item.favoriteMovies[1]} />
                        

                        <input type="text" className="inputBox" placeholder={item.favoriteMovies[2]}/>
                        
                    </ol>

                    <button type ="submit">Save  Meeee</button>
                    
                    </label>
                </form>
                
                </div>
                 )}




        </div>
    )
}

export default Edit
