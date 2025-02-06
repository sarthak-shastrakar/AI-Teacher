import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/landing';
import Authentication from './pages/authentication';
import { AuthProvider } from './contexts/AuthContext';
import VideoMeetComponent from './pages/VideoMeet';
import HomeComponent from './pages/home';
import History from './pages/history';
import Chatbot from "./pages/Chatbot";
import Paidclass from "./pages/Paidclass";
import Freeclass from "./pages/Freeclass";
import Weeklytest from "./pages/Weeklytest";
import Papers from "./pages/Papers";
import Books from "./pages/Books";
import Syllabus from "./pages/Syllabus";
import SSC from "./pages/SSC"
import BANKING from "./pages/BANKING"
import RRB from "./pages/RRB"
import UPSC from "./pages/UPSC"
import NEET from "./pages/NEET"
import JEE from "./pages/JEE"
import NDA from "./pages/NDA"
import RAW from "./pages/RAW"
import DRDO from "./pages/DRDO"
import DELHI from "./pages/DELHI"

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
            <Route path='/paidclass' element={<Paidclass />} />
            <Route path='/freeclass' element={<Freeclass />} />
            <Route path='/weeklytest' element={<Weeklytest />} />
            <Route path='/papers' element={<Papers />} />
            <Route path='/books' element={<Books />} />
            <Route path='/syllabus' element={<Syllabus />} /> 
            <Route path='/ssc' element={<SSC />} /> 
            <Route path='/banking' element={<BANKING />} /> 
            <Route path='/rrb' element={<RRB />} /> 
            <Route path='/upsc' element={<UPSC />} /> 
            <Route path='/neet' element={<NEET />} /> 
            <Route path='/jee' element={<JEE />} /> 
            <Route path='/nda' element={<NDA />} /> 
            <Route path='/raw' element={<RAW />} /> 
            <Route path='/drdo' element={<DRDO />} /> 
            <Route path='/delhipolice' element={<DELHI />} /> 
          </Routes>
        </AuthProvider>

      </Router>
    </div>
  );
}

export default App;
