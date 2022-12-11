import { PropTypes } from 'prop-types';
export default function FriendListItem({ status, avatar, name }) {
  return (
    <li className="friend-list__item">
      <span className={status ? 'active' : 'inactive'}></span>
      <img
        className="friend-list__avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  status: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
