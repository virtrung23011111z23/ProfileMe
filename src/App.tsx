import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ProfileCard from './ProfileCard'
import './App.css'
import InformationBox from './InformationBox'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='ProfileCard'>
      <ProfileCard />
      </div>
      <div className='InformationBox'>
        <InformationBox />
      </div>
    </div>
  )
}

export default App
