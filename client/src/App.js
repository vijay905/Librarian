import './App.css';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import AdminLogin from './components/AdminLogin/AdminLogin';
import { Routes, Route } from 'react-router-dom';
import { BookForm } from './components/add_book_form/BookForm';
import AdminLoginnew from './components/AdminLogin/AdminLoginnew';
import UserLogin from './components/UserLogin/UserLogin';
import UserSignUp from './components/UserSignUp/UserSignUp';
import HomePage from './components/UserDashBoard/UserDashBoard';
import BookDetails from './components/UserDashBoard/BookDetails';
function App() {
  return (
    <Routes>
      <Route exact path='/login' element={<AdminLoginnew />} />
      <Route exact path='/admindashboard' element={<AdminDashboard />} />
      <Route exact path='/addbook' element={<BookForm />} />
      <Route exact path='/userlogin' element={<UserLogin />} />
      <Route exact path='/userSignUp' element={<UserSignUp/>} />
      <Route exact path='/homepage' element={<HomePage/>} />
      <Route path="/books/:id" element={ <BookDetails/>} />
    </Routes>
  );
}

export default App;
