import { hasToken } from '@/utils/storage'
import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'

export default function PrivateRoute({ children, component: Component, ...rest }) {
  const location = useLocation()
  return (
    <Route
      {...rest}
      render={() => {
        if (hasToken()) {
          return children ? children : <Component></Component>
        } else {
          return (
            <Redirect
              to={{
                // 跳转的路径
                pathname: '/login',
                // 通过state传递额外参数
                state: {
                  from: location.pathname
                  // aa: 'bb',
                  // bb: 'dd'
                }
              }}
            ></Redirect>
          )
        }
      }}
    ></Route>
  )
}
