import React from 'react'

const Location = ({location}) => {
    
  return (
    <section className='flex flex-col items-center text-[14px] gap-2 mt-5 mb-5'>
        <h2 className='font-bold'>{location?.name}</h2>
        <ul className='flex flex-col text-[12px]'>
            <li> <span className=' font-bold'>Type:</span>  {location?.type}</li>
            <li> <span className=' font-bold'>Dimension:</span> {location?.dimension}</li>
            <li> <span className=' font-bold'>Population:</span> {location?.residents.length}</li>
            
        </ul>
    </section>

  )
}

export default Location