// UserProfile.js
import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import notif from '../../img/notif_white.png'
function UserProfile() {
    // Access the id parameter from the URL
    

    return (
        <>
            <Header></Header>
            <div className="flex">
                <Sidebar />
                <div className="relative bg-[#EFEFEF] w-full h-screen rounded-tl-[80px] p-[50px]">

                    <div className="flex flex-col  items-center justify-start bg-white p-[2em] rounded-[15px]">
                        <h2 className='text-[25px] text-[#818181] mb-[25px]'>Уведомления</h2>
                        <div className="bg-[#F5F5F5] rounded-[36px] flex w-[1000px] items-center mb-[500px]">
                            <div className="px-[50px] py-[45px] flex items-center justify-center bg-[#E672B6] rounded-[36px]">
                                <img src={notif} alt=""/>
                            </div>
                            <span className='ml-[30px] font-bold text-[30px]'> Ваша Анкета №7 была принята и проверена!</span>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default UserProfile;
