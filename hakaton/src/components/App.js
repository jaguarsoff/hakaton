import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';

// Ваши компоненты
import Landing from './Landing';
import Register from './Panel/register';
import Login from './Panel/login';
import Panel from './Panel';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authToken = Cookies.get('authToken');

    if (authToken) {
      try {
        // Декодируем токен, чтобы получить информацию
        const decodedToken = jwtDecode(authToken);

        // Проверяем, что токен не истек
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp > currentTime) {
          setIsLoggedIn(true);
        } else {
          // Токен истек, удаляем его из кук и считаем пользователя не аутентифицированным
          Cookies.remove('authToken');
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Ошибка при декодировании токена:', error);
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Panel /> : <Landing/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/panel" element={isLoggedIn ? <Panel /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
