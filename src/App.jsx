import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimension } from './helpers/random'
import axios from 'axios'
import Location from './components/Location'
import ResidentList from './components/ResidentList'
import Header from './components/Header'

function App() {
  const [location, setLocation] = useState()
  const [locationAll, setlocationAll] = useState([])
  const [inputValue, setinputValue] = useState("")
  const [resulSearch, setresulSearch] = useState([])

  const handleSubmit = ({id, name}) => {
    // e.preventDefault()
    // const newLocation = e.target.locationId.value
    const URL =`https://rickandmortyapi.com/api/location/${id}`
    axios.get(URL)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))
    setresulSearch([])
    setinputValue(name)
    
  }
useEffect(() => {
  const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`
  
  axios.get(URL)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))
  
},[])

useEffect(()=> {
axios.get('https://rickandmortyapi.com/api/location')
.then(res => setlocationAll(res.data.results))
}, [])

const captureValue = () => {

}

const handleSearch = (e) => {
  
  setinputValue(e.target.value)  
  const result = locationAll.filter(locat => locat.name.trim().includes(inputValue))
  setresulSearch(result)
  if (inputValue === "") {
    setresulSearch([])
    console.log('hola');
  }
}

  return (
    <div className="App">
      <Header/>
      <form  className='flex flex-col  items-center  relative bottom-24'>
        <div className='flex justify-center h-[40px] w-[96%] md:w-[70%] lg:w-[60%] lg:h-[60px]'>
          <input id='locationId' placeholder='Type a location name...'className='border-2 border-[#8EFF8B] w-[80%] bg-transparent pl-3 ' type="text" onChange={handleSearch} value={inputValue}/>
          
          {/* <button className=' bg-[#8EFF8B] w-[20%]'> <i className='bx bx-search text-lg border-2 border-[#8EFF8B]'></i></button> */}
        </div>
        <div className=' text-black bg-white w-[96%] md:w-[70%] lg:w-[60%]'>
          {
            resulSearch.map(loc => (
              <div key={loc.id} className=' hover:bg-slate-400 cursor-pointer pl-3'>
                <p onClick={()=> handleSubmit(loc)}>{loc.name}</p>
              </div>

            ))
          }
          </div>
        <h2 className='text-[#8EFF8B] mt-5 text-[18px] md:text-[24px]'>Welcome to the crazy Universe!</h2>
      </form>
      <Location location={location} />
      <ResidentList location={location} />
      
    </div>
  )
}

export default App
