import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import UserContribution from './pages/users';
import Use from './pages/user_page';
import EventForm from './pages/event_form';
import OpportunityForm from './pages/opportunity_form';
import ArticleForm from './pages/article_form';
import UserProfile from './pages/userProfile'

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<UserContribution/>} />
        <Route path="/use" element={<Use />} />
        <Route path='/event' element={<EventForm/>} />
        <Route path='/opp' element={<OpportunityForm/>} />
        <Route path='/article' element={<ArticleForm/>} />
        <Route path='/pro' element={<UserProfile/>} />

      </Routes>
    </Router>
  );
}

export default App;
