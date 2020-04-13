import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
const Main = React.lazy(() => import('./page/Main'))
const Landing = React.lazy(() => import('./page/Landing'))

export default function App() {
  return (
    <Suspense fallback={null}>
      <Route exact path="/" component={Landing} />
      <Route path="/main" component={Main} />
    </Suspense>
  )
}