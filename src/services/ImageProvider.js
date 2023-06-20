const ImageProvider = async (query) => {
    const apiKey = '6ac6ef0cf2633179dc1463475edd964d';
    const data = {
        method: 'flickr.photos.search',
        api_key: apiKey,
        text: query || 'cat', // User search query
        sort: 'interestingness-desc',
        per_page: 12,
        license: '4',
        extras: 'owner_name,license',
        format: 'json',
        nojsoncallback: 1,
    };
    const parameters = new URLSearchParams(data);
    const url = `https://api.flickr.com/services/rest/?${parameters}`;
    
    try {
        const promise = await fetch(url);
        const response = await promise.json();
        return response;
    } catch (err) {
        console.log(err);        
    }
}

export default ImageProvider