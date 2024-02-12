import React from 'react'

const SmallCard_Section4 = ({image,title}) => {
  return (
    <>
      <div className='small-card col-lg-1 col-md-2 col-sm-3 col-4'>
        <img className='img-fluid' src={image} alt={title}/>
        <p>{title}</p>
      </div>
    </>
  )
}

export default SmallCard_Section4
