import axios from 'axios'
import React, { useEffect, useState } from 'react'


const ResidentCard = ({resident}) => {

    const [residentInfo, setResidentInfo] = useState()

    useEffect(()  => {
        axios.get(resident)
            .then((res)  => setResidentInfo(res.data))
            .catch((err)  => console.log(err))
    },[])
  return (
    <article className='border-2 border-[#8EFF8B] w-[90%] md:w-[300px] md:h-full'>
        <div>
            <img className=' bg-cover w-full' src={residentInfo?.image} alt="" />
        </div>
    <section className='py-3 px-1'>
        <h3 className='text-[28px] font-semibold ml-5'>{residentInfo?.name}</h3>
        <hr className='border-1 border-[#084851] mb-3'/>
        <ul className='ml-5'>
            <li className='flex gap-3'>
                <span className=' text-[#938686] text-[14px] w-[100px]'>Species</span>
                <span>{residentInfo?.species}</span>
            </li>
            <li className='flex gap-3'>
                <span className=' text-[#938686] text-[14px] w-[100px]'>Origin</span>
                <span>{residentInfo?.origin.name}</span>
            </li>
            <li className='flex gap-3'>
                <span className=' text-[#938686] text-[14px] w-[100px]'>Times appear</span>
                <span>{residentInfo?.episode.length}</span>
            </li>
         
        </ul>
        
    </section>

    </article>
    
    
  )
}  

export default ResidentCard 