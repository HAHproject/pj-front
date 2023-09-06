const ApplyPage = () => {

    console.log(4)

    return <>
        <div style={{ display: "flex", flexDirection: "column" }}>
            큰 공간

            <div>
                타이틀?
            </div>
            <div  >
                <div style={{ display: "flex", padding: "0px 20px" }}>
                    {/* 그리드 연구해보기.... */}
                    <p style={{ flex: 3 }}>게시글 제목 게시글 제목 게시글 제목 </p>
                    <p style={{ flex: 1 }}>
                        <strong>사용자 이름:</strong> 게시글 내용...
                    </p>

                </div>
                <ul  >
                    <p>게시글 제목 게시글 제목 게시글 제목 </p>
                    <li>
                        <strong>사용자 이름:</strong> 게시글 내용...
                    </li>
                </ul>

            </div>




        </div >


    </>


}

export default ApplyPage