import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import images from '~/assets/images'
import CardImage from '~/components/Card/CardImage'
function InfoMovie({ data }) {
    return (
        <div className="info-item flex overflow-hidden">
            <CardImage
                className="flex-shrink-0 w-[160px] h-full"
                to={'/'}
                src={` https://image.tmdb.org/t/p/original${data.poster_path}`}
                alt={data.name}
            />
            <div className="info-body ml-[20px]">
                <Link className="text-[20px] text-[#fff]" to={'/'}>
                    <h4 className="hover:text-primary hover:text-primary mt-[-6px] info-name overflow-hidden whitespace-nowrap text-ellipsis">
                        {/* I Dream in Another Language */}
                        {data.title}
                    </h4>
                </Link>
                <div className="genre-movie">
                    <Link className="mr-2 text-[14px] font-thin leading-[30px]" to={''}>
                        {/* {data.genre_ids[0]} */}Action
                    </Link>
                    <Link className="mr-2 text-[14px] font-thin" to={''}>
                        {/* {data.genre_ids[1]} */}
                    </Link>
                    <div className="flex items-center mt-[5px]">
                        <img className="w-4 mr-1" src={images.star} alt="start" />
                        <span className="text-[#fff]">{data.vote_count}</span>
                        <button className="cursor-default ml-[15px] border border-solid border-[#ffffff29] px-[5px] pt-[5px] pb-[4px] rounded mr-[10px] text-[12px] font-bold text-[#ffffffa6] leading-[100%]">
                            HD
                        </button>
                        <button className="cursor-default border border-solid border-[#ffffff29] px-[5px] pt-[5px] pb-[4px] rounded mr-[10px] text-[12px] font-bold text-[#ffffffa6] leading-[100%]">
                            16+
                        </button>
                    </div>
                    <div className="info-desc mt-[20px]">
                        <p>
                            {data.overview}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

InfoMovie.propTypes = {
    data: PropTypes.object.isRequired,
}
export default InfoMovie
