type FormItemProps = {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    value: string;
    handleOnChange: (e: any) => {},
}

type Data = {
    title: string;
    quantity: string;
    price: string;
}

type NavBarProps = {
    goBack?: (e: any) => {};
    title: string;
    openForm?: (e: any) => {};
}

type FormProps = {
    match: string;
    history: string;
}

type List = {
    id:number;
    title:string;
} 

type ListsProps = { 
    history:any 
}