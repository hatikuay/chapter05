type Item = {
    id?: number,
    listId: number | string | undefined,
    title: string,
    quantity: number,
    price: number
}

type List = {
    id: number,
    title: string,
}

type FormItemProps = {
    id: string;
    label: string;
    type?: string;
    placeholder: string;
    value: string | number;
    handleOnChange: (event:React.ChangeEvent<HTMLInputElement>) => void,
}

type NavBarProps = {
    goBack?: () => void;
    title: string;
    openForm?: () => void;
}

type AppContextProps = {
    children: Array<JSX.Element> | JSX.Element
}

type ItemsContextProviderProps = {
    children: Array<JSX.Element> | JSX.Element
}

type ListsContextProviderProviderProps = {
    children: Array<JSX.Element> | JSX.Element
}
