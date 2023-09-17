export interface Element {
    id: number,
    task: string,
    done: boolean,
    date: string
}

export type Status = "all" | "fulfilled" | "unfulfilled"