import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const Login = props => {
  const loginSuccess = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  const clickLoginBtn = async () => {
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      loginSuccess(data.jwt_token)
    }
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="login-container">
      <h1 className="Please-login-heading"> Please Login</h1>
      <button className="btnDesign" type="button" onClick={clickLoginBtn}>
        Login with Sample Creds
      </button>
    </div>
  )
}
export default Login

// import Cookies from 'js-cookie'
// import {Redirect, withRouter} from 'react-router-dom'
// import './index.css'

// const Login = props => {
//   loginSuccess = jwtToken => {
//     const {history} = props
//     Cookies.set('jwt_token', jwtToken, {expires: 30})

//     history.replace('/')
//   }

//   const clickLoginBtn = async event => {
//     event.preventDefault()

//     const url = 'https://apis.ccbp.in/login'
//     const userDetails = {username: 'rahul', password: 'rahul@2021'}
//     const options = {
//       method: 'POST',
//       body: userDetails,
//     }
//     const response = await fetch(url, options)
//     const data = await response.json()
//     if (response.ok === true) {
//       this.loginSuccess(data.jwt_token)
//     }
//   }

//   if (jwtToken !== undefined) {
//     return <Redirect to="/" />
//   }

//   return (
//     <div className="login-container">
//       <h1 className="Please-login-heading"> Please Login</h1>
//       <button className="btnDesign" onClick={clickLoginBtn}>
//         Login with Sample Creds
//       </button>
//     </div>
//   )
// }
// export default withRouter(Login)
