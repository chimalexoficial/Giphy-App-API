import { useState } from "react"



export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length <= 1) return;

        onAddCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Write something to search"
                onChange={onInputChange} />
        </form>
    )
}