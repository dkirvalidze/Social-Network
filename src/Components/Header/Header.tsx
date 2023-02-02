import React from "react";
import s from './Header.module.css';

export function Header () {
    return (
        <header className={s.header}>
            <img
                src={"https://cdn.logo.com/hotlink-ok/logo-social-sq.png"}
                alt={"Logo"}
            />
        </header>
    )
}