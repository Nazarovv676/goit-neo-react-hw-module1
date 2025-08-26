import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem";
import css from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={css["list-container"]}>
      {friends.map((friend) => {
        const { id, name, avatar, isOnline } = friend;
        return (
          <li key={id}>
            <FriendListItem name={name} avatar={avatar} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
}

FriendList.PropTypes = {
  friends: PropTypes.array,
};

export default FriendList;
