import './UserInfo.css';
import avatar from './../../images/avatar.jpg';

function UserInfo() {

    return(
        <div className="user-info">
            <div className="container">
            <img className="userAvatar" src={avatar} alt="Avatar" width="64" height="64"/>
            <p className="link mb16">
                <a href="#contactme">Contact Me</a>
            </p>
            <h1 className="mainTitle mb8">
                Welcome to my Portfolio
            </h1>
            <p className="mainTxt">I’m Mete. I’m 24-year-old. I’m a Digital Product Designer who prioritizes
                simplicity and usability. Currently, I'm Digital Product Designer on Norma.
                Formerly Enrich Mobile, ASDC, TalentMondo, and MobileUpp. I love working on
                side projects, trying to improve myself on SwiftUI and Webflow.</p>
        </div>
        </div>
    )
    
}

export default UserInfo;