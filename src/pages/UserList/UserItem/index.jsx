import React from "react";

export default class UserItem extends React.Component {
  render() {
    return (
      <div>
        <li>
          {/* 方式1：图片资源文件夹放置在public文件夹下 */}
          <img src="static/01.jpg" alt="" />
          <p>asdf</p>
        </li>
      </div>
    );
  }
}
