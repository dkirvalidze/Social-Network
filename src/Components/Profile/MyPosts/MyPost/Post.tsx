import React from "react";
import s from './Post.module.css'

export function Post(props: any) {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWkBvSawGs33tDdN7-8JeFeEU4OZ4O1mUUf-RK9xh-tndDDTOBILNfUj3wEVC9q0TGAMY&usqp=CAU"
                alt="avatar"/>
            {props.message}
            <div>
                Like
            </div>
        </div>
    )
}