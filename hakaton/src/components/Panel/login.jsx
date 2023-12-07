import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../img/logo_auth.png';
import back_auth from '../../img/back_auth.png';
import {Link} from 'react-router-dom'
function Login() {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    login: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const validateForm = () => {
    let isValid = true;

    if (!formData.login.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        login: 'Введите логин',
      }));
      isValid = false;
    }

    if (!formData.password.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Введите пароль',
      }));
      isValid = false;
    }

    return isValid;
  };
  const [registrationStatus, setRegistrationStatus] = useState({
    success: false,
    error: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    setRegistrationStatus({
      success: true,
      error: null,
    });
    if (!validateForm()) {
      return;
    }

    const params = new URLSearchParams();
    params.append('login', formData.login);
    params.append('password', formData.password);

    try {
      const response = await axios.post('user/login.php', params);
      console.log(response.data);
      if (response.data.status === 'success') {
        const token = response.data.token;

        // Сохраняем токен в куках
        document.cookie = `authToken=${token}; path=/`;
        // Успешная регистрация - обновляем состояние и перенаправляем пользователя
        setRegistrationStatus({
          success: true,
          error: null,
        });
        // Перенаправление на /panel
        // Вы можете использовать React Router или другие подходящие методы
        window.location.href = '/panel';
      } else {
        // Неудачная регистрация - показываем ошибку
        setRegistrationStatus({
          success: false,
          error: response.data.message,
        });
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      // Добавьте код обработки ошибок, например, вывод сообщения об ошибке.
    }

  };

  return (
    <div className="register">
      <header className="flex justify-center items-center p-4">
        <img src={logo} alt="" width="60" />
        <h2 className="text-3xl font-semibold ml-4">Monorts</h2>
      </header>
      <main className="mx-36 h-full rounded-[30px] relative bg-[#E672B6] mb-[20px]">
        <img src={back_auth} alt="" className="w-full" />
        <div className="p-20  bg-white absolute right-[430px] top-[195px] rounded-[30px] flex flex-col" style={{width:"675px"}}>
          <h3 className="text-5xl font-extrabold mb-24 text-center">Авторизация</h3>
          <form onSubmit={handleSubmit} className='flex flex-col'>
            <div className="mb-8">
              <input
                className={`bg-[#EFEFEF] w-full p-8 border border-[#6E6565] rounded-[30px] text-[30px] placeholder:text-[30px] ${errors.login && 'border-red-500'
                  }`}
                type="text"
                placeholder="Логин"
                name="login"
                value={formData.login}
                onChange={handleChange}
              />
              {errors.login && <p className="text-red-500">{errors.login}</p>}
            </div>
            <div className="mb-8">
              <input
                className={`bg-[#EFEFEF] w-full p-8 border border-[#6E6565] rounded-[30px] text-[30px] placeholder:text-[30px] ${errors.password && 'border-red-500'
                  }`}
                type="password"
                placeholder="Пароль"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>
            {registrationStatus.error && (
              <p className="text-red-500 mb-4">{registrationStatus.error}</p>
            )}
            <button className="bg-pink-500 p-8 rounded-[50px] text-3xl font-semibold" type="submit">
              Войти
            </button>
              <Link to='/register' style={{
                fontSize: "30px",
                textAlign: "center",
                marginTop: "10px",
                fontWeight: "600",
                color: "#918686",
            }}>Регистрация</Link>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;
