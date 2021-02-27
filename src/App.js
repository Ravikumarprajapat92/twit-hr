import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss'

import SideNav from './companents/SideNav'
import Dashboard from './screens/Dashboard';

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-4 col-md-3 col-lg-2 pl-0">
          <SideNav />
        </div>
        <div className="col-8 col-md-9 col-lg-10 container-fluid">
          <div className="row main-screen">
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
