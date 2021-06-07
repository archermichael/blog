import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const navigation = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact Us',
        path: '/contact'
    },
    {
        title: 'Login',
        path: '/login'
    }
]

const Header = () => (
    <header className="header">
        <nav className="header__nav">
            <span className="header__nav_title">
                <Link exact="true" to="/">Liz's Kitchen</Link>
            </span>
            <ul className="header__nav_links">
                { navigation.map((link, index) => <NavLink key={index} exact={link.title === 'Home'} to={ link.path } activeClassName="is-active">{ link.title }</NavLink>)}
            </ul>
        </nav>
    </header>
)

export default Header