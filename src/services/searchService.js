import * as requestMovie from '~/utils/httpRequest'

const API_KEY = 'api_key=8e6ce93930533e9735da28b27d751706'

export const genres = async (query) => {
    try {
        const res = await requestMovie.get(
            `search/movie?${API_KEY}&language=en-US&`,
            {
                params: {
                    query,
                },
            },

            `&page=1&include_adult=false`,
        )
        console.log(res);
        return res.genres
    } catch (error) {
        console.log(error)
    }
}