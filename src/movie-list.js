import React from 'react'
import Item from './item'

const Movies=({movie})=> {
   
    
 return (
    <div  className='card-container'>
        { movie.map((el,index) =><Item key={index} movie={el} />)}
        <div className="new-movie">
        </div>
    </div>
  ) 
}
export default Movies;