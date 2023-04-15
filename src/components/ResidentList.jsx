import React from 'react'
import ResidentCard from './ResidentCard'

const ResidentList = ({location}) => {

    const residents = location?.residents

  return (
    <section className='flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center'>
        {
            residents?.map((resident) => (
                <ResidentCard key={resident} resident={resident}/>
            ))}      
    </section>
  )
}

export default ResidentList