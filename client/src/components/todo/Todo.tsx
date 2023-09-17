import React, { FC, useRef } from 'react';
import List from "../list/List";
import { useState } from "react";
import { Status } from "../../types/types";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import cl from "./Todo.module.css"
import {getDate} from "../../utils/getDate";
const Todo: FC = () => {

    const [status, setStatus] = useState<Status>("all")
    const task = useRef<null | HTMLInputElement>(null)

    const { list, setList } = useLocalStorage()

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) : void => {
        e.preventDefault()
        setList([...list, {
            id: list.length ? list[list.length - 1].id + 1 : 0,
            task: task.current ? task.current.value : '',
            done: false,
            date: getDate()
        }])
    }

    return (
        <div className={cl.container}>
            <form className={cl.form} onSubmit={e => handleSubmit(e)}>
                <input className={cl.input_text} placeholder="Enter your task" ref={task} type="text"/>
                <input className={cl.add} data-testid="submit" type="submit" value="Add"/>
            </form>
            <List status={status} list={list} setList={setList}/>
            <div className={cl.btn_container}>
                <button className={cl.btn} onClick={() => setStatus('all')}>All</button>
                <button className={cl.btn} data-testid="fulfilled" onClick={() => setStatus('fulfilled')}>Fulfilled</button>
                <button className={cl.btn} data-testid="unfulfilled" onClick={() => setStatus('unfulfilled')}>Unfulfilled</button>
            </div>
        </div>
    );
};

export default Todo;