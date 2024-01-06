import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [data,setData]=useState('Nothing just api calling')
  useEffect(()=>{
    fetch('/api/users').then(da=>da.json()).then(da=>setData(JSON.stringify(da))).catch(err=>setData(JSON.stringify(err)))
  },[])

  return (
    <>
    <h1>Nothing just</h1>
    <strong>Data- </strong>{data}
    </>
  )
}

export default App
