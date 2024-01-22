import avatarLogo from '../assets/img/avatar-1.png';

import '../CSS/Avatar.css'


function Avatar() {


  return (
    <div className="avatar">
      <div className="avatar__containAvatarImg">
        <img src={avatarLogo} alt="" className="avatar__img" />
      </div>
      <div className="avatar__pseudo">
        <a href={'/home'} className="avatar__link">Dummy</a>
      </div>
      <div className="avatar__containBtn">
        <button className="avatar__btnSubmit">Manage Profiles</button>
      </div>
    </div>
  );
};

export default Avatar
