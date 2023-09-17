import React, {useState, FC, useEffect, Dispatch, SetStateAction} from 'react';
import Task from '../task/Task'
import { Element } from "../../types/types";
import {Status} from "../../types/types";

interface ListProps {
    status: Status,
    list: Element[]
    setList: Dispatch<SetStateAction<Element[]>>
}

const List: FC<ListProps> = ({ status, list, setList}) => {

    const [currentList, setCurrentList] = useState<Element[]>(list)


    useEffect(() => {
        if (status === 'all') {
            setCurrentList(list)
        } else if (status === 'fulfilled') {
            setCurrentList([...list].filter(e => e.done))
        } else if (status === 'unfulfilled') {
            setCurrentList([...list].filter(e => !e.done))
        }
    }, [status, list]);
    const  switchChecked = (id: number) : void => {
        const newList = [...list]
        newList.forEach((e) => {
            if (e.id === id) {
                e.done = !e.done
            }
        })
        setList(newList)
    }

    return (
        <div>
            {
                currentList.map((e) =>
                    <Task key={e.id} el={e} switchChecked={switchChecked}/>
                )
            }
        </div>
    );
};

export default List;