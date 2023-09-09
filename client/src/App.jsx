import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './features/authentication/Login';
import SignUp from './features/authentication/Signup';
import Suggestions from './features/suggestions/Suggestions';
import Suggestion from './features/suggestions/Suggestion';
import { UserProvider } from './context/user-context';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Suggestions />} />
          <Route path="/suggestions/:id" element={<Suggestion />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
