import React, { Fragment } from "react";
import styles from "./Home.module.css";
import Logo from "../../assets/images/logo.png";
import Background from "../../assets/images/background.jpg";

import Button from "../../components/Common/Button";
import ImageLoader from "../../components/ImageLoader";

const Home = () => (
    <Fragment>
        <div className={styles.home_container}>
            <div className={styles.home_background_container}>
                <ImageLoader srcLoaded={Background} srcPreload={Background} />
                <div className={styles.home_background_backdrop} />
            </div>
            <div className={styles.home_title_wrapper}>
                <div className={styles.home_logo_wrapper}>
                    <img src={Logo} alt="Finendisgn Logo" className={styles.home_logo} />
                </div>
                <h1 className={styles.home_title}>finendisign</h1>
            </div>
            <div className={styles.home_button_wrapper}>
                <Button type="button" classBtn="home">
                    ENTER
                </Button>
            </div>
        </div>
    </Fragment>
);

export default Home;