import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import images from '~/assets/images'
import CardImage from './CardImage'
import config from '~/config'

function Card({ data = {}, genresName }) {
    return (
        <div className="movie-item px-[15px] mt-[30px] flex flex-col">
            <CardImage
                onClick={{}}
                src={` https://image.tmdb.org/t/p/original${data.poster_path}`}
                alt={data.name}
                to={config.routes.detail}
            />
            <div className="text-[white]">
                <Link to={''}>
                    <h3 className="hover:text-primary hover:text-primary text-xl mt-[14px] mb-[3px] leading-[30px] overflow-hidden whitespace-nowrap text-ellipsis ">
                        {data.title}
                    </h3>
                </Link>
                <div className="genre-movie">
                    {genresName !== undefined &&
                        genresName.slice(0, 2).map((genre, index) => {
                            return (
                                <Link key={index} className="mr-2 text-[14px] font-thin leading-[30px]" to={''}>
                                    {genre}
                                </Link>
                            )
                        })}
                </div>
                <div className="flex ">
                    <img className="w-4 mr-1" src={images.star} alt="start" /> <span>{data.vote_count}</span>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    data: PropTypes.object,
}
export default Card
