import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--7s6h5RhW--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/cf2fq5ywkhn4bcjiwtr6.png"
                    alt=""/>
            </div>
            <MyPosts/>
        </div>
    )
}