import './OwnerIndex.css'


const OwnerIndex = () => {

    const test = () => {

    }


    return <>




        <div className="test">
            <div style={{ fontWeight: "bold", fontSize: '20px', textAlign: 'center', margin: '10px 0 20px 0' }}>
                아래정보를 모두 입력하시고 숙소 등록을 완료하세요
            </div>
            {/* 업주 상태를 보고 어떤 버튼이 나오게할지를 정할 예정이다. */}
            <div className='test2' onClick={() => test()}>
                업체 정보 등록
            </div>

            <div className='todo_layer'>
                <div className='test3'>
                    <img src='https://guest.goodchoice.kr/img/asset/icn_1_info_64x64.png' alt='신청' />
                    <div>마이페이지</div>
                    <div> 업체 정보 등록</div>
                </div>


            </div>

        </div>
        <div style={{ marginTop: '20px' }}>
            <img src='https://guest.goodchoice.kr/img/mainspot_230601.png' alt='테스트' style={{ width: '800px', borderRadius: '5px' }} />
        </div>



    </>

}

export default OwnerIndex