import { Link } from 'react-router-dom'
import './ApplyPage.css'
import { Data } from './data'

const ApplyPage = () => {

    console.log(4)
    /**
     * 가장 좋은 방법은 이 페이지에서 통신을 하고,
     * 그 데이터를 다음 페이지에 넘겨서 , 어떤 탭을 사용할지 결정하면 되긴하다.
     * 하지만 이 방법의 문제는 페이지네이션에 있다.
     * 그렇게 하지 않으려면, 탭마다 통신을 따로 해야하는데, 사실 이 방법은 비효율적이라 말할 수 있다.
     * 이미 값이 다 존재하고 거기서 필터링만 걸면 되는 것을 왜 굳이 다시 가져오는가 ?
     * 이것을 해결하려면... 방법이 있나? 그냥 가져와야지 ㅋㅋㅋㅋㅋ
     * 
     * 
     * 
     * */
    return <>
        <div className="apply_box">

            <div className='apply_title'>
                <h3 className='apply_title_style'>신청 게시판</h3>
            </div>

            <div className='apply_post_box'>
                {Data.map((data) =>
                    <Link to={`/admin/apply/${data.id}`} style={{ textDecorationLine: 'none', marginBottom: 10 }} key={data.id}>
                        <div className="apply_post" >
                            <div style={{ minWidth: 400 }}>{data.title} </div>
                            <div style={{ minWidth: 300 }}>
                                <div className="apply_info">
                                    <div style={{ paddingRight: 10, minWidth: 50 }}>
                                        <strong>작성자:</strong> {data.name}
                                    </div>
                                    <div style={{ minWidth: 50 }}>
                                        <strong>승인 여부:</strong> {data.apply ? '승인됨' : '거부됨'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )}
                {/* 여기까지가 하나의 템플릿이 되는 것  */}
            </div>




        </div >


    </>


}

export default ApplyPage