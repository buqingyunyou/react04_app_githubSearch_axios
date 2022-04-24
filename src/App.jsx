import React from "react";
import "./App.css";

export default class App extends React.Component {
  render() {
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

        <div className="cont">
          <ul>
            <li>
              {/* 方式1：图片资源文件夹放置在public文件夹下 */}
              <img src="static/01.jpg" alt="" />
              <p>asdf</p>
            </li>
            <li>
              {/* 方式2：通过require()方法实现 */}
              <img src={require("./assets/02.jpg")} alt="" />
              <p>打分v</p>
            </li>
            <li>
              <img src={require("./assets/03.jpg")} alt="" />
              <p>ver</p>
            </li>
            <li>
              <img src={require("./assets/04.jpg")} alt="" />
              <p>二批ring</p>
            </li>
            <li>
              <img src={require("./assets/05.jpg")} alt="" />
              <p>阿斯蒂芬</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
