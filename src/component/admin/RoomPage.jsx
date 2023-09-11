const RoomPage = () => {

    console.log(2)


    // 신청 목록이 나오고, 그 글을 클릭하면 신청양식이랑 페이지가 보이게 할까 고민중인 곳.
    // 그건 금방 하니깐 일단 킵.

    return <div style={{ display: "grid", gridTemplateColumns: '4fr 1fr' }}>
        <div style={{

            border: "1px solid"
        }}>
            <p>여긴 방 신청 한것 관련 오는 곳 내 생각인데 여기선 글이 완전 다른 페이지로 가야할거같음 .</p>
            {/* 여기선 방 신청 목록이 나오고, 그 글을 클릭하면 세부적이 내용이 보이면 된다.
            그 내용은 일정 형식에 맞게 인쇄하는 형태로 하면 될듯. */}
        </div>
        <div style={{

        }}>
            <p>여긴 그 사람이 신청한 페이지 오는 곳. </p>
            {/* 여기선 그사람이 신청한 페이지의 글을 읽어서 보여줘야한다. 
            포함되어야하는 정보 : 신청자, 신청 정보, 

            되도록이면 정형화된 글이 써져있으면 좋겠다.
            
            */}

            <div style={{
                flexDirection: 'column'
            }}>
                <div>title</div>
                <div>img</div>
                <div>content</div>
                <div>img</div>



            </div>
        </div>

    </div>



}

export default RoomPage