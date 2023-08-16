import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Routes,
} from 'react-router-dom'
import HomePage from '../../pages/Homepage'
import { Layout } from './Layout'

export default function AppRouter(props) {
  return (
    <>
      <Router>
      <Layout>

        <Routes>
              <Route exact path='/' component={HomePage} />

            {/* <ProtectedRoute exact path='*' component={NotfoundPage} /> */}

        </Routes>
        </Layout>

      </Router>

    </>
  )
}
