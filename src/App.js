import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/sign-in" element={<SignIn/>}></Route>
          <Route path="/dashboard" element={<AdminDashboard/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
