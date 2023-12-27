import React, {useState} from 'react'
import { Carousel } from 'react-responsive-carousel';
import SimpleImageSlider from "react-simple-image-slider";
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
// import img5 from './assets/img5.jpg'
import './Slider.css'

const images=[
    img1,
    img2,
    img3,
    img4
];
const Slider = () => {
  const [search, setsearch] = useState("Search")
  return (
    <div className='slider'>
     

    </div>
  )
}

export default Slider