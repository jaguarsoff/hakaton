// UserProfile.js
import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import CompanyContent from './CompanyContent';
function UserProfile() {
    // Access the id parameter from the URL
    

    return (
        <>
            <Header></Header>
            <div className="flex">
                <Sidebar />
                <CompanyContent/>
            </div>
        </>

    );
}

export default UserProfile;
