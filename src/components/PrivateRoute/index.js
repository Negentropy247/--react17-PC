import { hasToken } from '@/utils/storage'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (hasToken()) {
          return <Component></Component>
        } else {
          return <Redirect to="/login"></Redirect>
        }
      }}
    ></Route>
  )
}
