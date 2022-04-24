import React from "react";
import PropTypes from "prop-types";

export default class UserItem extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };
  render() {
    const { username, avatar_url, html_url } = this.props.user;
    return (
      <div>
        <li>
          {/* 方式1：图片资源文件夹放置在public文件夹下 */}
          <a href={html_url} target="_blank" rel="noreferrer noopener">
            <img src={avatar_url} alt="图片加载出错" />
          </a>
          <p>{username}</p>
        </li>
      </div>
    );
  }
}
