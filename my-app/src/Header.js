// same as an "varaible" for react items
import reactLogo from "./images/logo512.png"

export default function Header(){
    return (
       <header>
            <nav className="nav">
                <img src={reactLogo} className="nav-logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

// export default Header
// or "export default function Header()" above