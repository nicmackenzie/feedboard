import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './features/authentication/Login';
import SignUp from './features/authentication/Signup';
import Suggestions from './features/suggestions/Suggestions';
import Suggestion from './features/suggestions/Suggestion';
import { UserProvider } from './context/user-context';
import { Toaster } from 'react-hot-toast';

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
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: '#f2f4ff',
            color: '#373f68',
          },
        }}
      />
    </UserProvider>
  );
}

export default App;
