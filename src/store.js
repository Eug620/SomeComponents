/* 
 * @Author       : Eug
 * @Date         : 2021-10-29 12:07:19
 * @LastEditTime : 2021-10-29 12:08:33
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /project/src/store.js
 */

import { createStore } from 'redux'
import rootReducer from './reducers'

export default createStore(rootReducer)