import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import QrCard from './components/QrCard'
import TextArea from './components/TextArea'
import DownloadButton from './components/DownloadButton'
import FormatSelect from './components/FormatSelect'

function App() {

  return (
    <>
    <NavBar/>
    <QrCard/>
    <TextArea/>
    <DownloadButton/>
    <FormatSelect/>
    </>
  )
}

export default App
