import './App.css';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/PageNotFound';
import UserContribution from './components/user_contribution';
import UserPage from './components/user_page';


const Home = () => <h2>Home Page</h2>;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<UserContribution />} />
        <Route path='/users' element={<UserPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
