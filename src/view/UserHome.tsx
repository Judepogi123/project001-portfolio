import React from 'react';

import SideBar from '../components/layout/SideBar';

const UserHome = () => {
  return (
    <div className=' w-full h-full flex'>
        {/*Side bar*/}
        <div className=' w-1/5 h-full'>
            <SideBar/>
        </div>
        <div className=' w-4/5 h-full'></div>
    </div>
  )
}

export default UserHome