import React from "react"
import { connect } from "react-redux"
import BeforeSignInHeader from "./BeforeSignInHeader"
import AfterSignInHeader from "./AfterSignInHeader"
import { Link } from "react-router-dom"

class Header extends React.Component {
  render() {
    const { isSignedIn } = this.props
    const { currentUser } = this.props
    const Component = isSignedIn ? AfterSignInHeader : BeforeSignInHeader
    return (
      <div>
        <Link to="/signUp">新規登録</Link>
        <Component user = {currentUser} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.reduxTokenAuth.currentUser.isSignedIn,
    currentUser: state.reduxTokenAuth.currentUser.attributes.name,
  }
}

export default connect(mapStateToProps)(Header)