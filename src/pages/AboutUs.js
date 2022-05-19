import React from "react";
import ImageSlider from "../components/slider/ImageSlider";
import { SliderData } from "../components/slider/SliderData";
import './Page.css';

function AboutUs() {
    return <div className="body_page">

        <div className="content_page">
           <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu hendrerit arcu. Integer pulvinar rutrum mauris sit amet sollicitudin. Ut sollicitudin dolor in nisl semper finibus. Curabitur euismod ac nisi ut gravida. Maecenas non sagittis purus. Nulla ac posuere neque. Suspendisse gravida et ligula sodales molestie. Fusce mollis ut lacus vel tincidunt. Nam feugiat diam vel urna ullamcorper lobortis. Aenean efficitur efficitur justo, nec bibendum lacus condimentum sed. Aenean eu justo luctus, scelerisque mi a, gravida purus. Proin porta tellus eget nunc aliquam gravida. Cras imperdiet magna ligula, et laoreet dolor auctor ut.</p>

            <ImageSlider slides={SliderData} />  
        </div>
        
    </div>
}

export default AboutUs;