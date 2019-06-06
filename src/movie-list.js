import React from 'react'
import Item from './item'
import LoadingHoc from './hoc'

const Movies=({movie})=> {
   
    
 return (
    <div  className='card-container'>
        { movie.map((el,index) =><Item key={index} movie={el} />)}
        <div className="new-movie">
        </div>
    </div>
  ) 
}
export default LoadingHoc(Movies);