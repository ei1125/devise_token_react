import React from "react"
import { Link } from "react-router-dom"

const AfterSignInHeader = () => {
  return (
    <div className="header">
      <Link to="/">トップ</Link>
      <Link to="/signOut" className="link-to-signout">
        <div className="btn btn-default btn-raised">ログアウト</div>
      </Link>
    </div>
  )
}

export default AfterSignInHeader