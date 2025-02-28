import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/landing';
import Authentication from './pages/authentication';
import { AuthProvider } from './contexts/AuthContext';
import VideoMeetComponent from './pages/VideoMeet';
import HomeComponent from './pages/home';
import History from './pages/history';
import Chatbot from "./pages/Chatbot";


// import Paidclass from "./pages/Paidclass";
function App() {
  return (
    <div className="App">

      <Router>

        <AuthProvider>


          <Routes>

            <Route path='/' element={<LandingPage />} />
            <Route path='/auth' element={<Authentication />} />
            <Route path='/home's element={<HomeComponent />} />
            <Route path='/history' element={<History />} />
            <Route path='/chatbot' element={<Chatbot />} />
            <Route path='/:url' element={<VideoMeetComponent />} />
            {/* <Route path='/paidclass' element={<Paidclass />} /> */}
           
          </Routes>
        </AuthProvider>

      </Router>
    </div>
  );
}

export default App;
