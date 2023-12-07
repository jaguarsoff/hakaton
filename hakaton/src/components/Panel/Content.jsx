import React, { useState, useEffect } from "react";
import Cookies from "js-cookie"; // Make sure to import the Cookies library
import { jwtDecode } from "jwt-decode"; // Make sure to import jwt-decode
import axios from 'axios';
import upload from '../../img/upload.svg';
import { Link } from 'react-router-dom'

import Apple from '../../img/apple.png';
import Samsung from '../../img/samsung.png';
import MTS from '../../img/mts.png';
import b8 from '../../img/b8.png';
import tinkoff from '../../img/tinkoff.png';
import VK from '../../img/vk.png';
const Content = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  const [isModerIn, setIsModerIn] = useState(false);
  const [file, setFile] = useState(null);
  useEffect(() => {
    const authToken = Cookies.get('authToken');

    if (authToken) {
      try {
        const decodedToken = jwtDecode(authToken);

        const currentTime = Date.now() / 1000;
        if (decodedToken.exp > currentTime) {
          // If the token is still valid, make a request to check if the user is a moderator
          axios.get('user/moder.php', {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
            .then(response => {
              console.log(response.data)
              setIsModerIn(response.data.isModerator);
            })
            .catch(error => {
              console.error('Error checking moderator status:', error);
              setIsModerIn(false);
            });
        } else {
          Cookies.remove('authToken');
          setIsModerIn(false);
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        setIsModerIn(false);
      }
    } else {
      setIsModerIn(false);
    }
  }, []);

  function handleChange(event) {
    setFile(event.target.files[0]);
    setIsUploaded(true);
  }
  const submit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', file);
      console.log(formData)
      const authToken = Cookies.get('authToken');
      const decodedToken = jwtDecode(authToken);
      // Replace 'YOUR_API_ENDPOINT' with the actual endpoint where you want to handle file uploads
      const response = await axios.post('files/add.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${authToken}`,
        },
      });
      if(response.status == "success"){
        console.log('File uploaded successfully:', response.data);
      }
      else{
        console.log('File uploaded failes:', response.data);
      }
      // You can update state or perform additional actions based on the server response
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle errors as needed
    }
  };
  return (
    <div className="relative bg-[#EFEFEF] w-full h-screen rounded-tl-[80px]">
      {/* small panel */}
      {!isModerIn && (
        <>

          <div className="flex space-x-[73px] ml-[79px] pt-[127px]">
            <div className="w-[421px] h-[376px] rounded-[15px] bg-white text-[30px] font-semibold">
              <div className="flex justify-end items-center space-x-[57px] mr-[18px] mb-[24px] pt-[19px]">
                <h3>Документ-B8</h3>
                <a href="https://docs.google.com/spreadsheets/d/1a7psFA47ADxcvcJzY0UExkkJaKm65lyZ/edit#gid=1350218357">
                  <img src={upload} alt="upload-icon" />
                </a>
              </div>
              <div className="flex m-auto rounded-[15px] justify-center items-center my-6 mb-6 w-[370px] h-[269px] bg-[#EFEFEF]">
                Образец
              </div>
            </div>

            <div className="w-[421px] h-[376px] rounded-[15px] bg-white text-[30px] font-semibold">
              <div className="flex justify-end items-center space-x-[57px] mr-[18px] mb-[24px] pt-[19px]">
                <h3>Документ-B8</h3>
                <a href="https://docs.google.com/spreadsheets/d/1a7psFA47ADxcvcJzY0UExkkJaKm65lyZ/edit#gid=1350218357">
                  <img src={upload} alt="upload-icon" />
                </a>
              </div>

              <div className="flex m-auto rounded-[15px] justify-center items-center my-6 mb-6 w-[370px] h-[269px] bg-[#EFEFEF]">
                Образец
              </div>
            </div>

            <div className="w-[421px] h-[376px] rounded-[15px] bg-white text-[30px] font-semibold">
              <div className="flex justify-end items-center space-x-[57px] mr-[18px] mb-[24px] pt-[19px]">
                <h3>Документ-B8</h3>
                <a href="https://docs.google.com/spreadsheets/d/1a7psFA47ADxcvcJzY0UExkkJaKm65lyZ/edit#gid=1350218357">
                  <img src={upload} alt="upload-icon" />
                </a>
              </div>

              <div className="flex m-auto rounded-[15px] justify-center items-center my-6 mb-6 w-[370px] h-[269px] bg-[#EFEFEF]">
                Образец
              </div>
            </div>
          </div>
          <form onSubmit={submit}>
            <div className="flex items-center absolute top-[30px] right-[30px] text-[13px] h-[62px] p-4 bg-[#E672B6] rounded-[15px]">

              <label htmlFor="inputFile" className="flex items-center mr-14 cursor-pointer" style={{ gap: "10px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="25" viewBox="0 0 11 25" fill="none">
                  <path d="M6.79824 23.5927C6.18031 24.1732 5.34679 24.4748 4.42934 24.4457C2.39286 24.3788 0.78581 22.668 0.846532 20.6323L0.866496 4.27174C0.941862 1.79602 3.00346 0.0754499 5.77038 0.163673C7.01049 0.203527 8.23575 0.789424 9.13336 1.77187C10.0213 2.74409 10.5091 4.01459 10.4714 5.25832L10.4718 17.6396C10.473 17.9854 10.1925 18.2647 9.84659 18.2643C9.50085 18.2632 9.22067 17.9828 9.22085 17.637L9.22031 5.2369C9.24878 4.29732 8.88025 3.34864 8.2103 2.61496C7.53995 1.88083 6.63656 1.44359 5.7326 1.41424C4.03466 1.35942 2.17953 2.23818 2.11773 4.29383L2.098 20.6541C2.0571 22.0191 3.12052 23.1507 4.46727 23.1945C5.09826 23.2145 5.63324 23.0103 6.02102 22.5993C6.40448 22.1923 6.62667 21.5908 6.64718 20.9061L6.64806 7.87271C6.66192 7.41507 6.59178 6.39105 5.65557 6.36069C5.12552 6.34369 4.94957 6.5407 4.89142 6.60519C4.72623 6.79038 4.63282 7.11267 4.62022 7.53697L4.61582 17.343C4.61561 17.6892 4.33538 17.9692 3.9901 17.9672C3.64457 17.9668 3.36441 17.6855 3.3648 17.3404L3.36892 7.5162C3.39057 6.76654 3.58756 6.18617 3.95507 5.77319C4.24213 5.45119 4.77061 5.08038 5.69334 5.11054C7.06219 5.15462 7.94804 6.27334 7.89916 7.89453L7.89781 20.9275C7.86806 21.9365 7.52536 22.8282 6.93264 23.4579C6.8894 23.5045 6.84445 23.5493 6.79821 23.5927L6.79824 23.5927Z" fill="black" />
                </svg>
                {isUploaded ? 'Файл загружен' : 'Выбрать'}
              </label>
              <input onChange={handleChange} type="file" id="inputFile" className="flex space-x-[9px] pl-7 py-3 hidden" />
              <button disabled={!isUploaded} className="bg-white py-3 px-3 rounded-[15px]">
                Отправить
              </button>
            </div>
          </form>

        </>
      )}
      {isModerIn && (
        <div className="p-[4em]">
          <Link to="/panel/profile/b8" className="py-[30px] px-[100px] flex  bg-white rounded-[20px] mb-[30px] items-center " style={{ gap: "50px" }}>
            <div className="w-[100px] h-[100px] flex items-center justify-center"><img src={b8} alt="" className="max-w-[100px] max-h-[100px]" /></div>
            <h4 className="text-2xl font-semibold">Самый северный акселератор инновационных проектов B8</h4>
          </Link>
          <Link to="/panel/profile/samsun" className="py-[30px] px-[100px] flex  bg-white rounded-[20px] mb-[30px] items-center " style={{ gap: "50px" }}>
            <div className="w-[100px] h-[100px] flex items-center justify-center"><img src={Samsung} alt="" className="max-w-[100px] max-h-[100px]" /></div>
            <h4 className="text-2xl font-semibold">Компания Samsung (в переводе – «Три звезды») основана в Южной Корее в 1938 году</h4>
          </Link>
          <Link to="/panel/profile/apple" className="py-[30px] px-[100px] flex  bg-white rounded-[20px] mb-[30px] items-center" style={{ gap: "50px" }}>
            <div className="w-[100px] h-[100px] flex items-center justify-center">
              <img src={Apple} alt="" className="max-w-[100px] max-h-[100px]" />
            </div>
            <h4 className="text-2xl font-semibold">Apple (МФА: [ˈæp(ə)l], «Эпл») — американская корпорация, разработчик персональных и планшетных компьютеров, аудиоплееров, смартфонов, программного обеспечения и цифрового контента</h4>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Content;
