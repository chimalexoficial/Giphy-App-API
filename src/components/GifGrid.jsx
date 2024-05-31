import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"


export default function GifGrid({ category }) {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages('')
        setImages(newImages);
    }

    useEffect(() => {
        getImages()
    }, [])


    return (
        <>
            <div className="columns-3">
                {
                    images.map(({ id, url, title }) => (
                        <div className="content-center">
                            <img
                                key={id}
                                className="w-full aspect-video"
                                src={url} />
                            <p className=" mb-5 text-1xl font-black text-gray-900 dark:text-black">{title}</p>
                            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><a href={url}>View GIF on Giphy</a></button>

                        </div>

                    ))


                }
            </div>

        </>
    )
}