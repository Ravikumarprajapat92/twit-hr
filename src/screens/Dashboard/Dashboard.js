import Recruiment from "../../companents/Recruitment";
import GreetingCard from "../../companents/cards/GreetingCard";
import UserSection from "../../companents/UserSection";

const Dashboard = () => {
    return (
        <>
            <div className="col-12 col-lg-7 col-xl-8 dashboard">
                <p className='heading'>Dashboard</p>
                <GreetingCard />
                <Recruiment />
            </div>
            <div className="col-12 col-lg-5 col-xl-4">
                <UserSection />
            </div>
        </>
    );
}

export default Dashboard;