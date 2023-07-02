import logo from '../images/logo.svg'
import {pageLinks, socialLinks} from '../data'
const Navbar = ()=> {
    return (
        <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/*<!-- left this comment on purpose -->*/}
        <ul className="nav-links" id="nav-links">

{ pageLinks.map((item)=>{ return <li key={item.id}>
  <a href={item.url} className={item.className}>{item.text} </a>
</li>
})}
        </ul>

        <ul className="nav-icons">

{socialLinks.map((item)=>{ return ( <li key={item.id}>  <a href ={item.url} target="new" className= {item.className}> <i className={item.icon}></i> </a> </li> ) }
)
}


    
        </ul>
      </div>
    </nav>
    )

}

export default Navbar