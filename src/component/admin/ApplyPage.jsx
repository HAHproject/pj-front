import { Link } from 'react-router-dom'
import './ApplyPage.css'
import { Data } from './data'

const ApplyPage = () => {

    console.log(4)

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
                            <div style={{ minWidth: 200 }}>
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