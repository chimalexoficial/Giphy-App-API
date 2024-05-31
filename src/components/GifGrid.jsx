import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"


export default function GifGrid({ category }) {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages);
    }

    useEffect(() => {
        getImages()
    }, [])


    return (
        <>
            <div className="columns-3">
                {
                    images.map((imagesMap) => (
                        <img class="w-full aspect-video" src={imagesMap.url} />
                    ))

                }
            </div>

        </>
    )
}