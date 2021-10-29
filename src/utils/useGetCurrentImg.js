/* 
 * @Author       : Eug
 * @Date         : 2021-10-29 15:00:47
 * @LastEditTime : 2021-10-29 15:02:13
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /project/src/utils/useGetCurrentImg.js
 */
import store from "store"

const useGetImg = (props) => {
  const { useStoreImage } = store.getState()
  return useStoreImage[props['match']['path']]
}

export default useGetImg

