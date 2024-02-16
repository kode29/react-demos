import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'


export default function Footer(){
    return (
        <footer>
            <div className="footer--wrapper">
                <a href="https://twitter.com/kylemperkins"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://facebook.com/kode29"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://instagram.com/code_with_cats"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://github.com/kode29"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </footer>
    )
}