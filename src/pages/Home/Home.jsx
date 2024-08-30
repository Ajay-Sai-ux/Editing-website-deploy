import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card'
import Footer from "../../components/Footer/footer";
import './Home.css'

const Home = () => {
  return (
    <div className='Home_fullcontainer'>
        <Navbar />

        <div className="Home_section">
          <h2 className='Home_header'>Becca Spaven</h2>
          <div className="Home_cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default Home