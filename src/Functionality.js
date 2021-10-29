import React, { Component } from 'react'
import {data} from "./data"


console.log(data)


export default function Functionality (props) {
    

    
    return (
        <div className="obama">
            {
                data
                .filter(item => item.id === props.cardNumber)
                .map(item => 
                <div key={item.id}>
                    <div className="idCheck">
                        <h2>{item.id}/{data.length}</h2>
                    </div>
                    <h1 className="firstName">{item.name.first} {item.name.last}</h1>
                    <h3>From: {item.city}</h3>
                    <h3>Job Title: {item.title}</h3>
                    <h3>Employer: {item.employer}</h3>
                    <br/>
                    <h3>Favorite Movies:</h3>
                    <ol className ="items">
                        <li>1.{item.favoriteMovies[0]}</li>
                        <li>2.{item.favoriteMovies[1]}</li>
                        <li>3.{item.favoriteMovies[2]}</li>
                    </ol>
                </div>
                )
            }
        </div>
    )



}





