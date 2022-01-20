import './Navbar.scss'

import React from 'react'
import { ReactComponent  as Logo } from '../../assets/images/logo.svg'
import { ReactComponent  as SearchIcon } from '../../assets/images/icons/search.svg'


const Navbar = () => {
    return(
        <nav>
            <div className="left-cr">
                <Logo id='logoImg'/>
                <div className="search-cr">
                    <SearchIcon id='searchIcon'/>
                    <input type="text" placeholder='Search ParaMate' />
                </div>
            </div>
            <ul>
                <li>
                    About ParaMate
                </li>
                <li>Articles</li>
                <li>Contact Us</li>
                <li>Login</li>
            </ul>
            
        </nav>
    )
}


export default Navbar
