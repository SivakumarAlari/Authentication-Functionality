import Header from '../Header'

import LogoutButton from '../LogoutButton'
import './index.css'

const Home = () => (
  <>
    <div className="main-container">
      <Header />
      <h1 className="homeRoute-heading"> Home Route</h1>
      <LogoutButton />
    </div>
  </>
)
export default Home
