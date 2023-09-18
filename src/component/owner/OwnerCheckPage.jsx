import { useNavigate } from "react-router"
import { apiNoToken } from "../../network/api"
import { useEffect } from "react"
import { useSelector } from "react-redux"

const OwnerCheckPage = () => {

    const nav = useNavigate()

    const user = useSelector(state => state.user)


    const getData = async () => {

        const { data } = await apiNoToken(`api/v1/acco/me/${user.id}`, `GET`) //원래는 리덕스에 있는 유저 데이터로 가져와야함. 만들어는 두기

        if (!data) {
            alert('아직 접근할 수 없습니다')
            nav('/owner')
            return
        }

        //나중에 acco/me/{id} 로 바꾸면 됨

        nav(`/owner/room/${data.id}`)

    }

    useEffect(() => {

        getData()

    }, [])








    return <>

        <div>


        </div>


    </>


}

export default OwnerCheckPage