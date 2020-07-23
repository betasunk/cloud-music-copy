import React from 'react'
import { Top, Tab, TabItem } from './HomeLayout.style'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'
function Home(props) {
  return (
    <div>
      <Top>
        <span
          className="iconfont menu"
          onClick={() => alert('正在开发中。。。')}
        >
          &#xe65c;
        </span>
        <span>云音乐</span>
        <span
          className="iconfont search"
          onClick={() => props.history.push('/search')}
        >
          &#xe62b;
        </span>
      </Top>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected">
          <TabItem>
            <span>推荐</span>
          </TabItem>
        </NavLink>
        <NavLink to="/singers" activeClassName='selected'>
          <TabItem>
            <span>歌手</span>
          </TabItem>
        </NavLink>
        <NavLink to="/rank" activeClassName='selected'>
          <TabItem>
            <span>排行榜</span>
          </TabItem>
        </NavLink>
      </Tab>
      {renderRoutes(props.route.routes)}
    </div>
  )
}
export default Home
