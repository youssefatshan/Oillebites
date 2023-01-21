import React, { Fragment } from 'react';
import Header from '../header/Header';
import HeroSlider from '../heroSlider/HeroSlider';
import Menu from '../menu/Menu';
import Locations from '../locations/Locations'
import AboutUs from '../aboutUs/AboutUs';
import Testimonials from '../reviews/Testimonials';
const Home = () => {
  return (
    <Fragment>
        <Header/>
        <HeroSlider/>
        <Menu/>
        <Locations/> 
        <Testimonials/>
        <AboutUs/>
    </Fragment>
  )
}

export default Home
