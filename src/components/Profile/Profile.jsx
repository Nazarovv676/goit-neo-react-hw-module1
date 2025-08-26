import PropTypes from "prop-types";
import css from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  const { followers, views, likes } = stats;
  return (
    <div className={css["card-container"]}>
      <div className={css["image-container"]}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.item}>
          <span>Followers</span> <span>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span> <span>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span> <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.PropTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
