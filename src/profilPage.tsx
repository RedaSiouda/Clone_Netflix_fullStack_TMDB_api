import Avatar from '../src/Components/Avatar';
import './CSS/Profilepage.css'

function ProfilPage() {
  return (
    <div className="profilPage">
        <div className="profilPage__title">Who's watching?</div>
      <div className="profilPage__containAvatar">
        <Avatar/>
      </div>
    </div>
  )
}

export default ProfilPage
