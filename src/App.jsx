import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/header/Header.jsx'
import Row1 from './components/row1/Row1.jsx'
import Row2 from './components/row2/Row2.jsx'
import Table from './components/table/Table.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {
  return (
    <div className="container py-4">
      <Header />
      <Row1 />
      <Row2 />
      <Table />
      <Footer />
    </div>
  )
}

export default App
