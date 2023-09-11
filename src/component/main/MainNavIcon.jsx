import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Motel from '../../images/motelicon.png';
import Hotel from '../../images/hotelicon.png';
import Pansion from '../../images/pansionicon.png';
import Guest from '../../images/guesticon.png';
import Camping from '../../images/campingicon.png';


const MainNavIcon = () => {
    const navigate = useNavigate();
    const motelHandle = () => {
        navigate(``);
    };
    const hotelHandle = () => {
        navigate(``);
    };
    const pansionHandle = () => {
        navigate(``);
    };
    const guestHandle = () => {
        navigate(``);
    };
    const campingHandle = () => {
        navigate(``);
    };

    return (
        <IconBox>
            <Icon>
                <Motel src={Motel} onClick={motelHandle} />
                <Text>모텔</Text>
            </Icon>
            <Icon>
                <Hotel src={Hotel} onClick={hotelHandle} />
                <Text>호텔·리조트</Text>
            </Icon>
            <Icon>
                <Pansion src={Pansion} onClick={pansionHandle} />
                <Text>펜션</Text>
            </Icon>
            <Icon>
                <Guest src={Guest} onClick={guestHandle} />
                <Text>게스트하우스</Text>
            </Icon>
            <Icon>
                <Camping src={Camping} onClick={campingHandle} />
                <Text>캠핑·글램핑</Text>
            </Icon>
        </IconBox>
    );
}

export default MainNavIcon;

const IconBox = styled.div`
  width: 930px;
  height: 200px;
  display: flex;
  box-sizing: border-box;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  width: 120px;
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Text = styled.span`
  font-size: 1.1rem;
  color: gray;
`;