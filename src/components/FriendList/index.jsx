import React from "react";
import PropTypes from "prop-types";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map((item) => (
        <li className={s.item} id={item.id}>
          <span className={item.isOnline ? s.online : s.offline}>
            {item.isOnline}
          </span>
          <img className={s.photo} src={item.avatar} alt="" width="48" />
          <p className={s.name}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  // eslint-disable-next-line no-dupe-keys
  isOnline: PropTypes.bool,
};

export default FriendList;
