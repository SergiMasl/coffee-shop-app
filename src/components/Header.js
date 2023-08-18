import logo from './styles/svg/life-happens-coffee-helps.svg';
import './styles/header.css';

function Header () {
    return (
        <div className="header_wrapper">
            <div className="header_left">
                <div className="header_logo_wrapper">
                    <img className='header_logo_img'src={logo} alt="Logo" />
                </div>
                <div className="header_btms_wrapper">
                    <a href="#" className='header_menu_btm'>COFFEE</a>
                    <a href="#" className='header_menu_btm'>TEA</a>
                    <a href="#" className='header_menu_btm'>MENU</a>
                </div>
            </div>
            <div className="header_centre">
                <div className="header_search_bar_wrapper"></div>
            </div>
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
        </div>
    )
}

export default Header;