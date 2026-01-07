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
        <div className="container mx-auto">
            <h1 className=" mt-10 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">Giphy API App</h1>

            {/* test for ci/cd */}
            <h2 className=" mt-10 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">And deployed via GitHub Actions</h2>

            <p className="text-center text-2xl">
                Giphy App is a dynamic React application that leverages the power of the Giphy API to provide users with a fun and interactive way to explore GIFs. Built with React.js, Tailwind CSS, and component-based architecture, Giphy App offers a seamless and visually appealing experience for discovering and sharing GIFs across the web.</p>
            <AddCategory
                // setCategories={setCategories} 
                onAddCategory={onAddCategory} />
            {categories.map(category =>
                <GifGrid
                    key={category}
                    category={category} />
            )}
        </div>
    )
}