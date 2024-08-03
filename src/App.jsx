import { useState } from "react"
import Navbar from "./components/Navbar"
import Newsboard from "./components/newsboard"


const App = () => {
  const [category,setCategory] =useState("general"); 
  return (
    <div>
     <Navbar setCategory={setCategory}/>
    <Newsboard category={category}/>   
    </div>
  )
}

export default App

