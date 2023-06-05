import style from './style.module.scss';

interface UserPillProps {
  email: string;
  username?: string;
  image?: string;
}

const UserPill = ({
  email,
  username = email.split('@')[0],
  image,
}: UserPillProps) => {
  return (
    <div className={style.userPill}>
      <div className={style.image}>
        {image ? (
          <img alt={`${username} image`} src={image} />
        ) : (
          email[0].toUpperCase()
        )}
      </div>
      <div className={style.userInfo}>
        <h3>{username}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserPill;
