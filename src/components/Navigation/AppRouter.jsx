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
import CalendarSettingsPage from '../../pages/CalendarSettings/CalendarSettingsPage'

export default function AppRouter(props) {
  return (
    <>
      <Router>
          <Switch>
            <Layout>

              <Route exact path='/' component={Homepage} />
              <Route exact path='/calendar-settings' component={CalendarSettingsPage} />

            {/* <ProtectedRoute exact path='*' component={NotfoundPage} /> */}
            </Layout>

          </Switch>
      </Router>

    </>
  )
}
