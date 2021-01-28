import React from "react";
import PropTypes from "prop-types";
import s from "./Profile.module.css";

function Profile({ avatar, name, tag, location, followers, views, likes }) {
  return (
    <div className={s.container}>
      <div className={s.description}>
        <img src={avatar} alt="Аватар користувача" className={s.photo} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.stats}>
        <li className={s.item}>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={s.item}>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={s.item}>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,

  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
