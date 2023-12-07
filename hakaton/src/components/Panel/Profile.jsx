// UserProfile.js
import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import ProfileContent from './ProfileContent';
function UserProfile() {
    // Access the id parameter from the URL
    

    return (
        <>
            <Header></Header>
            <div className="flex">
                <Sidebar />
                <ProfileContent/>
            </div>
        </>

    );
}

export default UserProfile;
