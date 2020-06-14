import React from "react"
import { Link } from "react-router-dom"

const BeforeSignInHeader = () => {
  return (
    <div className="header">
      <div>ログインしていません</div>
      <Link to="/">トップ</Link>
      <Link to="/signIn" className="link-to-signin">
        <div className="btn btn-default btn-raised">ログイン</div>
      </Link>
    </div>
  )
}

export default BeforeSignInHeader