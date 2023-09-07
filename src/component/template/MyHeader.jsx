import { Link } from "react-router-dom";
import "./MyHeader.css"
import { useEffect, useState } from "react";
import NormalHeader from "./NormalHeader";
import PhoneHeader from "./PhoneHeader";


const MyHeader = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  console.log("재실행여부")

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 664); // 예: 600px 이하로 작으면 작은 화면으로 간주
  };

  useEffect(() => {

    // 컴포넌트가 마운트될 때 한 번 실행하고, 화면 크기 변화를 감지하는 리스너 등록
    handleResize();
    window.addEventListener('resize', handleResize);

    // 이펙트효과 벗어날 때 (페이지 이동) 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isSmallScreen ? <PhoneHeader /> : <NormalHeader />}
    </>
  );
}

export default MyHeader;