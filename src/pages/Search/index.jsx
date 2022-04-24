import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

export default class Search extends React.Component {
  static propTypes = {
    setUsers: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired,
  };
  state = {
    username: "",
  };

  handleChange = (e) => {
    this.setState({
      username: e.target.value.trim(),
    });
  };

  handleSearch = async (e) => {
    const { setUsers, setLoading } = this.props;
    console.log("search");
    e.preventDefault();
    setLoading(true);
    const { username } = this.state;
    if (!username) {
      return;
    }
    // 发送ajax请求，将接收到的数据，更新到users
    try {
      // 通过 await阻塞等待请求
      const res = await axios({
        method: "GET",
        url: `https://api.github.com/search/users?q=${username}`,
      });

      // 当res的状态不是初始化状态后，执行此处代码
      console.log(res.data.items);
      const result = res.data.items.map((item) => {
        return {
          username: item.login,
          avatar_url: item.avatar_url,
          key: item.id,
          html_url:item.html_url
        };
      });
      setUsers(result);
      setLoading(false);
    } catch (error) {
      alert("网络错误");
      console.log(error);
    }

    this.setState({
      username: "",
    });
  };

  render() {
    const { username } = this.state;
    // const { updateUsers } = this.props;
    const { handleChange, handleSearch } = this;
    return (
      <div>
        <div className="header">
          <div className="container">
            <div className="title">Search Github Users</div>
            <form className="form" onSubmit={handleSearch}>
              <input
                type="text"
                onChange={handleChange}
                value={username}
                placeholder="please search"
              />
              <button>Search</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
