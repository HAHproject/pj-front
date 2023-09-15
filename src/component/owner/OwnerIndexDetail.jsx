import { OwnerCategory } from "./OwnerCategory"

import './OwnerIndexDetail.css'

const OwnerIndexDetail = ({ user }) => {

    const elements = Array.from({ length: 5 }, (_, index) => (<div className='todo-point' key={index}>

    </div>))


    return <>
        <div className='todo_layer'>
            <div className='path_img'>
                <img className={`${user.status === OwnerCategory.업체등록 ? 'in' : ''}`} src='https://guest.goodchoice.kr/img/asset/icn_1_info_64x64.png' alt='신청' />
                <div style={{ marginTop: '10px' }}>마이페이지</div>
                <div> 업체 정보 등록</div>
            </div>
            <div className={`todo_point_box ${user.status === OwnerCategory.신청중 ? 'in' : ''}`}>
                <div>
                    {elements}
                </div>
            </div>
            <div className='path_img'>
                <img className={`${user.status === OwnerCategory.객실등록 ? 'in' : ''}`} src='https://guest.goodchoice.kr/img/asset/icn_4_room_64x64.png' alt='객실등록' />
                <div style={{ marginTop: '10px' }}>객실 등록</div>
            </div>
            <div className={`todo_point_box ${user.status === OwnerCategory.등록확인중 ? 'in' : ''}`}>
                <div>
                    {elements}
                </div>
            </div>
            <div className='path_img'>
                <img className={`${user.status === OwnerCategory.관리 ? 'in' : ''}`} src='https://guest.goodchoice.kr/img/asset/icn_3_rule_64x64.png' alt='관리' />
                <div style={{ marginTop: '10px' }}>관리</div>
            </div>

        </div>



    </>
}

export default OwnerIndexDetail