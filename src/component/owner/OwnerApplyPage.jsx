import OwnerIndexDetail from "./OwnerIndexDetail"
import { man1 } from './data'
import './OwnerApplyPage.css'

const OwnerApplyPage = () => {

    const user = man1



    /// 고민이 있다면,


    return <>
        <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'center' }}>
            <div className="owner_status">
                <OwnerIndexDetail user={user} />


            </div>





        </div>



    </>


}

export default OwnerApplyPage