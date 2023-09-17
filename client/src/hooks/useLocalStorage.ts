import {useEffect, useState} from "react";
import {Element} from "../types/types";

export const useLocalStorage = () => {

    const [list, setList] = useState<Element[]>([])

    useEffect(() : void => {
        const json : string | null = localStorage.getItem("list") ? localStorage.getItem("list") : "[]"
        setList(JSON.parse(`${json}`))
    }, []);

    useEffect(() : void => {
        localStorage.setItem("list", JSON.stringify(list))
    }, [list]);

    return {
        list,
        setList
    }
}