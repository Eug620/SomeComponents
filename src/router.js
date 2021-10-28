/* 
 * @Author       : Eug
 * @Date         : 2021-10-27 15:09:15
 * @LastEditTime : 2021-10-28 17:38:50
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /project/src/router.js
 */
import "assets/scss/material-kit-react.scss?v=1.10.0";
import React from 'react'
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom'

import Home from 'routes/Home.js'
import Error from 'routes/Error.js'
import ArtilclePage from 'routes/ArticlePage/ArtilclePage.js'
import TrendingUp from 'routes/TrendingUp/TrendingUp.js'
import ViewComfy from 'routes/ViewComfy/ViewComfy.js'
import Add from 'routes/Add/Add.js'
// demo
import Components from "routes/Components/Components.js";
import LandingPage from "routes/LandingPage/LandingPage.js";
import ProfilePage from "routes/ProfilePage/ProfilePage.js";
import LoginPage from "routes/LoginPage/LoginPage.js";

const RouterConfig = ()=>{
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" push />} />
          <Route  path="/Home" component={Home}/>
          <Route  path="/Article" component={ArtilclePage}/>
          <Route  path="/TrendingUp" component={TrendingUp}/>
          <Route  path="/ViewComfy" component={ViewComfy}/>
          <Route  path="/Add" component={Add}/>
          {/* other */}
          <Route  path="/Components" component={Components}/>
          <Route  path="/LandingPage" component={LandingPage}/>
          <Route  path="/ProfilePage" component={ProfilePage}/>
          <Route  path="/LoginPage" component={LoginPage}/>
        
          <Route  path="*" component={Error}/>
        </Switch>

      </HashRouter>
    )
}
export default RouterConfig
