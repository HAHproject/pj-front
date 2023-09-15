import { useNavigate } from 'react-router'
import './OwnerIndex.css'
import { man1, man2, man3, man4 } from './data'
import { OwnerCategory } from './OwnerCategory'
import OwnerIndexDetail from './OwnerIndexDetail'


const OwnerIndex = () => {

    const user = man1

    const nav = useNavigate()

    const naviHandler = (data) => {


        // nav('/owner/check')
        nav(`/owner/${data}`)

    }

    const elements = Array.from({ length: 5 }, (_, index) => (<div className='todo-point' key={index}>

    </div>))



    return <>




        <div className="todo_box">

            <div style={{ fontWeight: "bold", fontSize: '20px', textAlign: 'center', margin: '10px 0 20px 0' }}>
                {user.status === OwnerCategory.관리 ? `환영합니다. ${user.name} 님 ` : '아래정보를 모두 입력하시고 숙소 등록을 완료하세요'}
            </div>


            {/* 반복되는 코딩에 대한 생각이 필요하다. 큰 상관 없는거같기도 하고....*/}

            {user.status === OwnerCategory.업체등록
                && <div className='todo_path_button on' onClick={() => naviHandler(OwnerCategory.업체등록)}>
                    업체 정보 등록
                </div>}
            {user.status === OwnerCategory.객실등록
                && <div className='todo_path_button on' onClick={() => naviHandler(OwnerCategory.객실등록)}>
                    객실 등록
                </div>}
            {user.status === OwnerCategory.관리
                && <div className='todo_path_button on' onClick={() => naviHandler(OwnerCategory.관리)}>
                    관리
                </div>}
            {user.status === OwnerCategory.신청중
                && <div className='todo_path_button' >
                    등록 심사중입니다.
                </div>}

            <OwnerIndexDetail user={user} />



        </div >
        <div style={{ marginTop: '20px' }}>
            <img src='https://guest.goodchoice.kr/img/mainspot_230601.png' alt='테스트' style={{ width: '800px', borderRadius: '5px' }} />
        </div>



    </>

}

export default OwnerIndex