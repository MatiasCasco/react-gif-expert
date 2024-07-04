export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Uvbp3DdR0N6mQmOWK48KMen449OiPSuI&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();

    const gifs = data.map(image => ({
        id: image.id,
        title: image.title,
        url: image.images.downsized_medium.url,
    }));

    // console.log(gifs);
    return gifs;
}

