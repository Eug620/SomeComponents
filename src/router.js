/* 
 * @Author       : Eug
 * @Date         : 2021-10-27 15:09:15
 * @LastEditTime : 2021-10-29 14:50:28
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
import CreateArticle from 'routes/CreateArticle/CreateArticle.js'
// demo
import Components from "routes/Components/Components.js";
import LandingPage from "routes/LandingPage/LandingPage.js";
import ProfilePage from "routes/ProfilePage/ProfilePage.js";
import LoginPage from "routes/LoginPage/LoginPage.js";
// 
import api from 'api'
import { stateType } from 'reducers/type.js'
const useInit = async (props) => {
  try {
    let res = await api.GetImageList()
    if (res.code === 200) {
      let keys = Object.keys(stateType)
      keys.forEach((item,idx) => {
        props.store.dispatch({ type: 'SETTYPE', name: item, url: res.result[idx]['image_url'] })
      })
    } else {
      console.log('error')
    }
  } catch (error) {
    console.log(error)
  }
}
const RouterConfig = (props)=>{
  useInit(props)
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/Home" push />} />
        <Route  path="/Home" component={Home}/>
        <Route  path="/Article" component={ArtilclePage}/>
        <Route  path="/TrendingUp" component={TrendingUp}/>
        <Route  path="/ViewComfy" component={ViewComfy}/>
        <Route  path="/CreateArticle" component={CreateArticle}/>
        {/* other */}
        <Route  path="/Components" component={Components}/>
        <Route  path="/LandingPage" component={LandingPage}/>
        <Route  path="/ProfilePage" component={ProfilePage}/>
        <Route  path="/LoginPage" component={LoginPage}/>
      
        <Route path="*" component={Error}/>
      </Switch>

    </HashRouter>
  )
}
export default RouterConfig
