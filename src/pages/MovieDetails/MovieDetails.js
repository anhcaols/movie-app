import { useState } from 'react'
import { Link } from 'react-router-dom'
import images from '~/assets/images'
import { MoreMenuIcon } from '~/components/Icons'
import Image from '~/components/Image/Image'
import '~/pages/Home/Home.scss'
import './MovieDetails.scss'
function MovieDetails({data}) {
    const [toggleDesc, setToggleDesc] = useState(false)
    const handleMoreDesc = () => {
        setToggleDesc(!toggleDesc)
    }
    return (
        <div className="details-wrapper  relative h-[2000px]">
            <div className="image-details " style={{ backgroundImage: `url(${images.homeBg})` }}></div>
            <div className="movie-detail w-full absolute top-0 bg-bgd ">
                <div className="container top-0 flex flex-row flex-wrap items-center mx-auto pl-[15px] pr-[15px]">
                    <h2 className=" z-10 text-4xl text-[#fff] leading-[50px] font-light mb-[30px] mt-[70px]">
                        I Dream in Another Language
                    </h2>
                </div>
                <div className="container top-0 flex flex-row flex-wrap items-center mx-auto pl-[15px] pr-[15px] pb-[70px]">
                    <div className="grid grid-cols-2 gap-[30px] z-10 ">
                        <div className="flex">
                            <div className="img-details w-[210px] flex-shrink-0 mr-[20px]">
                                <Image
                                    className="w-full rounded"
                                    src="	https://image.tmdb.org/t/p/original/75ot83QOkc02vujyzmIbumQCU6Y.jpg
"
                                />
                            </div>
                            <div className="card-details">
                                <div className="flex">
                                    <img className="w-4 mr-1" src={images.star} alt="start" />
                                    <span className="text-[#fff]">{10}</span>
                                    <button className="cursor-default ml-[15px] border border-solid border-[#ffffff29] px-[5px] pt-[5px] pb-[4px] rounded mr-[10px] text-[12px] font-bold text-[#ffffffa6] leading-[100%]">
                                        HD
                                    </button>
                                    <button className="cursor-default border border-solid border-[#ffffff29] px-[5px] pt-[5px] pb-[4px] rounded mr-[10px] text-[12px] font-bold text-[#ffffffa6] leading-[100%]">
                                        16+
                                    </button>
                                </div>
                                <ul className="info-body-detail genre-movie ">
                                    <li>
                                        <span>Genre:</span>{' '}
                                        <Link className="ml-[3px]" to={''}>
                                            Action
                                        </Link>
                                        <Link to={''}>Triler</Link>
                                    </li>
                                    <li>
                                        <span className="mr-[3px]">Release year:</span> 2017
                                    </li>
                                    <li>
                                        <span className="mr-[3px]">Running time:</span> 120 min
                                    </li>
                                    <li>
                                        <span>Country:</span>{' '}
                                        <Link className="ml-[3px]" to={''}>
                                            USA
                                        </Link>
                                    </li>
                                </ul>
                                <div className={`${toggleDesc && 'more'} info-desc-details mt-[13px] mb-0`}>
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters, as opposed to using
                                        'Content here, content here', making it look like readable English. Many desktop
                                        publishing packages and web page editors now use Lorem Ipsum as their default
                                        model text, and a search for 'lorem ipsum' will uncover many web sites still in
                                        their infancy.
                                    </p>
                                </div>
                                <div className="more-desc flex justify-center" onClick={handleMoreDesc}>
                                    <MoreMenuIcon className="w-[22px] cursor-pointer fill-text hover:fill-[#ff55a5]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
