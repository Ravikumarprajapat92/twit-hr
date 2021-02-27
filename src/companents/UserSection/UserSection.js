import Calender from "../Calender";
import UserCard from '../cards/UserCard';

const UserSection = () => {
    return (
        <div className="user-section">
            <div className="d-flex justify-content-between">
                <div className="user-icon-container">
                    <i className="mr-3 fas fa-search"></i>
                    <i className="mr-3 far fa-envelope"></i>
                    <i className="far fa-bell position-relative">
                        <span className='notification-dot'></span>
                    </i>
                </div>
                <div className="d-inline-flex align-items-center">
                    <p className="user-name">Mr Smith</p>
                    <div className='position-relative'>
                        <img className="user-img" src="/assets/images/candi(2).jpg" alt="user-profile" />
                        <span className='notification-dot'></span>
                    </div>
                </div>
            </div>
            <Calender />
            <UserCard />
        </div>

    );
}

export default UserSection;