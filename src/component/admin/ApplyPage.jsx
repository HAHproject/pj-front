const ApplyPage = () => {

    console.log(4)

    return <>
        <div style={{ display: "flex", flexDirection: "column", minWidth: 600 }}>
            큰 공간

            <div>
                신청 게시판
            </div>
            <div  >
                <div style={{ display: "grid", gridTemplateColumns: "5fr 1fr", padding: "0px 20px" }}>
                    {/* 그리드 연구해보기.... */}
                    <p style={{ minWidth: 400 }}>게시글 제목 게시글 제목 게시글 제목 </p>
                    <p style={{ minWidth: 200 }}>
                        <strong>사용자 이름:</strong> 게시글 내용...
                    </p>

                </div>

            </div>




        </div >


    </>


}

export default ApplyPage