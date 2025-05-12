import React from 'react';
import "./Navbar.css";

function Navbar()
{
    return(
        <div className = 'Navbar-Container'>

            <div className = 'Logo-Container'>
                <img src = '' alt = 'Logo' />
            </div>

            <div className = 'SearchBar-Container'>
                <img src = '/search-icon.png' alt = 'Search-Icon' />
                <p>Search by ID, mail, status, etc...</p>
            </div>

            <div className = 'Upload-Container'>
                <img src = '' alt = 'Upload-Icon' />
            </div>

            <div className = 'Profile-Container'>
                <div className = 'Profile-Data'>
                    <p>Gautham</p>
                    <p>Left : 1976</p>
                </div>
                <div className = 'Profile-Picture'>
                    <img src = '' alt = 'Profile' />
                </div>

            </div>

        </div>
    )
}

export default Navbar;