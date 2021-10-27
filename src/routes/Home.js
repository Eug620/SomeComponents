/* 
 * @Author       : Eug
 * @Date         : 2021-10-27 15:09:51
 * @LastEditTime : 2021-10-27 18:41:36
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /project/src/routes/Home.js
 */
import React, {PureComponent} from 'react'
import Button from '@material-ui/core/Button';
export default class Home extends PureComponent{
    useClick(name) {
        console.log(name);
        this.props.history.push(`/${name}`)
    }
    render(){
        return (
            <div>
                <div>
                    <Button variant="contained" color="primary" onClick={()=>this.useClick('Components')}>
                    Components
                    </Button>
                </div>

                <div>
                    <Button variant="contained" color="primary" onClick={()=>this.useClick('LandingPage')}>
                    LandingPage
                    </Button>
                </div>
                
                <div>
                    <Button variant="contained" color="primary" onClick={()=>this.useClick('ProfilePage')}>
                    ProfilePage
                    </Button>
                </div>

                <div>
                    <Button variant="contained" color="primary" onClick={()=>this.useClick('LoginPage')}>
                    LoginPage
                    </Button>
                </div>
            </div>
        )
    }
}
