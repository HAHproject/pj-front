import React from 'react';
import styled from 'styled-components';
import mainImage from '../../images/mainimg.jpg';
import MainNavIcon from './MainNavIcon';
import * as st from '../../feature/style';
import MainEvent from './MainEvent';
import EmployerSignup from './EmployerSignup';

const Main = () => {

    return (
        <>
            <st.Background>
                <MainImage />
                <MainNavIcon />
                <MainEvent />
                <EmployerSignup />
            </st.Background>
        </>
    )
}

export default Main;

const MainImage = styled.div`
  width: 930px;
  height: 480px;
  margin-top : 100px;
  background-color: skyblue;
  background-image: url(${mainImage});
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;