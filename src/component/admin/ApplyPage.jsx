import { Link } from 'react-router-dom'
import './ApplyPage.css'
import { Data } from './data'
import { useEffect, useState } from 'react'
import { api } from '../../network/api'
import { data } from '../owner/data'

const ApplyPage = () => {


    const [data, setData] = useState()


    useEffect(() => {
        getData()
    }, [])


    const getData = async () => {

        const { data } = await api('api/v1/acco/apply/all', 'GET')

        console.log(data)

        setData(data)
    }




    return <>
        <div className="apply_box">

            <div className='apply_title'>
                <div className='apply_title_style'>영업 승인 게시판</div>
            </div>

            <div className='apply_post_box'>
                {data && data.map((data) =>
                    <Link to={`/admin/apply/${data.id}`} style={{ textDecorationLine: 'none', marginBottom: 10 }} key={data.id}>
                        <div className="apply_post" >
                            <div style={{ minWidth: 400 }}>{data.accoName} </div>
                            <div style={{ minWidth: 300 }}>
                                <div className="apply_info">
                                    <div style={{ paddingRight: 10, minWidth: 50 }}>
                                        <strong>업종:</strong> {data.sectors}
                                    </div>
                                    <div style={{ minWidth: 50 }}>
                                        <strong>승인 여부:</strong> {data.status}
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