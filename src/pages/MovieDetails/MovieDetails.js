import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import images from '~/assets/images'
import { MoreMenuIcon } from '~/components/Icons'
import Image from '~/components/Image/Image'
import Navbar, { NavbarItem } from '~/components/Navbar'
import CommentTab from './CommentTab/CommentTab'
import ReviewTab from './ReviewTab/ReviewTab'
import './MovieDetails.scss'
import Card from '~/components/Card/Card'
import * as movieService from '~/services/movieService'
import * as genresService from '~/services/genresService'
function MovieDetails() {
    const [listFilm, setListFilm] = useState([])
    const [toggleState, setToggleState] = useState(1)
    const [toggleDesc, setToggleDesc] = useState(false)
    const [genres, setGenres] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    //Call Api
    useEffect(() => {
        //Api Movie
        const fetchApiMovie = async () => {
            try {
                const result = await movieService.movie()
                setListFilm(result)
            } catch (error) {
                console.log(error)
            }
        }
        fetchApiMovie()
        // Api Genre Movie
        const fetchApiGenre = async () => {
            try {
                const result = await genresService.genres()
                setGenres(result)
            } catch (error) {
                console.log(error)
            }
        }
        fetchApiGenre()
    }, [])
    const handleMoreDesc = () => {
        setToggleDesc(!toggleDesc)
    }
    return (
        <div className="details-wrapper  relative">
            <div className="image-details " style={{ backgroundImage: `url(${images.homeBg})` }}></div>
            <div className="movie-detail w-full top-0 bg-bgd ">
                <div className="container top-0 flex flex-row flex-wrap items-center mx-auto pl-[15px] pr-[15px]">
                    <h2 className=" z-10 text-4xl text-[#fff] leading-[50px] font-light mb-[30px] mt-[70px]">
                        The Batman vs. Dracula
                    </h2>
                </div>
                <div className="container top-0 flex flex-row flex-wrap items-center mx-auto pl-[15px] pr-[15px] pb-[70px]">
                    <div className="grid grid-cols-2 gap-[30px] z-10 ">
                        <div className="flex">
                            <div className="img-details w-[210px] flex-shrink-0 mr-[20px]">
                                <Image
                                    className="w-full rounded"
                                    src="https://image.tmdb.org/t/p/original/dBysIm8mEhvlemR5xeWUcE0P4TN.jpg"
                                />
                            </div>
                            <div className="card-details">
                                <div className="flex">
                                    <img className="w-4 mr-1" src={images.star} alt="start" />
                                    <span className="text-[#fff]">{6.963}</span>
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
                                        <Link to={''}>Animation</Link>
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
                        <div className="video-movie relative">
                            <video
                                className="z-10"
                                src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                                controls
                                poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-item-wrapper">
                <div className="content-header">
                    <div className=" container flex flex-row flex-wrap content-center items-center mx-auto pl-[15px] pr-[15px]">
                        <div className="content-head">
                            <h2 className="text-4xl text-[#fff] leading-[100%] mt-[25px] mb-[10px]">New items</h2>
                            <Navbar className="ml-0">
                                <NavbarItem
                                    activeNewItem
                                    onClick={() => {
                                        setToggleState(1)
                                    }}
                                    fontThin
                                    className={`hover:text-[#fff] h-[50px] mr-[30px] text-[#ffffff80]
                                        ${toggleState === 1 && 'active'} `}
                                    title="COMMENTS"
                                />
                                <NavbarItem
                                    activeNewItem
                                    onClick={() => {
                                        setToggleState(2)
                                    }}
                                    fontThin
                                    className={`hover:text-[#fff] h-[50px] mr-[30px] text-[#ffffff80]
                                        ${toggleState === 2 && 'active'} `}
                                    title="REVIEWS"
                                />
                            </Navbar>
                        </div>
                    </div>
                </div>
                <div className="pb-[70px] bg-bgd">
                    <div className={'comment-wrapper bg-bgd'}>
                        <div className="container flex flex-row flex-wrap content-center items-center mx-auto pt-[10px]">
                            <div className="flex flex-col xl:flex-row ">
                                <CommentTab className={toggleState === 1 ? 'active' : ''} />
                                <ReviewTab className={toggleState === 2 ? 'active' : ''} />
                                <div className="w-[100%] lg:w-[33.33333%]">
                                    <div className="content-head px-[15px]">
                                        <h2 className="text-[30px] font-extralight text-[#fff] leading-[100%] mt-[30px] ">
                                            You may also like...
                                        </h2>
                                    </div>
                                    <div className=" grid grid-cols-2 ">
                                        {listFilm.slice(0, 4).map((film) => {
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
                        </div>
                    </div>
                    {/* <CommentTab /> */}
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
