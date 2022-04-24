import React from "react";
import "./App.css";
import Search from "./pages/Search";
import UserList from "./pages/UserList";

export default class App extends React.Component {
  render() {
    return (
      <div>
        {/* 1.search组件 */}
        <Search />

        {/* 2.list展示组件 */}
        <UserList />
      </div>
    );
  }
}
