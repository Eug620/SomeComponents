/* 
 * @Author       : Eug
 * @Date         : 2021-10-28 15:01:08
 * @LastEditTime : 2021-10-29 11:24:55
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /project/src/common/Header/HeaderLinks.js
 */
/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Add, AccountCircle, ViewComfy, TrendingUp, Build, FlightLand, ContactMail } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { useHistory } from 'react-router-dom'
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const history = useHistory()
  const useRouterLink = (v) => {
    history.push(v)
  }
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          onClick={() => useRouterLink('/ProfilePage')}
          className={classes.navLink}
        >
          <ContactMail/>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          onClick={() => useRouterLink('/LandingPage')}
          className={classes.navLink}
        >
          <FlightLand/>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          onClick={() => useRouterLink('/Components')}
          className={classes.navLink}
        >
          <Build/>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          onClick={() => useRouterLink('/TrendingUp')}
          className={classes.navLink}
        >
          <TrendingUp/>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          onClick={() => useRouterLink('/ViewComfy')}
          className={classes.navLink}
        >
          <ViewComfy/>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          onClick={() => useRouterLink('/CreateArticle')}
          className={classes.navLink}
        >
          <Add/>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          onClick={() => useRouterLink('/LoginPage')}
          className={classes.navLink}
        >
          <AccountCircle/>
        </Button>
      </ListItem>
    </List>
  );
} 
