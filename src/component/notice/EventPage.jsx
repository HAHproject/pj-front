import slideImage1 from "../../images/slide1.PNG"
import slideImage2 from "../../images/slide2.PNG"
import slideImage3 from "../../images/slide3.PNG"
import "./EventPage.css"

const EventPage = () => {

    return <>
        <div className="event">
            <ul className="event_list">
                <li>
                    <b>코타니카발루 할인</b><br />
                    <span>기간:2023.09.01~232.09.30</span><br />
                    <a>
                        <img src={slideImage1}></img>
                    </a>
                </li>
                <li>
                    <b>가을 추천 여행</b><br />
                    <span>기간:2023.09.01~232.09.30</span><br />
                    <a>
                        <img src={slideImage2}></img>
                    </a>
                </li>
                <li>
                    <b>가을 낭만 여행</b><br />
                    <span>기간:2023.09.01~232.09.30</span><br />
                    <a>
                        <img src={slideImage3}></img>
                    </a>
                </li>
            </ul>
        </div >

    </>
}

export default EventPage;

