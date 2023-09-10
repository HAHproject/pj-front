import React, { useEffect, useState } from 'react';
import classes from "../../../styles/common/footer.module.css"

const Footer = () => {


    return (
            <div className={classes.footer}>
                <p>&copy; 2023 예시 회사. All Rights Reserved.</p>
                <p>
                    <a href="#">이용약관</a>
                    <a href="#">개인정보 처리방침</a>
                    <a href="#">고객지원</a>
                    <a href="#">문의하기</a>
                </p>
            </div>
    );
}

export default Footer;
