import React from 'react'
import { Route } from 'react-router-dom'
import Landing from './component/landingPage'

export default function App() {
  return (
    <div>
      <Route exact path="/" component={Landing} />
    </div>
  )
}