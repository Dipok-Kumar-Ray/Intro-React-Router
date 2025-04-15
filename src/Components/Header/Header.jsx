import React from 'react';
import { Link, NavLink } from 'react-router';
import './header.css'

const Header = () => {
    return (
        <div >
            <h1>This is header....</h1>
            <nav >
             <NavLink to='/'>Home</NavLink>   
             <NavLink to='/mobiles'>Mobiles</NavLink>   
             <NavLink to='/laptops'>Laptops</NavLink>   
             <NavLink to='/users'>Users</NavLink>   
             <NavLink to='/users2'>Users2</NavLink>   


                {/* <a href="/">Home</a>
                <a href="/mobiles">Mobiles</a>
                <a href="laptops">Laptops</a>
                <a href=""></a> */}
            </nav>
        </div>
    );
};

export default Header;