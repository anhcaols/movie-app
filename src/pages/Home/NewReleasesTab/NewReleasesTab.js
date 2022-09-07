import classNames from 'classnames'
import PropTypes from 'prop-types'

import InfoMovie from './InfoMovie/InfoMovie'
function NewReleasesTab({ className, data, genres = [] }) {
    return (
        <div className={classNames('content-body hide-on-mobile pb-[65px] mt-[30px]', { [className]: className })}>
            <div className="container flex flex-row flex-wrap content-center items-center mx-auto pt-[10px] pl-[15px] pr-[15px]">
                <div className="info-film grid grid-cols-1 lg:grid-cols-2 gap-[10px] md:gap-[30px]">
                    {data.slice(0, 6).map((film) => {
                        return (
                            <InfoMovie
                                genresName={film.genre_ids.map((item_id) => {
                                    let nameGenre
                                    genres.forEach((item_id_name) => {
                                        if (item_id === item_id_name.id) {
                                            nameGenre = item_id_name.name
                                        }
                                    })
                                    return nameGenre
                                })}
                                key={film.id}
                                data={film}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
NewReleasesTab.propTypes = {
    classNames: PropTypes.string,
    data: PropTypes.array,
    genres: PropTypes.array,
}
export default NewReleasesTab
