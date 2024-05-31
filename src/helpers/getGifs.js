

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=KEY&q=${category}&limit=12`;

    const res = await fetch(url);
    const { data } = await res.json();
    const gifs = data.map(dataMap => ({
        id: dataMap.id,
        title: dataMap.title,
        url: dataMap.images.downsized_medium.url
    }))

    console.log(gifs);
    return gifs;
}