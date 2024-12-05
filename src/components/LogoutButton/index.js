import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const logoutTheBtn = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div>
      <button type="button" onClick={logoutTheBtn} className="logoutBtn-design">
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
