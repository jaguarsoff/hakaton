// UserProfile.js
import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import RaitingContent from './RaitingContent';
function UserProfile() {
    // Access the id parameter from the URL
    

    return (
        <>
            <Header></Header>
            <div className="flex">
                <Sidebar />
                <RaitingContent/>
            </div>
        </>

    );
}

export default UserProfile;
