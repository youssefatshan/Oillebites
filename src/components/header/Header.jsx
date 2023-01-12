import React , {useRef} from 'react';
import './Header.css';
import { Container } from 'reactstrap';

const NavLinks = [
{
    display: 'Home',
    url: '#',
},
{
    display: 'Menu',
    url: '#',
},
{
    display: 'Locations',
    url: '#',
},
{
    display: 'Reviews',
    url: '#',
},
{
    display: 'About Us',
    url: '#',
},
];

const Header = () => {

    const menuRef = useRef ();

    const menuToggle =()=> menuRef.current.classList.toggle('active-menu')

  return (
    <header className='header'>
        <Container>
            <div className='navigation'>
                <div className="logo">
                    <h2 className='d-flex align-items-center gap-1'>
                        <span><i class="ri-restaurant-2-line"></i></span> OllieBites
                    </h2>
                </div>

                <div className="nav-menu" onClick={menuToggle} ref={menuRef}>
                    <div className='nav-list-wrapper d-flex align-items-center gap-5'>
                        <ul className="nav-list">
                            {
                                NavLinks.map((item,index)=>(
                                    <li className="nav-item" key={index}>
                                        <a href={item.url}>{item.display}</a>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="menu-right">
                            <div className="custom-search">
                                <input type="text" placeholder='Search Item...' />
                                <span><i class="ri-search-eye-line"></i></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mobile-menu">
                     <span><i class="ri-menu-line" onClick={menuToggle}></i></span>
                 {/*    <li className="nav-item"><a href="">Home</a></li>
                        <li className="nav-item"><a href="#">Menu</a></li>
                        <li className="nav-item"><a href="#">Locations</a></li>
                        <li className="nav-item"><a href="#">Reviews</a></li>
                        <li className="nav-item"><a href="#">About Us</a></li> */}
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header
