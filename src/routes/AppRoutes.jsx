import React from 'react'
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={HomePage}/>
            </Switch>
        </Router>
    )
}

export default AppRoutes
