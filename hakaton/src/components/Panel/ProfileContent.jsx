import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import b8 from '../../img/b8.png';

const ProfileContent = () => {
    const { login } = useParams();
    const [userData, setUserData] = useState(null);
    const [fileInfoList, setFileInfoList] = useState([]);

    useEffect(() => {
        // Fetch user information
        axios.get(`/user/info.php?login=${login}`)
            .then(response => {
                console.log(response)
                if(response.data.status == "success"){
                    setUserData(response.data);
                }  
            })
            .catch(error => {
                console.error('Error fetching user information:', error);
            });

        // Fetch file information
        axios.get(`/files/info.php?login=${login}`)
            .then(response => {
                console.log(response)
                if(response.data.status == "success"){
                    setFileInfoList(response.data.files);
                }
                
                
            })
            .catch(error => {
                console.error('Error fetching file information:', error);
            });
    }, [login]);

    return (
        <div className="relative bg-[#EFEFEF] w-full h-screen rounded-tl-[80px] p-[50px]">
            <div className="p-[30px] bg-white rounded-[20px] w-100 h-100">
                {userData && (
                    <div className="flex items-center" style={{gap:"20px"}}>
                        <div className="w-[100px] h-[100px] flex items-center justify-center">
                            <img src={userData.logo} alt="" className="max-w-[100px] max-h-[100px]" />
                        </div>
                        <h4 className="text-2xl font-semibold">{userData.login}</h4>
                        
                        <h5 class="text-slate-500" style={{position:"relative",
                    top: "-50px",
                    left: "400px"}}>История отчетов</h5>
                    </div>
                )}
                {!userData && (
                    <div>
                        <h4 className="text-2xl font-semibold">Такой профиль не найден</h4>
                        {/* Display other user information as needed */}
                    </div>
                )}
                {fileInfoList && (
                    <div>
                        <h2>File Information</h2>
                        <ul>
                            {fileInfoList.map(fileInfo => (
                                <li key={fileInfo.id}>
                                    <p>File Path: {fileInfo.path}</p>
                                    <p>File Size: {fileInfo.size}</p>
                                    {/* Display other file information as needed */}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProfileContent;
