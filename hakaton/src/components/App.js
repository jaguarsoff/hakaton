import { BrowserRouter as Router, Route, Routes,Navigate  } from 'react-router-dom';
import Landing from './Landing';
import Cookies from 'js-cookie';
import Panel from './Panel';
import Register from './Panel/Register';

function App() {
  const is_logged_in = Cookies.get('login') === 'true';

  return (
    <Router>
      <Routes>
        <Route path="/" element={is_logged_in ? <Panel /> : <Landing/>} />
        <Route path="/login" element={<Register/>} />
        <Route path="/panel" element={is_logged_in ? <Panel /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;