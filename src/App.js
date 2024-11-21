import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/pages/Home";
import Dashboard from "../src/pages/Dashboard";
import Login from "../src/pages/Login";
import PostAdd from "../src/pages/PostAdd";
import PostEdit from "../src/pages/PostEdit";
import PostManage from "../src/pages/PostManage";
import Signup from "../src/pages/Signup";
import SinglePost from "../src/pages/SinglePost";
import UserAdd from "../src/pages/UserAdd";
import UserChangePassword from "../src/pages/UserChangePassword";
import UserEdit from "../src/pages/UserEdit";
import UserManage from "../src/pages/UserManage";  


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/postadd" element={<PostAdd />} />
        <Route path="/postedit" element={<PostEdit />} />
        <Route path="/postmanage" element={<PostManage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/singlepost" element={<SinglePost />} />
        <Route path="/useradd" element={<UserAdd />} />
        <Route path="/userchangepassword" element={<UserChangePassword />} />
        <Route path="/useredit" element={<UserEdit />} />
        <Route path="/usermanage" element={<UserManage />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
