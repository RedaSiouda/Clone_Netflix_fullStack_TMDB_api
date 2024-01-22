import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import '../CSS/Navbar.css'
import logo from '../assets/img/netflixLogo.png'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <div className="navbar__containLogo">
          <img src={logo} alt="logo netflix" className="navbar__logo" />
        </div>
        <div className="navbar__containMenu">
          <ul className="navbar__menu">
            <div className="navbar__menuLi">Home</div>
            <div className="navbar__menuLi">Series</div>
            <div className="navbar__menuLi">Movies</div>
            <div className="navbar__menuLi">New & popular</div>
            <div className="navbar__menuLi">My list</div>
            <div className="navbar__menuLi">Browse by language</div>
          </ul>
        </div>
        <div className="navbar__containSearchNotifAvat">
          <SearchIcon/>
          <NotificationsIcon/>
          <div className="navbar__containAvatar">
            <div className="navbar__avatar"></div>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
