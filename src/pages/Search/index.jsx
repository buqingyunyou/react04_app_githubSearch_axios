import React from "react"

export default class Search extends React.Component{

  render(){

    return (
      <div>
        <div className="header">
          <div className="container">
            <div className="title">Search Github Users</div>
            <form className="form">
              <input type="text" />
              <button>Search</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}