import axios from 'axios'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types';

import InfoMovie from './InfoMovie/InfoMovie'
function NewReleasesTab({ className }) {
    const [listFilm, setListFilm] = useState([])
    const movies = listFilm.slice(10, 16)
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
        <div className={classNames('content-body pb-[65px] mt-[30px]', { [className]: className })}>
            <div className="container flex flex-row flex-wrap content-center items-center mx-auto pt-[10px] pl-[15px] pr-[15px]">
                <div className="info-film grid grid-cols-2 gap-[30px]">
                    {movies.map((film) => {
                        return <InfoMovie key={film.id} data={film} />
                    })}
                </div>
            </div>
        </div>
    )
}
NewReleasesTab.propTypes = {
    classNames: PropTypes.string
}
export default NewReleasesTab
