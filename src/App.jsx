import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimension } from './helpers/random'
import axios from 'axios'
import Location from './components/Location'
import ResidentList from './components/ResidentList'
import Header from './components/Header'

function App() {
  const [location, setLocation] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = e.target.locationId.value
    const URL =`https://rickandmortyapi.com/api/location/${newLocation}`
    axios.get(URL)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))
  }
useEffect(() => {
  const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`
  
  axios.get(URL)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))
  
},[])

  return (
    <div className="App">
      <Header/>
      <form onSubmit={handleSubmit} className='flex flex-col  items-center gap-5'>
        <div className='flex h-[40px] w-[96%] md:w-[70%]'>
          <input id='locationId' placeholder='Type a location Id...'className='border-2 border-[#8EFF8B] w-[80%] bg-transparent ' type="text" />
          <button className='bg-[#8EFF8B] w-[20%]'> <i className='bx bx-search text-lg border-2 border-[#8EFF8B]'></i></button>
        </div>

        <h2 className='text-[#8EFF8B] text-[18px]'>Welcome to the crazy Universe!</h2>
      </form>
      <Location location={location} />
      <ResidentList location={location} />
    </div>
  )
}

export default App
