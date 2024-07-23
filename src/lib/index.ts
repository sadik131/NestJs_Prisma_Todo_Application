export interface FormTodo {
    type: string,
    placeholer: string,
    value: string,
    onChange: (e: any) => void,
    className: string
}

export interface ButtonProps {
    type: "submit" | "reset"
    text: string,
    className: string
}

export interface TodosProps {
    id: string,
    title: string | null,
    isComplited: boolean,
}