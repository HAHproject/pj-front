import "./MyHeader.css"
import { useEffect } from "react";
import NormalHeader from "./NormalHeader";
import PhoneHeader from "./PhoneHeader";
import { useDispatch, useSelector } from "react-redux";
import { setWidthSize } from "../../feature/widthSizeSlice";


const MyHeader = () => {

  const dispatch = useDispatch()

  console.log("재실행여부")
  const { isSmallScreen } = useSelector((state) => state.widthSizes)



  useEffect(() => {

    const handleResize = () => {
      dispatch(setWidthSize(window.innerWidth < 900 ? true : false))
    };


    // 컴포넌트가 마운트될 때 한 번 실행하고, 화면 크기 변화를 감지하는 리스너 등록
    handleResize();
    window.addEventListener('resize', handleResize);

    // 이펙트효과 벗어날 때 (페이지 이동) 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  return (
    <>
      {isSmallScreen ? <PhoneHeader /> : <NormalHeader />}
    </>
  );
}

export default MyHeader;