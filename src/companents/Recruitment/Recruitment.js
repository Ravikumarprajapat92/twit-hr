import { useState } from 'react';

const Recruiment = () => {

    const [candidates] = useState(
        [
            {
                id: 1,
                image: '/assets/images/candi(1).jpg',
                fullName: 'Mary G.Schuelke',
                designaion: 'Project manager',
                status: 'Tech Interview',
                designaionBg: '#f9d8d2',
                statusBulletBg: '#ee583c',
            },
            {
                id: 2,
                image: '/assets/images/candi(2).jpg',
                fullName: 'Mary G.Schuelke',
                designaion: 'Project manager',
                status: 'Tech Interview',
                designaionBg: '#FBE7C6',
                statusBulletBg: '#ED973D',
            },
            {
                id: 3,
                image: '/assets/images/candi(3).jpg',
                fullName: 'Mary G.Schuelke',
                designaion: 'Project manager',
                status: 'Tech Interview',
                designaionBg: '#DBDCF5',
                statusBulletBg: '#AE97D1',
            },
            {
                id: 4,
                image: '/assets/images/candi(4).jpg',
                fullName: 'Mary G.Schuelke',
                designaion: 'Project manager',
                status: 'Tech Interview',
                designaionBg: '#D7F0DD',
                statusBulletBg: '#57BE6C',
            },
        ]
    );

    const candidate = candidates.map(candidate => {
        return (
            <div className="row table-row" key={candidate.id} >
                <div className="col-4 table-col">
                    <img className="table-row-img" src={candidate.image} alt="user" />
                    <span>{candidate.fullName}</span>
                </div>
                <div className="col-4 table-col">
                    <span style={{ backgroundColor: candidate.designaionBg }} className="designaion">{candidate.designaion}</span>
                </div>
                <div className="col-4 table-col justify-content-between">
                    <div className="d-flex align-items-center">
                        <span style={{ backgroundColor: candidate.statusBulletBg }} className="status-bullet"></span>
                        <span>{candidate.status}</span>
                    </div>
                    <a href="#"><i className="fas fa-ellipsis-h"></i></a>
                </div>
            </div>
        )
    })
    return (
        <div className="recruitment-container">
            <div className="d-flex justify-content-between">
                <p className="recruitment-heading">Recruitment Progress</p>
                <div>
                    <button className="btn recruitment-btn">View All</button>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row recruitment-table">
                    <div className="col-12 table-head">
                        <div className="row table-head-row" >
                            <div className="col-4">Full Name</div>
                            <div className="col-4">Designation</div>
                            <div className="col-4">Status</div>
                        </div>
                    </div>
                    <div className="table-body col-12">
                        {candidate}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recruiment;