import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Routes,
} from 'react-router-dom'
import { Layout } from './Layout'
import Homepage from '../../pages/Homepage'

export default function AppRouter(props) {
  return (
    <>
      <Router>
          <Switch>
            <Layout>

              <Route path='/' component={Homepage} />
            {/* <ProtectedRoute exact path='*' component={NotfoundPage} /> */}
            </Layout>

          </Switch>
      </Router>

    </>
  )
}
