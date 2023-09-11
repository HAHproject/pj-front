import React from 'react';
import styled from 'styled-components';
import mainImage from '../images/mainimg.jpg';
import MainNavIcon from './MainNavIcon';

const Main = () => {

    return (
        <>
            <MainImage />
            <MainNavIcon />
        </>
    )
}

export default Main;

const MainImage = styled.div`
  width: 930px;
  height: 480px;
  background-color: skyblue;
  background-image: url(${mainImage});
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;