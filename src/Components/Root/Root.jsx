import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideBar from '../Sidebar/SideBar';
import './Root.css';



const Root = () => {

  const navigation = useNavigation();
  const  isNavigating = Boolean(navigation.location);
    return (
        <div>
          <Header></Header>
          <div className='root-main'>
            {isNavigating && <span>Loading ....</span>}
            <SideBar></SideBar>
            <Outlet ></Outlet>
          </div>
            <Footer className></Footer>
        </div>
    );
};

export default Root;