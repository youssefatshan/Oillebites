import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import { testimonialsItems } from '../../assets/data/testimonials.js';
import './Testimonials.css'; // import custom CSS file
import ReviewImg from '../../assets/images/testimonials/ReviewImg.png'

const Testimonials = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    const nextIndex = activeIndex === testimonialsItems.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    const nextIndex = activeIndex === 0 ? testimonialsItems.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  // const goToIndex = (newIndex) => {
  //   setActiveIndex(newIndex);
  // }

  const slides = testimonialsItems.map((item, index) => {
    return (
      <CarouselItem
        key={index}
        className="testimonial-item"
      >
        <div className="testimonial-content">
          <p className="testimonial-quote">{item.quote}</p>
          <div className="testimonial-author">
            <img src={item.image} alt={item.name} className="testimonial-avatar" />
            <div className="testimonial-author-info">
              <h5 className="testimonial-author-name">{item.name}</h5>
              <p className="testimonial-author-title">{item.title}</p>
            </div>
          </div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <div className="testimonials-section d-flex" id='reviews'>
      <div className="testimonials-title">
        <h1 className="testimonials-title">What our customers are Saying</h1>
      </div>
      <div className="testimonials-content-2 d-flex">
        <div className="testimonials-container">
          <Carousel activeIndex={activeIndex} 
                    next={next} previous={previous}>
            {slides}
            <CarouselControl direction="prev" directionText="Previous" 
                             onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" 
                            onClickHandler={next} />
          </Carousel>
        </div>
        <div className="testimonials-image">
          <img src={ReviewImg} alt="" className="ReviewImg" />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;