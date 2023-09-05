import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './features/authentication/Login';
import SignUp from './features/authentication/SignUp';
import Suggestions from './features/suggestions/Suggestions';
import Suggestion from './features/suggestions/Suggestion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Suggestions />} />
        <Route path="/suggestions/:id" element={<Suggestion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
