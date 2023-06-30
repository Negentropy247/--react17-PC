import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import Layout from './pages/Layout'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Router>
      <div className="app">
        {/* 渲染组件 */}
        <Switch>
          {/* 路由重定向 */}
          <Redirect exact from="/" to="/home"></Redirect>
          <Route path="/login" component={Login}></Route>
          <Route path="/home" component={Layout}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  )
}
