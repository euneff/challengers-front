import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import App from './components/App';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import CourseListPage from './pages/CourseListPage';
import QuestionPage from './pages/QuestionPage';
import QuestionListPage from './pages/QuestionListPage';
import WishlistPage from './pages/WishlistPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Mypage from './pages/Mypage';
import Review from './pages/Review';
import CommuPage from './pages/CommuPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Write from './pages/Write';
import Challenge from './pages/Challenge';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="courses">
            <Route index element={<CourseListPage />} />
            <Route path=":courseSlug" element={<CoursePage />} />
          </Route>
          <Route path="questions">
            <Route index element={<QuestionListPage />} />
            <Route path="616825" element={<QuestionPage />} />
          </Route>
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="mypage" element={<Mypage />} />
          <Route path="review" element={<Review />} />
          <Route path="commu" element={<CommuPage/>}/>
          <Route path="write" element={<Write />}/>
          <Route path="challenge" element={<Challenge/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
