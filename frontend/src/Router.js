import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from "./routes/Main";
import Login from "./routes/Login";
import Signup from "./routes/Signup"
const AppRouter = ({isLogin,setIsLogin}) =>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Main isLogin={isLogin} setIsLogin={setIsLogin}/>}></Route>
                <Route path="/Login" element={<Login isLogin={isLogin} setIsLogin={setIsLogin}/>}></Route>
                <Route path="/Signup" element={<Signup isLogin={isLogin} setIsLogin={setIsLogin}/>}></Route>
            </Routes>
        </Router>   
    )
}

export default AppRouter;