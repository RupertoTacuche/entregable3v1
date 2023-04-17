import React from 'react'

const Location = ({location}) => {
    
  return (
    <section className='flex flex-col items-center text-[14px] gap-2 mb-5 relative bottom-10'>
        <h2 className='font-bold md:text-[18px] lg:text-[22px]  '>{location?.name}</h2>
        <ul className='flex flex-col text-[12px] md:text-[16px]'>
            <li className='md:flex'> <span className='md:w-[110px] md:mr-3 font-bold '>Type:</span> <span>{location?.type}</span> </li>
            <li className='md:flex'> <span className='md:w-[110px] md:mr-3 font-bold '>Dimension:</span> <span> {location?.dimension} </span></li>
            <li className='md:flex'> <span className='md:w-[110px] md:mr-3 font-bold '>Population:</span> <span>{location?.residents.length}</span></li>
            
        </ul>
    </section>

  )
}

export default Location