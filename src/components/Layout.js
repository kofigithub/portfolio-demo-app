import { Outlet } from 'react-router-dom';
import Header from './Header';
//import Footer from './Footer';
//import Sidebar from './Sidebar';

const Layout = () => {
  return (
  
    <div>
      <div className="content">
        <Outlet />
      </div>
	   
    </div>
	
  );
 
};

export default Layout;
