import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import YouTube from 'react-youtube'

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
import * as movieDetailService from '~/services/movieDetailService'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function MovieDetails() {
    const [listFilm, setListFilm] = useState([])
    const [genres, setGenres] = useState([])
    const [details, setDetails] = useState({})
    const [toggleDesc, setToggleDesc] = useState(false)
    const [toggleStateTab, setToggleStateTab] = useState(false)
    const [toggleState, setToggleState] = useState(1)
    const [keyYoutube, setKeyYoutube] = useState('')

    const params = useParams()
    let idMovie = params.id

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    //Call Api
    useEffect(() => {
        // Api Movie Details
        const fetchApiDetail = async () => {
            try {
                const result = await movieDetailService.movieDetail(idMovie)
                setDetails(result)
                const video = result.videos.results
                    // eslint-disable-next-line array-callback-return
                    .map((item) => {
                        if (item.type === 'Trailer') return item.key
                    })
                    .filter((item) => {
                        return item !== undefined
                    })
                setKeyYoutube(video[0])
            } catch (error) {
                console.log(error)
            }
        }
        fetchApiDetail()
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

    //handle Events
    const handleToggleTab = () => {
        setToggleStateTab(!toggleStateTab)
    }
    const handleMoreDesc = () => {
        setToggleDesc(!toggleDesc)
    }
    return (
        <div className="details-wrapper">
            <div className="image-details " style={{ backgroundImage: `url(${images.homeBg})` }}></div>
            <div className="movie-detail w-full top-0 bg-bgd py-[50px] xl:py-[70px]">
                <div className="container top-0 flex flex-row flex-wrap items-center mx-auto pl-[15px] pr-[15px]">
                    <h2 className=" z-10 text-[30px] xl:text-4xl leading-[42px] xl:leading-[50px] text-[#fff] font-light mb-[30px] ">
                        {details.title}
                    </h2>
                </div>
                <div className="container top-0 flex flex-row flex-wrap items-center mx-auto pl-[15px] pr-[15px] ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] z-10 ">
                        <div className="flex flex-col md:flex-row">
                            <div className="img-details w-[250px] xl:w-[210px] flex-shrink-0 mr-[20px]">
                                {details.poster_path && (
                                    <Image
                                        className="w-full rounded"
                                        src={` https://image.tmdb.org/t/p/original${details.poster_path}`}
                                    />
                                )}
                            </div>
                            <div className="card-details mt-[20px] xl:mt-0">
                                <div className="flex">
                                    <img className="w-4 mr-1" src={images.star} alt="start" />
                                    <span className="text-[#fff]">
                                        {details.vote_average !== undefined && details.vote_average.toFixed(2)}
                                    </span>
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
                                        {details.genres !== undefined &&
                                            details.genres.slice(0, 2).map((genre) => (
                                                <Link key={genre.id} className="ml-[3px]" to={''}>
                                                    {genre.name}
                                                </Link>
                                            ))}
                                    </li>
                                    <li>
                                        <span className="mr-[3px]">Release year:</span>{' '}
                                        {details.release_date !== undefined && details.release_date.split('-')[0]}
                                    </li>
                                    <li>
                                        <span className="mr-[3px]">Running time:</span> {details.runtime} min
                                    </li>
                                    <li>
                                        <span>Country:</span>{' '}
                                        {details.production_countries !== undefined &&
                                            details.production_countries.map((country, index) => (
                                                <Link key={index} className="ml-[3px]" to={''}>
                                                    {country.name}
                                                </Link>
                                            ))}
                                    </li>
                                </ul>
                                <div className={`${toggleDesc && 'more'} info-desc-details mt-[13px] mb-0`}>
                                    <p>{details.overview}</p>
                                </div>
                                <div className="hidden md:flex more-desc flex justify-center" onClick={handleMoreDesc}>
                                    <MoreMenuIcon className="w-[22px] cursor-pointer fill-text hover:fill-[#ff55a5]" />
                                </div>
                            </div>
                        </div>
                        <div className="video-movie relative">
                            <YouTube videoId={keyYoutube} className="custom-video" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-item-wrapper">
                <div className="content-header">
                    <div className=" container flex flex-row flex-wrap content-center items-center mx-auto pl-[15px] pr-[15px]">
                        <div className="content-head">
                            <h2 className="text-4xl text-[#fff] leading-[100%] mt-[25px] mb-[10px]">New items</h2>
                            <div className="flex items-center">
                                <p
                                    onClick={handleToggleTab}
                                    className="title-nav-tab flex items-center md:hidden text-[#fff] h-[50px]"
                                >
                                    {(toggleState === 1 && 'COMMENTS') || (toggleState === 2 && 'REVIEWS')}
                                </p>
                                <span
                                    onClick={handleToggleTab}
                                    className={`toggle-nav-tabs block w-4 h-4 relative ${
                                        toggleStateTab ? 'active' : ''
                                    } `}
                                ></span>
                            </div>
                            <div className="details-content-tabs">
                                <Navbar className={`${toggleStateTab ? 'active' : ''} ml-0`}>
                                    <NavbarItem
                                        activeNewItem
                                        onClick={() => {
                                            setToggleState(1)
                                            setToggleStateTab(false)
                                        }}
                                        fontThin
                                        className={`hover:text-[#fff] h-10 md:h-[50px] mr-[30px] text-[#ffffff80]
                                            ${toggleState === 1 && 'active custom-nav'} `}
                                        title="COMMENTS"
                                    />
                                    <NavbarItem
                                        activeNewItem
                                        onClick={() => {
                                            setToggleState(2)
                                            setToggleStateTab(false)
                                        }}
                                        fontThin
                                        className={`hover:text-[#fff] h-10 md:h-[50px] mr-[30px] text-[#ffffff80]
                                            ${toggleState === 2 && 'active custom-nav'} `}
                                        title="REVIEWS"
                                    />
                                </Navbar>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-[70px] bg-bgd">
                    <div className={'comment-wrapper bg-bgd'}>
                        <div className="container flex flex-row flex-wrap content-center items-center mx-auto pt-[10px]">
                            <div className="flex flex-col lg:flex-row ">
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
