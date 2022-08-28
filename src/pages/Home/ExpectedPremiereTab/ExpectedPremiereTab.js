import classNames from 'classnames'
import Card from '~/components/Card/Card'
import PropTypes from 'prop-types'
function ExpectedPremiere({ className, data, genres = [] }) {
    return (
        <div className={classNames('content-body block pb-[70px]', { [className]: className })}>
            <div className="container flex flex-row flex-wrap content-center items-center mx-auto pt-[10px]">
                <div className="grid grid-cols-6">
                    {data.slice(6, 12).map((film) => {
                        return (
                            <Card
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
ExpectedPremiere.propTypes = {
    classNames: PropTypes.string,
    data: PropTypes.array,
    genres: PropTypes.array,
}
export default ExpectedPremiere
