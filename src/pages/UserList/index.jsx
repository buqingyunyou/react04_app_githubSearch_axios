import React from "react";
import UserItem from "./UserItem";

export default class UserList extends React.Component {
  render() {
    return (
      <div>
        <div className="cont">
          <ul>
            <UserItem />

            {/* 方式2：通过require()方法实现 */}
            {/* <li>
              <img src="static/02.jpg" alt="" />
              <p>打分v</p>
            </li>
            <li>
              <img src="static/03.jpg" alt="" />
              <p>ver</p>
            </li>
            <li>
              <img src="static/04.jpg" alt="" />
              <p>二批ring</p>
            </li>
            <li>
              <img src="static/05.jpg" alt="" />
              <p>阿斯蒂芬</p>
            </li> */}
          </ul>
        </div>
      </div>
    );
  }
}
