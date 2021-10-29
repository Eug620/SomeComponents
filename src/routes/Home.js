import React from "react";
import Typed from 'react-typed';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "common/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import useGetImg from "utils/useGetCurrentImg"
// my components
const useStyles = makeStyles(styles);

export default function Home(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const textDescription = [
    "This is the examples we've written live in the vee-validate ",
    "vee-validate is a form validation library for Vue.js that ",
    "Higher-order components are better suited for most of your cases."
  ]
  return (
    <div>
      <Header
        brand="Home"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={useGetImg(props)}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>
                    Material Kit React.
                </h1>
                <h3 className={classes.subtitle}>
                  <Typed
                    strings={textDescription}
                    typeSpeed={40}
                  />
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Footer />
    </div>
  );
}
