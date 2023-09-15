import classes from "./paymentIndex.css"
import { useState } from 'react';
import {ReservationData, User} from "../../../data/DataList";

const PaymentBox = () => {

    const [payment,setPayment] = useState({})



    const paymentDataHandler = (e) => {
        const {name,value} = e.target

        setPayment({...payment,[name]:value})
    }


    const [phoneNumber, setPhoneNumber] = useState("");
    const [buttonMessage, setButtonMessage] = useState("");
    const [availableCoupon, setAvailableCoupon] = useState("?");
    const [availablePoint, setAvailablePoint] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const options = ["카드결제", "현장결제"];
    const [selectedOption, setSelectedOption] = useState("결제 수단을 선택하세요.");
    const coupon = User.coupon.length;
    const point = User.point;
    const checkoutData = ReservationData;
    const [reservationUname, setReservationUname] = useState("");
    const [selectedCoupon, setSelectedCoupon] = useState(0);
    const [price, setPrice] = useState(0);
    const [discountPoint, setDiscountPoint] = useState(0);

    const countCoupon = (
    ) => {
        setAvailableCoupon(coupon)
    }

    const countPoint = (
    ) => {
        setAvailablePoint(point)
    }

    const phoneSave = (e) => {
        setPhoneNumber(e.target.value);
    }

    const messageOutput = (message) => {
        setButtonMessage(message);
    }


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const selectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    }

    const saveName = (inputName) => {
        setReservationUname(inputName);
    }

    const savePhoneNum = (inputPH) => {
        setPhoneNumber(inputPH);
    }

    const checkHandler = () => {
       if (phoneNumber === "" || reservationUname === "")
       { alert("값을 입력해주세요.")}
       return
    }

    const couponClick = (coupon) => {
        setSelectedCoupon(coupon === setSelectedCoupon(coupon) ? null :coupon);
    }

    const discountPrice = (e) => {
        setDiscountPoint(e.target.value)
        setPrice (Number(ReservationData.price) - Number(selectedCoupon) - Number(e.target.value))
    }


    return (
<>

            <div style={{display:'flex',flexDirection:"column", margin:"0 20px"}}>
                <div style={{ marginBottom:"10px", borderBottom: "1px solid rgba(0,0,0,0.08)"}}>
                    <div style={{fontWeight:"bold", fontSize:"14pt", marginBottom:"30px"}}>
                        예약자 정보
                    </div>
                    <div style={{margin:"10px 0", fontSize:"14pt", color:"gray"}}>
                        예약자 이름
                    </div>
                    <input  style={{fontSize: '21px', color: 'gray', width: '80%', marginBottom: "20px"}}
                            onInput={saveName}
                            placeholder={" 체크인시 필요한 정보입니다."}></input>
                    <div style={{ margin: "10px 0", fontSize:"14pt", color:"gray"}}>
                        휴대폰 번호
                    </div>
                    <div style={{margin: "10px 0", fontSize:"11pt", color:"lightgray", fontWeight: "bold"}}>
                        개인정보를 위해 안심번호로 숙소에 전송됩니다.
                    </div>

                    <input  style={{fontSize: '21px', color: 'gray', width: '80%', margin: "10px 0"}}
                            onInput={savePhoneNum}
                            placeholder={" 체크인시 필요한 정보입니다."}
                    value={phoneNumber} onChange={phoneSave}></input>
                    {phoneNumber === '' && <div  style={{fontSize: '14px', color: 'red'}}> 휴대폰 번호를 확인해주세요.</div>}
                    <div style={{ margin: "30px 0", color: 'gray', fontSize:"14pt"}}>방문방법</div>
                    <div style={{margin: "30px 0"}}>
                    <button onClick={()=> messageOutput("")}>도보</button> <button onClick={()=> messageOutput('차량')}>차량</button>
                    </div>
                    {buttonMessage === '차량' && (<div style={{color:"gray", fontSize: "14px", marginBottom: "10px"}}> 주차장 만차시 주차가 어려울 수 있어요.
                        </div>)}
                </div>
                <div style={{ marginBottom:"10px", borderBottom: "1px solid rgba(0,0,0,0.08)"}}>
                    <div style={{fontWeight:"bold", fontSize:"14pt", marginTop: "30px",marginBottom:"30px"}}>
                        할인 수단 선택
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: "1fr 2fr 1.5fr", maxHeight: "100px"}}>
                        <div>
                            <div style={{ margin: "10px 0", fontSize: "14pt", color: "gray" }}>
                                구매총액
                            </div>
                        </div>
                        <div>
                            <div>
                            </div>
                        </div>
                        <div>
                            <div style={{ margin: "10px 40px", fontSize: "14pt", textAlign: "right", fontWeight: "bold"}}>
                                {`${ReservationData.price} 원`}
                            </div>
                        </div>
                    </div>
                    <div style={{ display:"grid", gridTemplateColumns: "1fr 1fr", margin: "10px 0" }}>
                        <div>
                            <div style={{marginBottom: "20px", color: "gray", }}>보유 쿠폰 현황</div>
                        {User.coupon.map((coupon) => (
                            <div style={{cursor:"pointer", color: "gray"}} key={coupon} onClick={() => couponClick(coupon)}>
                                {coupon} 원
                            </div>
                        ))}
                        </div>
                        <div style={{display:"flex", justifyContent: "flex-end", marginRight: "40px", alignItems:"flex-end"}}>
                        {selectedCoupon && <div>- {selectedCoupon} 원</div>}
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', margin: "10px 0" }}>
                        <div>
                            <button onClick={countPoint}>{`사용가능한 포인트 ${availablePoint}`}</button>
                        </div>
                        <div>
                            <input onChange={discountPrice} placeholder={"0"} style={{fontSize: '21px', color: 'gray', width: '80%', margin: "10px 0", textAlign:"right"}} /> P
                        </div>
                    </div>
                </div>
                <div style={{ marginBottom: "10px"}}>
                    <div>
                        <div style={{  display: "flex", flexDirection: "column" ,border: "1px solid rgba(0,0,0,0.08)", width: "40%" }} onClick={toggleDropdown}>
                            <div style={{ fontSize: "20px", cursor: "pointer", color:"gray", textAlign: "right" }}>
                                {`${selectedOption} ▼`}
                            {isOpen && (
                                <div>
                                    <div onClick={() => selectOption("현장결제")} style={{display: "flex", flexDirection: "column" ,border: "0", cursor:"pointer", fontSize: "14pt", marginTop: "5px" , textAlign: "center" }}>
                                        현장결제
                                    </div>
                                    <div onClick={() => selectOption("카드결제")} style={{ border: "0", cursor:"pointer", fontSize: "14pt", marginTop: "5px", textAlign: "center" }}>
                                        카드결제
                                    </div>
                                </div>
                            )}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div>
            <div style={{margin:"10px 0",borderBottom: "1px solid rgba(0,0,0,0.1)", borderBottomWidth: "0.5px"}}>
                <div style={{margin: "30px", marginBottom: "10px"}}>
                    <div style={{ fontSize:"14pt", marginBottom:"20px", color: "gray"}}>
                        숙소이름
                        <div style={{color: "black", margin:"10px 0"}}> {`${checkoutData.amenityName}`}</div>
                    </div>
                    <div style={{fontSize:"14pt", marginBottom:"20px", color: "gray"}}>
                        객실 타입
                        <div style={{color: "black", margin:"10px 0"}}> {`${checkoutData.type}`}</div>
                    </div>
                    <div style={{ fontSize:"14pt", marginBottom:"20px", color: "gray"}}>
                        체크인
                        <div style={{color: "black", margin:"10px 0"}}> {`${checkoutData.checkIn}`}</div>
                    </div>
                    <div style={{ fontSize:"14pt", marginBottom:"20px", color: "gray"}}>
                        체크아웃
                        <div style={{color: "black", margin:"10px 0"}}> {`${checkoutData.checkOut}`}</div>
                    </div>
                </div>
            </div>
            <div style={{margin:"30px 0", fontWeight: "bold"}}>
                <div style={{ fontSize:"14pt", marginBottom:"20px", display: "flex" ,flexDirection: "row"}}>
                <div>총 결제 금액</div>
                <div style={{fontSize: "11pt", fontWeight:"lighter", verticalAlign: 'bottom', display:"flex", alignItems: "center"}}>(VAT포함)</div>
                </div>
                <div style={{ fontSize:"18pt", marginBottom:"20px", display: "flex" ,flexDirection: "row", color: "#f7323f"}}>
                    <div>{`${price} 원`}</div>
                </div>
                <div style={{color: "gray"}}>
                <li style={{ fontWeight: "lighter",fontSize: "11pt", marginBottom :"10px"}}>
                    해당 객실가는 세금, 봉사료가 포함된 금액입니다.
                </li>

                <li style={{fontWeight: "lighter", fontSize: "11pt"}}>
                    결제완료 후 <span style={{color: "red"}}>예약자 이름</span>으로 바로 <span style={{color: "red"}}>체크인</span> 하시면 됩니다
                </li>
                </div>
            </div>
            <div style={{display:"grid", gridTemplateColumns:"0fr 4fr 0fr", width: "100%"}}>
                <div style={{width:"100%"}}></div>
            <button onClick={checkHandler} style={{alignItems: "center"}}>
                결제하기
            </button>
                <div style={{width:"100%"}}></div>
            </div>
        </div>
        </>
    )
}

export default PaymentBox;