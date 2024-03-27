import React from "react";
import {Link, useLocation} from "react-router-dom";
import "../../Styles.css"

const homeNavigation = <ul>
    <li><Link to="/blogs">Go to Blogs</Link></li>
    <li><Link to="/contact">Go to Contact</Link></li>
    <li><Link to="/animal">Go to Animal</Link></li>
</ul>;

const blogsNavigation = <ul>
    <li><Link to="/">Go to Home</Link></li>
    <li><Link to="/contact">Go to Contact</Link></li>
    <li><Link to="/animal">Go to Animal</Link></li>
</ul>;

const contactNavigation = <ul>
    <li><Link to="/">Go to Home</Link></li>
    <li><Link to="/blogs">Go to Blogs</Link></li>
    <li><Link to="/animal">Go to Animal</Link></li>
</ul>;

const animalNavigation = <ul>
    <li><Link to="/">Go to Home</Link></li>
    <li><Link to="/blogs">Go to Blogs</Link></li>
    <li><Link to="/contact">Go to Contact</Link></li>
</ul>;

export const Navigation = () => {
    const location = useLocation();

    return (
        <nav>
            <h2>Menu</h2>
            {location.pathname === '/' && homeNavigation}
            {location.pathname === '/blogs' &&blogsNavigation}
            {location.pathname === '/contact' && contactNavigation}
            {location.pathname === '/animal' && animalNavigation}

        </nav>
    )
}








