import MainLayout1 from "../layout/MainLayout1";
import Footer from "../layout/Footer";
import "../../../styles/mainPage/main.module.css"
import MainLayout2 from "../layout/MainLayout2";
import MainLayout4 from "../layout/MainLayout4";
import MainLayout3 from "../layout/MainLayout3";
import Header from "../layout/Header";
import classes from "../../../styles/mainPage/main.module.css"

const Main = () => {
    return (
        <>
            <div className={classes.MainContainer}>
                <Header />

                <div className={classes.MainLayout}>
                    <MainLayout1 />
                </div>
                <div className={classes.MainLayout}>
                    <MainLayout2 />
                </div>
                <div className={classes.MainLayout}>
                    <MainLayout3 />
                </div>
                <div className={classes.MainLayout}>
                    <MainLayout4 />
                </div>
                <Footer />
                </div>
        </>
    );
}

export default Main;
