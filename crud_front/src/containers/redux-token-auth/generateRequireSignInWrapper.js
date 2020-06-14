import * as React from "react"
import { connect } from "react-redux"

const generateRequireSignInWrapper = ({ redirectPathIfNotSignedIn }) => {
  const requireSignInWrapper = PageComponent => {
    class GatedPage extends React.Component {
      componentDidUpdate() {
        const { history, isSignedIn } = this.props
        if (!isSignedIn) {
          history.replace(redirectPathIfNotSignedIn)
        }
      }

      render() {
        const { isSignedIn } = this.props
        return isSignedIn ? (
          <PageComponent {...this.props} />
        ) : (
          <div />
        )
      }
    }

    const mapStateToProps = (state) => ({
      isSignedIn: state.reduxTokenAuth.currentUser.isSignedIn,
    })

    return connect(mapStateToProps)(GatedPage)
  }

  return requireSignInWrapper
}

export default generateRequireSignInWrapper