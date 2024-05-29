import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export default function GifExpertApp() {
    
    const [categories, setCategories] = useState(['1', '2']);

    const onAddCategory = () => {
        setCategories([...categories, 'Valorant'])
    }

    return (
        <>
        <h1>GifExpertApp</h1>
        <AddCategory/>
        <button
        onClick={onAddCategory}>Add</button>
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </>
    )
}