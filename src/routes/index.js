import React, { Component, Suspense, lazy } from 'react'
import { Redirect } from 'react-router-dom'
import BlankLayout from '../layouts/BlankLayout'
import HomeLayout from '../layouts/HomeLayout'

const SuspenseComponent = (Component) => (props) => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

const RecommendComponent = lazy(() => import('../application/Recommend/'))
const SingersComponent = lazy(() => import('../application/Singers/'))
const RankComponent = lazy(() => import('../application/Rank/'))
const AlbumComponent = lazy(() => import('../application/Album/'))
// const SingerComponent = lazy(() => import('./../application/Singer/'))
const SearchComponent = lazy(() => import('./../application/Search/'))

export default [
  {
    component: BlankLayout,
    routes: [
      {
        component: HomeLayout,
        path: '/',
        routes: [
          {
            component: SuspenseComponent(SearchComponent),
            path: '/search',
          },
          {
            component: SuspenseComponent(RecommendComponent),
            path: '/recommend',
            routes: [
              {
                path: "/recommend/2340621859",
                component: SuspenseComponent(AlbumComponent)
              }
            ]
          },
          {
            component: SuspenseComponent(SingersComponent),
            path: '/singers',
          },
          {
            component: SuspenseComponent(RankComponent),
            path: '/rank',
          },
        ],
      },
    ],
  },
]
