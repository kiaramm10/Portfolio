import './../styles/css/main.css';

function Navbar() {
  return (
    <div className='container'>
        <header>
                <nav className='navbar' id="navbar">       
                    <ul class="nav-links">        
                        <div class="menu">    
                            <li><a className='option' href="#aboutme">About Me</a></li>
                            <li><a className='option' href="#projects">Projects</a></li>
                            <li><a className='option' href="#skills">Skills</a></li>
                            <li><a className='option' href="#contact">Contact</a></li> 
                        </div>    
                    </ul>    
                </nav>
                <a href='/' class='button'><button>LogIn</button></a>
        </header>
    </div>
  )
}

export default Navbar