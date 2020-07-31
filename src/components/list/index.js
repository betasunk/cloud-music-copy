import React from 'react'
import { ListWrapper, List, ListItem } from './style'
import { withRouter } from 'react-router-dom';
function RecommendList(props) {
  const { songList } = props
  const enterDetail=(id)=>{
    console.log(props);
    props.history.push(`/recommend/2340621859`)
  }
  return (
    <>
      <ListWrapper>
        <div className="title">推荐歌单</div>
        <List>
          {songList.map((item) => {
            return (
              <ListItem key={item.id} onClick={()=>{enterDetail(item.id)}}>
                <div className="img_wrapper">
                  <div className="decorate"></div>
                  {/* <LazyLoad
                    placeholder={
                      <img
                        width="100%"
                        height="100%"
                        src={require('./music.png')}
                        alt="music"
                      />
                    }
                  > */}
                    <img
                      src={item.picUrl + '?param=300x300'}
                      width="100%"
                      height="100%"
                      alt="music"
                    />
                  {/* </LazyLoad> */}
                  <div className="play_count">
                    <i className="iconfont play">&#xe885;</i>
                    <span className="count">
                      {Math.floor(item.playCount / 10000)}万
                    </span>
                  </div>
                </div>
                <div className="desc">{item.name}</div>
              </ListItem>
            )
          })}
        </List>
      </ListWrapper>
    </>
  )
}
export default withRouter(React.memo(RecommendList))
