import React from 'react'
import Item from './item'
import Add from './add'


const Movies=({movie})=> {
   
    
 return (
    <div  className='card-container'>
        { movie.map((el,index) =><Item key={index} movie={el} />)}
        <div className="new-movie">
          <Add />
        </div>
    </div>
  ) 
}
export default Movies;