import React from 'react';
import HeroSection from '../components/homePageComponents/HeroSection';
import './Page.css';
import CarSection2 from '../components/homePageComponents/CarSection2';


const Home = () => {

  return (
    <div>
      <HeroSection />
      <div className="body_page">
        <div className="content_page">
          <h1>Wypożyczalnia PAI</h1>
          <CarSection2 />

        </div>
      </div>
    </div>
    
  );
};

export default Home;