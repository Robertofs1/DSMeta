import logo from '../../assets/image/logo.svg'
import './style.css'
function Header() {
    return (
      <>
       <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por 
              <a href="https://www.linkedin.com/in/roberto-frisanco-0b8216216/"> Roberto Frisanco</a>
            </p>
        </div>
    </header>
    
      </>
    )
  }
  
  export default Header
  