import logo from './styles/svg/life-happens-coffee-helps.svg';
import './styles/header.css';
import React from 'react';
import search from './styles/svg/icons8-search.svg';

function Header () {

    const menuItemsList = [
        {name: "COFFEE", id: "COFFEE", link: "#"}, 
        {name: "TEA", id: "TEA", link: "#"}, 
        {name: "MENU", id: "MENU", link: "#"}
    ];

    return (
        <header className="header_wrapper">
            {/* Component Menu */}
            <div className="header_left">
                <div className="header_logo_wrapper">
                    {/* //refactoring to <a /> */}
                    <img className='header_logo_img'src={logo} alt="Coffee" />
                </div>
                
                <div className="header_btms_wrapper">
                    {menuItemsList.map((item)=> <a href="#" className='header_menu_btm' key={item.id}>{item.name} </a> )}
                </div>
            </div>
            {/* compoment Search */}
            <div className="header_centre">
                <div className="header_search_bar_wrapper">
                    <input type="text" className='header_search_bar' placeholder='SEARCH' />
                    <img className='search_img'src={search} alt="search" />
                </div>
            </div>
            {/* component Cart */}
            <div className="header_right">
                <div className="header_basket_wrapper">
                    <div className='header_basket_count'>
                        <p>0</p>
                    </div>
                    <a href='#' className='header_basket_btm'>MY BASKET</a>
                </div>
                <div className="header_burger_wrapper">
                    <svg viewBox="0 0 100 45" width="40" height="40">
                        <rect width="100" height="5"></rect>
                        <rect y="20" width="100" height="5"></rect>
                        <rect y="40" width="100" height="5"></rect>
                    </svg>
                </div>
            </div>
        </header>
    )
}

export default Header;