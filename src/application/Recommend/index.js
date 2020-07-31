import React, { useEffect, useState } from 'react'
// import { connect } from 'react-redux'
import { connect } from 'react-redux'
import { Content } from './style'
import * as actionTypes from './store/actionCreators'
import Scroll from '../../baseUI/scroll/index'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
import RecommendList from '../../components/list/index'
import { renderRoutes } from 'react-router-config';

function Recommend(props) {
  const { songsCount, bannerList, recommendList } = props
  const { getBannerDataDispatch, getRecommendListDataDispatch } = props
  const [sliderSwiper, setSliderSwiper] = useState(null)

  let bannerListJs = bannerList.toJS()
  let recommendListJs = recommendList.toJS()

  useEffect(() => {
    if (bannerListJs.length && !sliderSwiper) {
      let sliderSwiper = new Swiper('.slider-container', {
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        pagination: { el: '.swiper-pagination' },
      })
      setSliderSwiper(sliderSwiper)
    }
  }, [bannerListJs.length, sliderSwiper])

  useEffect(() => {
    getBannerDataDispatch()
  }, [])

  useEffect(() => {
    getRecommendListDataDispatch()
  }, [])

  return (
    <Content play={songsCount}>
      <Scroll>
        <div>
          <div className="slider-container">
            <div className="swiper-wrapper">
              {bannerListJs.map((slider, index) => {
                return (
                  <div className="swiper-slide" key={index}>
                    <div className="slider-nav">
                      <img
                        src={slider.imageUrl}
                        width="100%"
                        height="100%"
                        alt="推荐"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="swiper-pagination"></div>
          </div>
          <RecommendList songList={recommendListJs}></RecommendList>
        </div>
      </Scroll>
      {renderRoutes(props.route.routes)}
      
    </Content>
  )
}

const mapStateToProps = (state) => ({
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList']),
})

// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList())
    },
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendList())
    },
  }
}
// export default connect(mapDispatchToProps)(React.memo(Recommend))
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Recommend))
