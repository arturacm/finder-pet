import style from './style.module.scss';

interface UserPillProps {
  email: string;
  username?: string;
  image?: string;
  className?: string;
  onlyLogo?: boolean;
}

const UserPill = ({
  email,
  username = email.split('@')[0],
  image,
  className,
  onlyLogo,
}: UserPillProps) => {
  return (
    <div className={`${style.userPill} ${className ?? ''}`}>
      <div className={style.image}>
        {image ? (
          <img alt={`${username} image`} src={image} />
        ) : (
          email[0].toUpperCase()
        )}
      </div>
      {!onlyLogo && (
        <div className={style.userInfo}>
          <h3>{username}</h3>
          <p>{email}</p>
        </div>
      )}
    </div>
  );
};

export default UserPill;
