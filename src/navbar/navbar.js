import './navbar.css';
import Logo from '../assets/Logo.png'


 function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img className="logo-png"src={Logo} />
                <div className="blogit">Blog it</div>
            </div>
            <ul className ="links">
                    <li>Articles</li>
                    <li>Write</li>
                    <li>About</li>
            </ul>
            <ul className="accounts-links">
                    <li>
                       <form action="/hh">
                            <i class="fas fa-sign-in-alt"></i>
                             Login
                           <input className="email-input" type="text" name="email" placeholder="enter email" />
                           <input type="password" name="password" placeholder="enter password" />
                           <button>continue</button>
                       </form>
                    </li>
            </ul>
        </div>
    )
}


export default Navbar;
