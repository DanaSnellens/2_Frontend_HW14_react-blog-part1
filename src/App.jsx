import './App.css'
import logo from './assets/logo-white.png'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/homePage/Home.jsx'
import NewPost from './pages/newPostPage/NewPost.jsx'
import OverviewBlogsPage from './pages/overviewBlogspage/OverviewBlogsPage.jsx'
import Error404 from './pages/error404Page/Error404.jsx'
import Posts from "./pages/postsPage/Posts.jsx";
import Navigation from './components/navigation/Navigation.jsx'

function App() {
    return (
        <div className="page-container">
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new-post" element={<NewPost/>}/>
                <Route path="/overview-blogs" element={<OverviewBlogsPage/>}/>
                <Route path="/posts/:id" element={<Posts/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default App
