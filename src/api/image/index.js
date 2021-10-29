/* 
 * @Author       : Eug
 * @Date         : 2021-10-29 14:25:09
 * @LastEditTime : 2021-10-29 14:55:47
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /project/src/api/image/index.js
 */
import request from 'utils/request.js'
const image = {
  GetImageList(params) {
    return request({
      url: '/image/getImageList',
      method: 'get',
      params
    })
  }
}
export default image