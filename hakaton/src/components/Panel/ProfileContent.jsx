import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import wait from '../../img/wait.svg';
import error from '../../img/error.svg';
import success from '../../img/success.svg';
import Cookies from 'js-cookie';
import tg from '../../img/tg.png';
import { jwtDecode } from 'jwt-decode';
import download from '../../img/download.png';

const ProfileContent = () => {
    const { login } = useParams();
    const [userData, setUserData] = useState(null);
    const [fileInfoList, setFileInfoList] = useState([]);
    const [isMyProfile, setIsMyProfile] = useState(false); // !value

    useEffect(() => {
        // Fetch user information
        axios.get(`/user/info.php?login=${login}`)
            .then(response => {
                console.log(response)
                if (response.data.status == "success") {
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
                if (response.status == 200) {
                    console.log(response.data.files)
                    setFileInfoList(response.data.files);
                }


            })
            .catch(error => {
                console.error('Error fetching file information:', error);
            });

        const authToken = Cookies.get('authToken');

        if (authToken) {
            try {
                // Декодируем токен, чтобы получить информацию
                const decodedToken = jwtDecode(authToken);

                // Проверяем, что токен не истек
                const currentTime = Date.now() / 1000;
                if (decodedToken.exp > currentTime) {
                    if (decodedToken.login == login) {
                        setIsMyProfile(true);
                    }
                } else {
                    // Токен истек, удаляем его из кук и считаем пользователя не аутентифицированным
                    Cookies.remove('authToken');
                    setIsMyProfile(false);
                }
            } catch (error) {
                console.error('Ошибка при декодировании токена:', error);
                setIsMyProfile(false);
            }
        } else {
            setIsMyProfile(false); // !value
        }
    }, [login]);
    const submit = (id) => {
        axios.get(`/files/confirm.php?id=${id}`)
            .then(response => {
                if (response.status === 200) {
                    console.log(response)
                    // Update the fileInfoList state with the new data
                    setFileInfoList(prevFileList => {
                        return prevFileList.map(fileInfo => {
                            if (fileInfo.id === id) {
                                return { ...fileInfo, status: response.data.status };
                            }
                            return fileInfo;
                        });
                    });
                }
            })
            .catch(error => {
                console.error('Error submitting:', error);
            });
    };
    function ReplacePath(path){
        var normalizedPath = path.replace(/\\/g, '/');

        // Получаем имя файла из пути
        var fileName = normalizedPath.split('/').pop();
    
        // Создаем относительный URL для ссылки
        return '/files/uploads/' + fileName;
    }
    return (
        <div className="relative bg-[#EFEFEF] w-full h-screen rounded-tl-[80px] p-[50px]">
            {!isMyProfile && (
                <div className="p-[30px] bg-white rounded-[20px] w-100 h-100">
                    {userData && (
                        <div className="flex items-center" style={{ gap: "20px" }}>
                            <div className="w-[100px] h-[100px] flex items-center justify-center">
                                <img src={userData.logo} alt="" className="max-w-[100px] max-h-[100px]" />
                            </div>
                            <h4 className="text-2xl font-semibold">{userData.login}</h4>

                            <h5 class="text-slate-500" style={{
                                position: "relative",
                                top: "-50px",
                                left: "400px"
                            }}>История отчетов</h5>
                        </div>
                    )}
                    {!userData && (
                        <div>
                            <h4 className="text-2xl font-semibold">Такой профиль не найден</h4>
                            {/* Display other user information as needed */}
                        </div>
                    )}
                    {fileInfoList && (
                        <div className="px-[2em]">
                            <div className="flex">
                                <ul className="flex gap-[150px] text-[30px] text-[#818181] font-medium justify-around ml-[2em]" >
                                    <li className="min-w-[150px]">Название</li>
                                    <li className="min-w-[150px]">Размер</li>
                                    <li className="min-w-[150px]">Дата</li>
                                    <li className="min-w-[150px]">Статус</li>
                                </ul>
                            </div>
                            <div className="bg-[#F5F5F5] px-[3em] py-[2em] rounded-[36px] mt-[10px]  flex flex-col">
                                {fileInfoList.map(fileInfo => (
                                    <ul className="flex gap-[150px] text-[30px] text-[black] font-semibold">

                                        <>
                                            <li className="min-w-[150px]">
                                                {fileInfo.login}
                                            </li >
                                            <li className="min-w-[150px]">
                                                {fileInfo.size_mb.toFixed(2)} мб
                                            </li>
                                            <li className="min-w-[150px]">
                                                {fileInfo.time}
                                            </li>
                                            <li className="min-w-[150px] flex items-center justify-center">
                                                {fileInfo.status === 'wait' && <img src={wait} alt="Status 1" />}
                                                {fileInfo.status === 'error' && <img src={error} alt="Status 2" />}
                                                {fileInfo.status === 'success' && <img src={success} alt="Status 3" />}
                                            </li>

                                            <li className="min-w-[150px] flex items-center gap-[15px]">
                                                <a href={ReplacePath(fileInfo.path)} download><img src={download} alt="" className="max-w-[40px] max-h-[40px]"/></a>
                                                <button className="rounded-[36px] px-[5px] py-[15px] bg-[#E672B7] text-[15px]" onClick={() => submit(fileInfo.id)}>Подтвердить</button>
                                            </li>
                                        </>

                                    </ul>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
            {isMyProfile && (
                <div className="flex gap-[50px]">
                    <div className="p-[3em] bg-white flex flex-col items-center rounded-[15px]">
                        {userData && (
                            <>
                                <div className="flex flex-col items-center justify-center mb-[70px]">
                                    <img src={userData.logo} alt="" className="rounded-full w-[100px] h-[100px]" />
                                    <h3 className="text-[40px] font-semibold">{userData.login}</h3>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="px-[25px] py-[10px] flex flex-col bg-[#EFEFEF] rounded-[30px] mb-[10px]">
                                        <label htmlFor="email">Почта</label>
                                        <input type="text" id="email" className="bg-[#EFEFEF]" />
                                    </div>
                                    <div className="px-[25px] py-[10px] flex flex-col bg-[#EFEFEF] rounded-[30px] mb-[10px]">
                                        <label htmlFor="login">Логин</label>
                                        <input type="text" id="login" className="bg-[#EFEFEF]" />
                                    </div>
                                    <div className="px-[25px] py-[10px] flex flex-col bg-[#EFEFEF] rounded-[30px] mb-[100px]">
                                        <label htmlFor="password">Пароль</label>
                                        <input type="text" id="password" className="bg-[#EFEFEF]" />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="flex flex-col items-center justify-content ">
                        <div className="flex  gap-[30px]">

                            <div className="p-[2em] bg-white rounded-[15px]">
                                <h2 className="font-semibold text-[20px] mb-[10px]">Не заполненные анкеты</h2>
                                <ul className="flex flex-col">
                                    <li className="flex gap-[10px] mb-[10px]"><img src={error} /> Анкета №2</li>
                                    <li className="flex gap-[10px] mb-[10px]"><img src={error} /> Анкета №3</li>
                                </ul>
                            </div>
                            <div className="p-[2em] bg-white rounded-[15px]">
                                <h2 className="font-semibold text-[20px] mb-[10px]">Заполненные анкеты</h2>
                                <ul className="flex flex-col">
                                    <li className="flex gap-[10px] mb-[10px]"><img src={wait} /> Анкета №5</li>
                                    <li className="flex gap-[10px] mb-[10px]"><img src={wait} /> Анкета №1</li>
                                    <li className="flex gap-[10px] mb-[10px]"><img src={wait} /> Анкета №7</li>
                                </ul>
                            </div>
                            <div className="p-[2em] bg-white rounded-[15px]">
                                <h2 className="font-semibold text-[20px] mb-[10px]">Проверенные анкеты</h2>
                                <ul className="flex flex-col">
                                    <li className="flex gap-[10px] mb-[10px]"><img src={success} /> Анкета №6</li>
                                    <li className="flex gap-[10px] mb-[10px]"><img src={success} /> Анкета №4</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex p-[2em] bg-white rounded-[15px] mt-[25px]">
                            <h2 className="font-semibold text-[20px] mb-[10px]"></h2>
                            <ul>
                                <li className="flex gap-[20px]">
                                    <img src={tg} alt="" className="h-[30px]"/>
                                    <span className="max-w-[810px]">Исследование образа бренда в сознании потребителей ( шаблон №2)
                                        Анкета №6 от "Государственное учреждение муниципального образования «Киевский центр подготовки, переподготовки и повышения квалификации специалистов водного транспорта»" </span>
                                </li>
                                <li className="flex gap-[20px] mb-[200px]">
                                    <img src={tg} alt="" className="h-[30px]" />
                                    <span  className="max-w-[810px]">Исследование образа бренда в сознании потребителей ( шаблон №2)
                                        Анкета №6 от "Государственное учреждение муниципального образования «Киевский центр подготовки, переподготовки и повышения квалификации специалистов водного транспорта»" </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfileContent;
