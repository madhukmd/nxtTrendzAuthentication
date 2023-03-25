import {Link} from 'react-router-dom'
import './index.css'

const home = 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png'
const products =
  'https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png'
const cart = 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        </li>
      </ul>
      <button type="button" className="logout-desktop-btn">
        Logout
      </button>
      <button type="button" className="logout-mobile-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="logout icon"
          className="logout-icon"
        />
      </button>
    </div>
    <div className="nav-icons-container">
      <button type="button" className="buttons">
        <img src={home} alt="nav home" className="nav-icons" />
      </button>

      <button type="button" className="buttons">
        <img src={products} alt="nav products" className="nav-icons" />
      </button>

      <button type="button" className="buttons">
        <img src={cart} alt="nav-cart" className="nav-icons" />
      </button>
    </div>
  </nav>
)
export default Header
