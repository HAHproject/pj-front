import React from 'react';
import styled from 'styled-components';
import employerIamge from '../../images/employersignup.PNG'
import { Link } from 'react-router-dom';

const EmployerSignup = () => {

    return (
        <EmployerBg>
            <Link to="/">
                <EmployerBox src={employerIamge} alt="Employer Signup" />
            </Link>
        </EmployerBg>

    )
}

export default EmployerSignup;

const EmployerBg = styled.div`
  width: 930px;
  height: 300px;
  margin-top: 50px;
  position: relative;
  overflow: hidden;
`;

const EmployerBox = styled.img`
  width: 930px;
  height: 200px;
  display: flex;

`;