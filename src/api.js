import axios from "axios"

const searchImages = async (searchParam) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID mUaoULOyJ67BVsYOR9SsCi3uFBHpEfl48fw2ielryl4',
        },
        params: {
            query: searchParam,
        }
    });

    return response.data.results;
}

export default searchImages;