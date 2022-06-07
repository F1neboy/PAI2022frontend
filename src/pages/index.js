import React from 'react';
import HeroSection from '../components/homePageComponents/HeroSection';
import './Page.css';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="body_page">
        <div className="content_page">
          <h1>Home</h1>
        </div>
      </div>
    </div>
    
  );
};

export default Home;