import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import images from '~/assets/images'
import CardImage from '~/components/Card/CardImage'
import config from '~/config'

function InfoMovie({ data, genresName }) {
    return (
        <div className="info-item flex overflow-hidden">
            <CardImage
                className="flex-shrink-0 w-[160px] h-full"
                to={`${config.routes.detail}/${data.id}`}
                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                alt={data.name}
            />
            <div className="info-body ml-[20px]">
                <Link className="text-[20px] text-[#fff]" to={'/'}>
                    <h4 className="hover:text-primary  mt-[-6px] info-name overflow-hidden whitespace-nowrap text-ellipsis">
                        {data.title}
                    </h4>
                </Link>
                <div className="genre-movie">
                    {genresName !== undefined &&
                        genresName.slice(0, 1).map((genre, index) => {
                            return (
                                <Link key={index} className="mr-2 text-[14px] font-thin leading-[30px]" to={''}>
                                    {genre}
                                </Link>
                            )
                        })}
                    <div className="flex items-center mt-[5px]">
                        <img className="w-4 mr-1" src={images.star} alt="start" />
                        <span className="text-[#fff]">{data.vote_average.toFixed(2)}</span>
                        <button className="cursor-default ml-[15px] border border-solid border-[#ffffff29] px-[5px] pt-[5px] pb-[4px] rounded mr-[10px] text-[12px] font-bold text-[#ffffffa6] leading-[100%]">
                            HD
                        </button>
                        <button className="cursor-default border border-solid border-[#ffffff29] px-[5px] pt-[5px] pb-[4px] rounded mr-[10px] text-[12px] font-bold text-[#ffffffa6] leading-[100%]">
                            16+
                        </button>
                    </div>
                    <div className="info-desc mt-[20px]">
                        <p>{data.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

InfoMovie.propTypes = {
    data: PropTypes.object.isRequired,
    genresName: PropTypes.array,
}
export default InfoMovie
