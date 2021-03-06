import React, {Component} from 'react';
import logo from '../../logo.svg'
import {Link} from 'react-router-dom'

let Feed = () => {
    return (
        <header>
            <div className="container h-flex">
                <Link to='/feed/' className="logo">
                    <img src={logo}></img>
                </Link>
                <nav className="links">
                    <ul>
                        <li>
                            <Link to='/feed/' className="menu__links">Лента</Link>
                        </li>
                        <li>
                            <Link to='/profile/' className="menu__links">Профиль</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Feed