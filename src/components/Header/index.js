import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div>
    <ul className="header-container">
      <li className="home-heading">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="home-heading">
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
    </ul>
  </div>
)
export default withRouter(Header)
