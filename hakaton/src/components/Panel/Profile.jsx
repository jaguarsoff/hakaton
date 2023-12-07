// UserProfile.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import ProfileContent from './ProfileContent';
function UserProfile() {
    // Access the id parameter from the URL
    const { login } = useParams();

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
