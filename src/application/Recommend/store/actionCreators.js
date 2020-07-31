import * as actionTypes from './constants'
import { fromJS } from 'immutable'

import { getBannerRequest, getRecommendListRequest } from '../../../api/request'

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data),
})

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data),
})

export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest()
      .then((data) => {
        const action = changeBannerList(data.banners)
        console.log(action, 'action')
        dispatch(action)
      })
      .catch(() => {
        console.log('轮播图请求错误')
      })
  }
}
export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendListRequest()
      .then((res) => {
        const action = changeRecommendList(res.result)
        dispatch(action)
      })
      .catch(() => {
        console.log('推荐列表请求错误')
      })
  }
}
