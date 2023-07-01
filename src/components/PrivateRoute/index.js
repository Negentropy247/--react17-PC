import { hasToken } from '@/utils/storage'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ children, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (hasToken()) {
          return children ? children : <Component></Component>
        } else {
          return <Redirect to="/login"></Redirect>
        }
      }}
    ></Route>
  )
}
