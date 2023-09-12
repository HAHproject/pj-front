import React from 'react';
import styled from 'styled-components';
import mainImage from '../../images/mainimg.jpg';
import MainNavIcon from './MainNavIcon';
import * as st from '../../feature/style';
import MainEvent from './MainEvent';

const Main = () => {

    return (
        <>
            <st.Background>
                <MainImage />
                <MainNavIcon />
                <MainEvent />
            </st.Background>
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