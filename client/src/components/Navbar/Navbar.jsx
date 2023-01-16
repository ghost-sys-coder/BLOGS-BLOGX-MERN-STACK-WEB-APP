import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";



import './Navbar.css';

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const [username, setUsername] = useState(null);


    const handleOpenNav = () => {
        setOpenNav(!openNav)
    }
    const handleCloseNav = () => {
        setOpenNav(!openNav)
    }


    /** check if the user is logged in */
    useEffect(() => {
       fetch("http://localhost:5000/api/auth/profile", {
        credentials: "include"
       }).then(response => {
           response.json().then(userInfo => {
               const { username } = userInfo;
               setUsername(username)
           })
       })
    }, [])

    /** logout the user */
    function logout(){

        fetch("http://localhost:5000/api/auth/logout", {
            credentials: "include",
            method: "POST"
        })
        setUsername(null)
    }
  return (
    <div className="navigation">
        <Link className='logo' to="/">blogX</Link>
        <nav className="navbar">
            <Link to="/">home</Link>
            <Link to="/contact">contact</Link>
            {username && (
                <>
                 <Link to="/create">Create a new post</Link>
                 <Link onClick={logout}>logout</Link>
                </>
            )}
            { !username && (
                <>
                <Link to='/login'>login</Link>
                <Link to="/register">register</Link>
                </>
            )}
        </nav>
        <div onClick={handleOpenNav} className="toggle">
            <FaBars />
        </div>
        
        {openNav && (
        <div className="mobile-nav">
           <div onClick={handleCloseNav} className="mobile-nav-close">
                <FaTimes />
           </div>
            <nav className="mobile-links">
                <Link to="/">home</Link>
                <Link to="/contact">contact</Link>
                {username && (
                <>
                 <Link to="/create">Create a new post</Link>
                 <Link to="/logout">logout</Link>
                </>
                )}
                {!username && (
                    <>
                    <Link to='/login'>login</Link>
                    <Link to="/register">register</Link>
                    </>
                )}
            </nav>
        </div>
        )}
    </div>
  )
}

export default Navbar