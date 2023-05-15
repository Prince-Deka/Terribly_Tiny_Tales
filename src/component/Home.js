import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {

  const navigate = useNavigate()
  const handleClick = () => {
      navigate('/graph')
  }

  return (
    <div>
      <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ... rounded-xl px-14 py-4" onClick={handleClick}>
        Submit
      </button>
    </div>
  )
}

export default Home