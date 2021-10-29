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
                        <label> Edit First Name: <input type="text" className="inputBox" placeholder={item.name.first} onChange = {(e) =>{
                           data[item.id -1].name.first = e.target.value
                            
                        }}
                        
                        /></label>
                        
                        
                        <label> Edit Last Name: <input type= "text"  className="inputBox" placeholder={item.name.last} onChange ={(e) =>{
                            data[item.id -1].name.last = e.target.value
                        }}
                        
                        /></label>
                        
                            
                    
                        <label> Edit City: <input type= "text"  className="inputBox" placeholder={item.city} onChange ={(e) =>{
                            data[item.id -1].city = e.target.value
                        }}
                        
                        /></label>
                         
                    
                        <label> Edit Job: <input type="text" className="inputBox" placeholder={item.title} onChange={(e) =>{
                            data[item.id -1].title = e.target.value
                        }}
                        
                        /></label>
                        
                     
                        <label> Edit Employer:  <input type="text" className="inputBox" placeholder={item.employer} onChange={(e) =>{
                            data[item.id -1].employer = e.target.value
                        }}
                         /></label>
                        
                    <br/>
                    


                    <label> Edit Favorite Movies: 
                    <ol className ="items">
                        <input type="text" className="inputBox" placeholder={item.favoriteMovies[0]} onChange={(e) => {
                            data[item.id -1].favoriteMovies[0] = e.target.value
                        }}
                         />
                        

                        <input type="text" className="inputBox" placeholder={item.favoriteMovies[1]} onChange={(e) => {
                            data[item.id -1].favoriteMovies[1] =e.target.value
                        }}
                        
                        />
                        

                        <input type="text" className="inputBox" placeholder={item.favoriteMovies[2]} onChange={(e) => {
                            data[item.id -1].favoriteMovies[2] = e.target.value
                        }}
                        
                        />
                        
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
