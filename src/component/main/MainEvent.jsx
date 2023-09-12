import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import slide1 from '../../images/slide1.PNG'
import slide2 from '../../images/slide2.PNG'
import slide3 from '../../images/slide3.PNG'


const MainEvent = () => {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true
    }

    return (
        <EventBg>
            <EventText>이벤트</EventText>
            <Slider {...settings}>
                <EventBox car='slide1'></EventBox>
                <EventBox car='slide2'></EventBox>
                <EventBox car='slide3'></EventBox>
            </Slider>
        </EventBg>
    )
}

export default MainEvent

const EventBg = styled.div`
  width: 930px;
  height: 300px;
  margin-top: 50px;
  position: relative;
  overflow: hidden;
`;

const EventText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const EventBox = styled.div`
  width: 930px;
  height: 200px;
  display: flex;
  background: url(${props => props.car === 'slide1' ? `${slide1}` : (props => props.car === 'slide2' ? `${slide2}` : `${slide3}`)});
  background-position: center;
  background-size: cover
`;
