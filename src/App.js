import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Main from './page/Main'
import Landing from './page/Landing'

export default function App() {
  return (
    <div>
    <Route exact path="/" component={Landing} />
    <Route path="/main" component={Main} />
  </div>
  )
}