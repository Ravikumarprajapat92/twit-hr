import { Card } from "react-bootstrap";

const UserCard = () => {
    return (
        <Card>
            <div className="card-head">
                <Card.Img className="user-card-img" variant="top" src="/assets/images/candi(2).jpg" />
                <p className="card-user-name">Mr Smith</p>
                <p className="designation">Sr. HR Manager</p>
            </div>
            <div className="card-btn-container">
                <a className="card-btn mr-3" href="">
                    <i class="fas fa-phone-alt"></i>
                </a>
                <a className="card-btn mr-3" href="">
                    <i className="far fa-envelope"></i>
                </a>
                <a className="card-btn" href="">
                    <i class="fas fa-comment-alt"></i>
                </a>
            </div>
            <Card.Body className="mt-0">
                <hr className="my-0" />
                <div className="about-user">
                    <p className="about-type">Company</p>
                    <p className="about-discription">FoxHr Pvt. Ltd.</p>
                </div>
                <div className="about-user">
                    <p className="about-type">Joining Date</p>
                    <p className="about-discription">01/06/2018</p>
                </div>
                <div className="about-user">
                    <p className="about-type">Projects</p>
                    <p className="about-discription">34 Active</p>
                </div>
            </Card.Body>
        </Card>
    );
}

export default UserCard;