import './../styles/css/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Banner() {
  return (
    <div className='container-banner' id='home'>
      <img className="banner" src='../images/bannerfinalfinal.svg' alt='m'></img>
      <div className='content_banner'>
        <h2 className='primerTitle'>Hi There,</h2>
        <h2 className='secondtitle'>I'm Kiara Malasquez</h2>
        <p>I Am a Full Stack Developer </p>
        <a href='#aboutme' className='button'><button><b>Start</b></button></a>
        <div className="redes">
          <a href="https://github.com" target="_blank" className='buttons' rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com" target="_blank" className='buttons' rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://instagram.com" target="_blank" className='buttons' rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      </div>
  )
}

export default Banner