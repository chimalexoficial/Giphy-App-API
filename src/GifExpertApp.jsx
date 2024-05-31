import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export default function GifExpertApp() {

    const [categories, setCategories] = useState(['Welcome']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1 class=" mt-10 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">Giphy API App</h1>
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