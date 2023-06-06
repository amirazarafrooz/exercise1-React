import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import './components/App.css'

function App() {
  return(
    <div class="App">

      <Card  image="./public/images/chevy.jpg" title="Lizard" description="Chevrolet is an iconic American car brand known for its reliable, dependate, and affordable vehicles. Founded in 1911, Chevy has become one of the most recognizable car brands in the world." textlink1="SHARE" textlink2="LEARN MORE"/>
     
    </div>
  )
  
}

export default App
