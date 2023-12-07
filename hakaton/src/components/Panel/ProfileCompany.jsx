// UserProfile.js
import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import ProfileCompanyContent from './ProfileCompanyContent';
function UserProfile() {
    // Access the id parameter from the URL
    

    return (
        <>
            <Header></Header>
            <div className="flex">
                <Sidebar />
                <ProfileCompanyContent/>
            </div>
        </>

    );
}

export default UserProfile;
