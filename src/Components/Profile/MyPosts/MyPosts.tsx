import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./MyPost/Post";

export function MyPosts() {
    return (
        <div>
            <div>My posts</div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Delete post</button>
            <div className="s.posts">
                <Post message={"Who da fook is that guy"}/>
                <Post message={"You'll do nuttin"}/>
            </div>
        </div>
    )
}