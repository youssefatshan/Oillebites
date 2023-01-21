import React, { useState } from "react";
import Slider from "react-slick";
import './Testimonials.css'

const testimonials = [
  {
    name: "John Smith",
    text: "I had the burger and it was amazing! The service was great too.",
    picture: "picture1.jpg"
  },
  {
    name: "Jane Doe",
    text: "The chicken tenders were delicious! I'll definitely be back.",
    picture: "picture2.jpg"
  },
  {
    name: "Mike Johnson",
    text: "The milkshake was the best I've ever had. I can't wait to come back!",
    picture: "picture3.jpg"
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next)
  };

  return (
    <div className="tes-slider">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <img src={testimonial.picture} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
