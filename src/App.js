import { Switch, Route, Redirect } from 'react-router-dom'
import Landing from 'pages/Landing'
import Profile from 'pages/Profile'
import Login from 'pages/Login'
import Register from 'pages/Register'

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css'

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css'
import Land from 'pages/Land'
import SingleLand from 'pages/SingleLand'
import Dashboard from 'pages/Dashboard'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/lands' component={Land} />
      <Route exact path='/land/:id' component={SingleLand} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Redirect from='*' to='/' />
    </Switch>
  )
}

export default App
