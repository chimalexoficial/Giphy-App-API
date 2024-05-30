import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export default function GifExpertApp() {

    const [categories, setCategories] = useState(['1', '2']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>Giphy App API</h1>
            <AddCategory
                // setCategories={setCategories} 
                onAddCategory={onAddCategory} />
                {categories.map(category =>
                    <GifGrid 
                    key={category}
                    category={category} />
                )}
        </>
    )
}