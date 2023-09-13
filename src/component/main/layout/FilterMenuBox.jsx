import React, { useState } from 'react';
import classes from "./Filter.module.css"
import "./SideMenuBox.css"


const FilterMenuBox = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div>
        <div className={classes.main}>
            <div className={classes.base} style={{ marginRight: '20px' }}>
                <p className={classes.base1} onClick={openModal}>상세조건 초기화</p>
            </div>
            <div className={classes.base1}>
                <p onClick={openModal}>날짜</p>

            </div>
            <div className={classes.base1}>
                <p onClick={openModal}>인원</p>

            </div>
            <div className={classes.base1}>
                <p onClick={openModal}>타입</p>
            </div>
            <div className={classes.base1}>
                <p onClick={openModal}>시설</p>
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p>모달 내용</p>
                    </div>
                </div>
            )}
        </div>
            <div style={{ display: 'grid', gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr" , width: "50%"}}>
                <div className={classes.base2}>
                    <p>조건 없음</p>

                </div>

                <div className={classes.base2}>
                <p>없음</p>

            </div>
            <div className={classes.base2}>
                <p>0명</p>

            </div>
            <div className={classes.base2}>
                <p>없음</p>
            </div>
            <div className={classes.base2}>
                <p>없음</p>
            </div>
            </div>
        </div>
    )
}

export default FilterMenuBox;
