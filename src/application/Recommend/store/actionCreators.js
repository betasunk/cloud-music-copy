import * as actionTypes from './constants'
import { formJS, fromJS } from 'immutable'

import { getBannerRequest, getRecommendListRequest } from '../../../api/request'

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data),
})
export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest()
      .then((data) => {
        const action = changeBannerList(data.banners)
        dispatch(action)
      })
      .catch(() => {
        console.log('轮播图请求错误')
      })
  }
}
