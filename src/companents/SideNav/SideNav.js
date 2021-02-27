import { Navbar } from "react-bootstrap";


const SideNav = () => {
    return (
        <Navbar className="side-nav">
            <a href="#" className="nav-brand">
                <img alt="logo" src="/assets/images/logo.png" width="35px" height="35px" />
                <h1 className="logo-name">TwitHR</h1>
            </a>
            <div className="nav-link-container">
                <a className="navbar-link active" href="#">
                    <i className="fas fa-th-large mr-2"></i>
                    <span>Dashboard</span>
                </a>
                <a className="navbar-link" href="#">
                    <i className="fas fa-user-friends mr-2"></i>
                    <span>Recruitment</span>
                </a>
                <a className="navbar-link" href="#">
                    <i className="fas fa-clipboard-list mr-2"></i>
                    <span>Onboarding</span>
                </a>
                <a className="navbar-link" href="#">
                    <i className="fas fa-chart-pie mr-2"></i>
                    <span>Reports</span>
                </a>
                <a className="navbar-link" href="#">
                    <i className="far fa-calendar-alt mr-2"></i>
                    <span>Calender</span>
                </a>
                <a className="navbar-link" href="#">
                    <i className="fas fa-cog mr-2"></i>
                    <span>Settings</span>
                </a>
            </div>
        </Navbar>
    );
}

export default SideNav;