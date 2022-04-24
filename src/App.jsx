import React from "react";
import "./App.css";
import Search from "./pages/Search";
import UserList from "./pages/UserList";

export default class App extends React.Component {
  state = {
    users: [],
    isLoading: false,
  };

  // 设置users列表
  setUsers = (users) => {
    console.log("users", users);
    this.setState({
      users,
    });
  };
  // 设置isLoading加载状态
  setLoading = (flag) => {
    console.log("flag", flag);
    this.setState({
      isLoading: flag,
    });
  };

  render() {
    const { users, isLoading } = this.state;
    const display = users.length === 0 && !isLoading ? "block" : "none";
    const loading = isLoading ? "block" : "none";

    return (
      <div>
        {/* 1.search组件 */}
        <Search setUsers={this.setUsers} setLoading={this.setLoading} />

        {/* 2.list展示组件 */}
        <UserList users={users}/>
        {/* 控制显隐 */}
        <div className="empty" style={{ display }}>
          Please search github username!
        </div>
        <div className="loading" style={{ display: loading }}>
          Loading.......
        </div>
      </div>
    );
  }
}
