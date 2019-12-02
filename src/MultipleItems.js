import React, { Component } from "react";
import Slider from "react-slick";
import styled from '@emotion/styled'
import mq from './breakpoints';

// local imports
import './App.css';

// Images
import clover from './images/clover.png';
import confetti from './images/confetti.png';
import dog from './images/dog.png';
import family from './images/family.png';
import ai from './images/ai.png';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      centerPadding: "100px",
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
      ]
    };
   
    const Div = styled.div`
    ${mq({
    height: ['auto', '230px', '300px'],
    margin: ['', '20px', '20px'],
    display: ['', '', 'flex !important']
    })}
    `

    return (
      <div>
        <Slider {...settings}>
          <Div className="wrapper">
              <div className="testimonialText">
                <h3 className="headerGreen">Game changer for our Doggy, Ollie!</h3>
                <p>
                    Ollie felt very at home in this doggy daycare. He was
                    always happy to see the other dogs and became a lot more
                    sociable.  Now that I can track his progress, I'm much more confident about taking him to the 
                    dog park!
                </p>
              </div>
              <div>
                <img className="testimonialImage"src={dog} alt="" />
              </div>
          </Div>
          <Div className="wrapper">
              <div className="testimonialText">
                <h3 className="headerGreen">Makes My Work Easy!</h3>
                <p>
                    Every since I implemented HiDoggy in my home
                    walking services, my customers are so much happier.
                    They know what their dogs have been up to, and what kind of
                    progress they've made.  HiDoggy has really helped me expand my business.
                </p>
              </div>
              <div>
                <img className="testimonialImage"src={confetti} alt=""/>
              </div>
          </Div>
          <Div className="wrapper">
              <div className="testimonialText">
                <h3 className="headerGreen">Easy to Track Progress!</h3>
                <p>
                    I've been trying to train Max to ensure that
                    he doesn't pee everywhere.  It's been a real 
                    challenge.  But now that I can see what he does 
                    at doggy daycare, it makes it much easier to pick
                    up where they left off with his training.  He's like 
                    our baby!
                </p>
              </div>
              <div>
                <img className="testimonialImage"src={family} alt=""/>
              </div>
          </Div>
          <Div className="wrapper">
              <div className="testimonialText">
                <h3 className="headerGreen">I feel so lucky to see Lucy through the day!</h3>
                <p>
                    Whenever I left Lucy at doggy daycare, I was so 
                    worried about if she was doing well.  But now that
                    PupsNow has HiDoggy, it's so easy for me to check
                    in on her and see that she's happy.
                </p>
              </div>
              <div>
                <img className="testimonialImage"src={clover} alt="" />
              </div>
          </Div>
          <Div className="wrapper">
              <div className="testimonialText">
                <h3 className="headerGreen">One App to Rule Them All!</h3>
                <p>
                    I couldn't believe how helpful having HiDoggy 
                    would be in communicating with the 'doggy parents'.
                    It's especially helpful for tracking puppies and 
                    showing their parents how quickly they're growing.  
                    After all, dogs are a part of the family!
                </p>
              </div>
              <div>
                <img className="testimonialImage"src={ai} alt="" />
              </div>
          </Div>
        </Slider>
      </div>
    );
  }
}
