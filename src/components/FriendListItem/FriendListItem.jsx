import clsx from "clsx";
import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css["card-container"]}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.green : css.red)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

FriendListItem.PropTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
