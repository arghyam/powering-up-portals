import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';  // Ensure to define some CSS here
import UserContribution from './pages/users';
import Use from './pages/user_page';
import EventForm from './pages/event_form';
import OpportunityForm from './pages/opportunity_form';
import ArticleForm from './pages/article_form';
import UserProfile from './pages/userProfile';
import Header from './components/layout/navbar';
import Footer from './components/layout/footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content-wrap">
        <Router>
          <Routes>
            <Route path="/" element={<UserContribution />} />
            <Route path="/use" element={<Use />} />
            <Route path="/event" element={<EventForm />} />
            <Route path="/opp" element={<OpportunityForm />} />
            <Route path="/article" element={<ArticleForm />} />
            <Route path="/pro" element={<UserProfile />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
