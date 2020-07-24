import React, { useEffect } from 'react'
// import { connect } from 'react-redux'
import { connect } from "react-redux";
import { Content } from './style'
import * as actionTypes from './store/actionCreators'
function Recommend(props) {
  const { getBannerDataDispatch } = props

  useEffect(() => {
    getBannerDataDispatch()
  }, [])

  return <Content></Content>
}

// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList())
    },
  }
}
// export default connect(mapDispatchToProps)(React.memo(Recommend))
export default connect(mapDispatchToProps)(React.memo(Recommend))
