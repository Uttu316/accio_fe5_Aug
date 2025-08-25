import "./userCard.css";
const UserCard = (props) => {
  const { userData } = props;
  return (
    <div className="user_card">
      <img src={userData.img} className="user_card_img" />
      <div className="user_content">
        <p className="user_content_name">{userData.name}</p>
        <p className="user_content_age">{userData.age}</p>
        <p className="user_content_email">{userData.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
