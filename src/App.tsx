import React from "react";
import "./App.css";

function App() {
    return (
        <div className={"App"}>
            <header className={"header"}>
                <img
                    className={"CompanyLogo"}
                    src={"https://cdn.logo.com/hotlink-ok/logo-social-sq.png"}
                />
            </header>
            <nav className={"nav"}>
                <div>
                    <a href="#">Profile</a>
                </div>
                <div>
                    <a href="#">Messages</a>
                </div>
                <div>
                    <a href="#">News</a>
                </div>
                <div>
                    <a href="#">Music</a>
                </div>
                <div>
                    <a href="#">Settings</a>
                </div>
            </nav>
            <div className={"content"}>
                <div>
                    <img
                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--7s6h5RhW--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/cf2fq5ywkhn4bcjiwtr6.png"
                        alt=""/>
                </div>
                <div>Avatar & Description</div>
                <div>My posts
                    <div>New Post</div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
                Main Content
            </div>
        </div>
    );
}

export default App;