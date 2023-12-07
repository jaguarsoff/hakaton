import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../../img/logo.png';
import avatar from '../../img/logo.png';
import arrowDown from '../../img/arrow-down.png';
import notif from '../../img/notif.png';
import { Link } from 'react-router-dom';
function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dropdownStyle = {
        backgroundImage: `url(${arrowDown})`, // Use `url()` for background image
        backgroundRepeat: 'no-repeat',
        width: '25px',
        height: '25px',
        cursor: 'pointer', // Add cursor style for better user interaction
    };
    const dropdowContent = {
        backgroundColor: "#EFEFEF",
        position: 'relative',
        top: '50px',
        right: '75px',
        width: "100px",
        zIndex: "999",
        border: "1px solid gray"
    }
    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };
    function exit() {
        document.cookie = `authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        window.location.reload();
    }
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const authToken = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/, '$1');

        if (authToken) {
            axios.get('/user/info.php', {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            })
                .then(response => {
                    const data = response.data;
                    console.log(response.data)
                    setUserInfo(data);
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, []);
    return (
        <div className="p-[50px] flex justify-between">
            <img src={logo} alt="Logo" />
            <div className='flex items-center' style={{ gap: "10px" }}>
                {userInfo && (
                    <><Link to="/panel/notification"><img src={notif} alt="" className='w-[40px] h-[40px]' /></Link>
                        <span>{userInfo.login}</span>
                        <img src={userInfo.logo} alt="Avatar" className="rounded-full h-[75px] w-[75px]" width="75" height="75" />
                    </>

                )}


                <div className="dropdown" style={dropdownStyle} onClick={toggleDropdown}>
                    {/* Render dropdown content if the dropdown is open */}
                    {isDropdownOpen && (
                        <div style={dropdowContent} className='rounded-[10px] p-[10px]'>
                            {/* Dropdown content goes here */}
                            <ul>
                                <li>
                                    <Link to={`/panel/profile/${userInfo.login}`}>Профиль</Link>
                                </li>
                                <li>
                                    <button onClick={exit}>Выйти</button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

            </div>


        </div>
    );
}

export default Header;
