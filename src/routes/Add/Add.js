/* 
 * @Author       : Eug
 * @Date         : 2021-10-28 16:05:50
 * @LastEditTime : 2021-10-28 18:25:10
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /project/src/routes/Add/Add.js
 */
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
// import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "common/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/components.js";

// my components
const useStyles = makeStyles(styles);

export default function Add(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Add"
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax >
        <div className={classes.container}>
          Add
        </div>
      </Parallax>
      <Footer />
    </div>
  );
}
