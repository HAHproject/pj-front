import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MotelIcon from '../../images/motelicon.png';
import HotelIcon from '../../images/hotelicon.png';
import PansionIcon from '../../images/pansionicon.png';
import GuestIcon from '../../images/guesticon.png';
import CampingIcon from '../../images/campingicon.png';


const MainNavIcon = () => {
    const navigate = useNavigate();

    const sectorHandler = (data) => {
        navigate(`/acco/${data}`);
    };

    return (
        <IconBox>
            <Icon>
                <Motel src={MotelIcon} onClick={()=>sectorHandler("motel")} />
                <Text>모텔</Text>
            </Icon>
            <Icon>
                <Hotel src={HotelIcon} onClick={()=>sectorHandler("hotel")} />
                <Text>호텔</Text>
            </Icon>
            <Icon>
                <Pansion src={PansionIcon} onClick={()=>sectorHandler("pansion")} />
                <Text>펜션</Text>
            </Icon>
            <Icon>
                <Guest src={GuestIcon} onClick={()=>sectorHandler("guestHouse")} />
                <Text>게스트하우스</Text>
            </Icon>
            <Icon>
                <Camping src={CampingIcon} onClick={()=>sectorHandler("camping")} />
                <Text>캠핑</Text>
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
const Motel = styled.img`
width: 80px;
  height: 80px;
  cursor: pointer;
`;

const Hotel = styled.img`
width: 80px;
  height: 80px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;
const Pansion = styled.img`
width: 80px;
  height: 80px;
  cursor: pointer;
`;
const Guest = styled.img`
width: 80px;
  height: 80px;
  cursor: pointer;
`;
const Camping = styled.img`
width: 80px;
  height: 80px;
  cursor: pointer;
`;
