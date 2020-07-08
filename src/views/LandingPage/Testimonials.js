import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import FormatQuoteRounded from '@material-ui/icons/FormatQuoteRounded';

const settings = {
  autoplay: true,
  centerMode: true,
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  lazyLoad: true,
  autoplaySpeed: 5000,
  cssEase: 'linear',
};

const data = [
  {
    id: 1,
    text: `has helped my company's staff travels and 
    find the best accommodations there is.`,
    author: 'Elon Musk - CEO of Tesla Inc.',
  },
  {
    id: 2,
    text: `is awesome! Organizing my staff's 
    travels is very easy and fast.`,
    author: 'Jack Dorsey - Founder of Twitter',
  },
  {
    id: 3,
    text: 'has helped me to manage my work travels effectively. I highly recommend it.',
    author: '@the22mastermind - Software Engineer',
  },
];

const Testimonials = () => (
  <Slider {...settings}>
    {
      data.map((testimony) => (
        <div className="testimony-item" key={testimony.id}>
          <div className={testimony.id === 1 ? 'musk testimony-reviewer' : (testimony.id === 2 ? 'dorsey testimony-reviewer' : 'mastermind testimony-reviewer')} />
          <div className={testimony.id === 3 ? 'mastermind-content testimony-content' : 'testimony-content'}>
            <div className="testimony-text mb24">
              <span><FormatQuoteRounded color="primary" size={128} /></span>
              <span className="highlight">Barefoot Nomad</span>
              <span className="testimony-description">
                {testimony.text}
              </span>
            </div>
            <div className="testimony-author">{testimony.author}</div>
          </div>
        </div>
      ))
    }
  </Slider>
);

export default Testimonials;
