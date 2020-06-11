import React from "react"
import { Link } from 'react-router-dom'

class Index extends React.Component {

  render() {
    return (
      <div>
        <div>トップページです</div>
        <Link to="/signUp">新規登録</Link>
        
      </div>
    )
  }
}


export default Index;