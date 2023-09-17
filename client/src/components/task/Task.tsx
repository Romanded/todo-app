import React, {FC, useMemo, useState} from 'react';
import { Element }from "../../types/types"
import cl from "./Task.module.css"

interface TaskProps {
    el: Element
    switchChecked: (id : number) => void;
}

const Task: FC<TaskProps> = ({ el, switchChecked}) => {

    type back = "#FFF" | "../../../images/done.png"

    const [back, setBack] = useState<back>("#FFF")

    useMemo(() => {
        if (el.done) {
            setBack("../../../images/done.png")
        } else {
            setBack("#FFF")
        }
    }, [el.done]);

    return (
        <div data-testid="task" className={cl.container}>
            <label htmlFor={`${el.id}`} style={{backgroundImage: `url(${back})`}}></label>
            <input id={`${el.id}`} className={cl.checkbox} data-testid="checkbox" checked={el.done}
            onChange={() => {
                switchChecked(el.id)
            }}
            type="checkbox"/>
            <p className={cl.task}>{el.task}</p>
            <h6 className={cl.date}>{el.date}</h6>
        </div>
    );
};

export default Task;