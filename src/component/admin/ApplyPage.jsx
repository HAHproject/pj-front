const ApplyPage = () => {

    console.log(4)

    return <>
        <div style={{ display: "flex", flexDirection: "column", minWidth: 600, padding: "0px 20px" }}>

            <div style={{ height: "auto" }}>
                <h4>신청 게시판</h4>
            </div>
            <div  >
                <div style={{ display: "grid", gridTemplateColumns: "4fr 1fr" }}>
                    {/* 이 밑에 있는걸 이제 for 문 돌려야할듯 .... ? */}
                    <>
                        <div style={{ minWidth: 400 }}>게시글 제목 게시글 제목 게시글 제목 게시글 제목 </div>
                        <div style={{ minWidth: 200 }}>
                            <div style={{ display: "flex", flexDirection: 'row' }}>
                                <div style={{ paddingRight: 5, minWidth: 40 }}>
                                    <strong>사용자 이름:</strong> 홍길동
                                </div>
                                <div style={{ minWidth: 40 }}>
                                    <strong>승인 여부:</strong> 승인됨
                                </div>
                            </div>
                        </div>
                    </>
                    <>
                        <div style={{ minWidth: 400 }}>게시글 제목 게시글 제목 게시글 제목 게시글 제목 </div>
                        <div style={{ minWidth: 200 }}>
                            <div style={{ display: "flex", flexDirection: 'row' }}>
                                <div style={{ paddingRight: 5 }}>
                                    <strong>사용자 이름:</strong> 홍길동
                                </div>
                                <div>
                                    <strong>승인 여부:</strong> 승인됨
                                </div>
                            </div>
                        </div>
                    </>


                </div>

            </div>




        </div >


    </>


}

export default ApplyPage