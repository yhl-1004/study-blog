import React, { useCallback, useState } from 'react'
import './App.css'
import logo from './logo.svg'
import MenuList from './pages/MenuList'
import D0411 from './pages/contents/D0411'
import InternetWork from './pages/frontEnd/InternetWork'
import Http from './pages/frontEnd/Http'
import Browser from './pages/frontEnd/Browser'
import Dns from './pages/frontEnd/Dns'
import Domain  from './pages/frontEnd/Domain'
import Hosting from './pages/frontEnd/Hosting'

function App() {
  
  const [selectedComponent , setSelectedComponent] = useState<string>()

  const menuClickCallback = useCallback((menuName : string) => {
    setSelectedComponent(menuName)
  },[])

  const componentMapping = () => {
    if(selectedComponent==="internet work"){
      return <InternetWork></InternetWork>
    }
    if(selectedComponent==="http"){
      return <Http></Http>
    }
    if(selectedComponent==="browser"){
      return <Browser></Browser>
    }
    if(selectedComponent==="dns"){
      return <Dns></Dns>
    }
    if(selectedComponent==="domain"){
      return <Domain></Domain>
    }
    if(selectedComponent==="hosting"){
      return <Hosting></Hosting>
    }
  }

  

  return (
    <div className="flex">
      <MenuList callback={menuClickCallback}/>
      <div className="w-3/4 sm:4/4">
        <div className="hidden w-16 h-16 bg-gray-500 rounded-full sm:block"></div>
        {componentMapping()}
      </div>
    </div>
  )
}

export default App
