import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import MailPage from './pages/MailPage';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/inbox' element={
          <ProtectedRoute>
            <MailPage />
          </ProtectedRoute>
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

function ProtectedRoute({ children }) {
  const isAuth = localStorage.getItem("token");
  return isAuth ? children : <Navigate replace to="/" />
}

export default App;
