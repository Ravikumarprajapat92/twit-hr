const GreetingCard = () => {
    return (
        <div className="greeting-card">
            <div className="row">
                <div className="col-5 col-md-6 col-lg-5 col-xl-7">
                    <p className="Card-heading">Hello Mr Smith!</p>
                    <p>Today you have 9 new applications, Also you need to hire ROR Developer, React.JS Developer.</p>
                    <button className="btn greeting-card-btn" >Read more</button>
                </div>
                <div className="col-7 col-md-6 col-lg-7 col-xl-5">
                    <img className="greeting-card-img" src="/assets/images/working.png" alt="Man working" />
                </div>
            </div>
        </div>
    );
}

export default GreetingCard;