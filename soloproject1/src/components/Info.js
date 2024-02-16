import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Info(){
    return (
        <header>
           <div className="info--headshot"></div>
           <div className="info--header">
                <h2 className="info--name">Kyle M. Perkins</h2>
                <h4 className="info--title">Full Stack Developer</h4>
                <h5 className="info--website"><a href="http://kylemperkins.com" target="_blank" rel="noreferrer">KyleMPerkins.com</a></h5>
           </div>
           <div className="info--buttons">
                <button className="info--button_email"><FontAwesomeIcon icon={faEnvelope} /> Email</button>
                <button className="info--button_linkedin"><FontAwesomeIcon icon={faLinkedin} />  LinkedIn</button>
           </div>
        </header>
    )
}