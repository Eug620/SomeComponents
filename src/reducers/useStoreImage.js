/* 
 * @Author       : Eug
 * @Date         : 2021-10-29 12:08:54
 * @LastEditTime : 2021-10-29 14:37:26
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /project/src/reducers/useStoreImage.js
 */
import { stateType } from './type'
function counter(state = stateType, action) {
  switch (action.type) {
    case 'SETTYPE':
      return {
        ...state,
        [action.name]: action.url
      }
    case 'DELETTYPE':
      return {
        ...state,
        [action.name]: ''
      }
    case 'GETTYPE':
      return state;
    default:
      return state;
  }
}

export default counter