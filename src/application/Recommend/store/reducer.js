import * as actionTypes from './constants'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  bannerList: [],
  recommendList: [],
  enterLoading: true,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      return state.set('bannerList', action.data)
  }
}
