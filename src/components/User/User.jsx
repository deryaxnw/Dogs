import { Route, Routes } from "react-router-dom";
import { UserHeader } from "./UserHeader";
import { Feed } from "../Feed/Feed";
import { UserPhotoPost } from "./UserPhotoPost";
import { UserStatus } from "./UserStatus";

export const User = () => {
    return ( <>
    
       <section className="container">
        <UserHeader/>
        <Routes>
            <Route path="/" element={<Feed/>}/>
            <Route path="post" element={<UserPhotoPost/>}/>
            <Route path="status" element={<UserStatus/>}/>
            
        </Routes>
       </section>
    
    </> );
}