import axios from 'axios'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Card from '~/components/Card/Card'
function CartoonsTab({className}) {
    const [listFilm, setListFilm] = useState([])
    const movies = listFilm.slice(6, 18)
    //Call Api
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await axios.get(
                    'https://api.themoviedb.org/3/movie/297762/similar?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1',
                )
                setListFilm(result.data.results)
            } catch (error) {
                console.log(error)
            }
        }
        fetchApi()
    }, [])
    return (
        <div className={classNames('content-body pb-[70px]', { [className]: className })}>
            <div className="container flex flex-row flex-wrap content-center items-center mx-auto pt-[10px]">
                <div className="grid grid-cols-6">
                    {movies.map((film) => {
                        return <Card key={film.id} data={film} />
                    })}
                </div>
            </div>
        </div>
    )
}
CartoonsTab.propTypes = {
    classNames: PropTypes.string,
}
export default CartoonsTab