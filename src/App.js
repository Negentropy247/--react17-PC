import React from 'react'
import { Router, Link, Route, Switch, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import Layout from './pages/Layout'
import NotFound from './pages/NotFound'
import history from './utils/history'
import PrivateRoute from './components/PrivateRoute'

export default function App() {
  return (
    <Router history={history}>
      <div className="app">
        {/* 渲染组件 */}
        <Switch>
          {/* 路由重定向 */}
          <Redirect exact from="/" to="/home"></Redirect>
          <Route path="/login" component={Login}></Route>
          <PrivateRoute path="/home" component={Layout}></PrivateRoute>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  )
}
