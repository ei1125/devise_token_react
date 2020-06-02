import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import RegisterUser from "../containers/register/RegisterUser"
// import SignInUser from "../containers/session/SignInUser"
// import SignOutUser from "../containers/session/SignOutUser"
import Index from "../containers/index"
// import Mypage from "../components/mypage/Mypage"
// import generateRequireSignInWrapper from "../containers/redux-token-auth/generateRequireSignInWrapper"

// const requireSignIn = generateRequireSignInWrapper({
//   redirectPathIfNotSignedIn: "/signin",
// })

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="main">
          <Switch>
            <Route exact path="/" component={Index} />
            {/* <Route exact path="/signUp" component={RegisterUser} />
            <Route exact path="/signIn" component={SignInUser} />
            <Route
              exact
              path="/signOut"
              component={requireSignIn(SignOutUser)}
            />
            <Route exact path="/mypage" component={requireSignIn(Mypage)} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App