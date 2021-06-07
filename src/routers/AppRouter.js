import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import AddPost from '../components/AddPost'
import EditPost from '../components/EditPost'
import BlogDashboard from '../components/BlogDashboard'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/blog" component={BlogDashboard} />
                <Route path="/create" component={AddPost} />
                <Route path="/edit/:id" component={EditPost} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter