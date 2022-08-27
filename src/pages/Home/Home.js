import { useEffect, useState } from 'react'
import './Home.scss'
import images from '~/assets/images'
import Button from '~/components/Button/Button'
import { PrevIcon, NextIcon } from '~/components/Icons'
import SimpleSlider from '~/pages/Home/Slider/Slider'
import Navbar, { NavbarItem } from '~/components/Navbar'
import TvSeriesTab from './TvSeriesTab/TvSeriesTab'
import MovieTab from './MovieTab/MovieTab'
import NewReleases from './NewReleasesTab/NewReleasesTab'
import CartoonsTab from './CartoonsTab/CartoonsTab'
import ExpectedPremiereTab from './ExpectedPremiereTab/ExpectedPremiereTab'
import axios from 'axios'

function Home() {
    const [toggleState, setToggleState] = useState(1)
    const [listFilm, setListFilm] = useState([])
    const [genres, setGenres] = useState()
    //Call Api
    useEffect(() => {}, [])
    const fetchApiMovie = async () => {
        try {
            const result = await axios.get(
                'https://api.themoviedb.org/3/movie/297762/similar?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1',
            )
            setListFilm(result.data.results)
        } catch (error) {
            console.log(error)
        }
    }
    fetchApiMovie()

    const fetchApiGenre = async () => {
        try {
            const result = await axios.get(
                'https://api.themoviedb.org/3/genre/movie/list?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US',
            )
            setGenres(result.data.genres)
        } catch (error) {
            console.log(error)
        }
    }
    fetchApiGenre()
    return (
        <div className="main-movie relative bg-bgd">
            {/* Background Image */}
            <div className="main-image opacity-[0.07] " style={{ backgroundImage: `url(${images.homeBg4})` }}></div>
            {/* Movie content  */}
            <div className="movie-content w-full absolute top-[70px] z-10">
                {/* Title and button */}
                <div
                    className="movie-title container flex flex-row flex-wrap content-center justify-between items-center
                    mx-auto pl-[15px] pr-[15px] "
                >
                    <h1 className="text-4xl text-[white] font-medium leading-[54px] mb-[5px]">
                        NEW ITEMS <span className="font-light">OF THIS SEASON</span>
                    </h1>
                    <div className="btn-slider flex mb-[17px]">
                        <Button
                            className="w-10 outline-0 hover:border-[#ffffff33] "
                            outline
                            small
                            icon={<PrevIcon className="w-6 h-auto fill-[#ffffffb3] hover:fill-[#fff]" />}
                        ></Button>
                        <Button
                            className="w-10 outline-0 hover:border-[#ffffff33] "
                            outline
                            small
                            icon={<NextIcon className="w-6 h-auto fill-[#ffffffb3] hover:fill-[#fff]" />}
                        ></Button>
                    </div>
                </div>
                {/* Slider */}
                <div className="movie-list-wrapper container flex flex-row flex-wrap content-center justify-between items-center mx-auto ">
                    <SimpleSlider data={listFilm} genres={genres} />
                </div>
            </div>

            {/* Content item */}
            {/* New items - Nav tabs */}
            <div className="content-item-wrapper">
                <div className="content-header">
                    <div className=" container flex flex-row flex-wrap content-center items-center mx-auto mt-5 pl-[15px] pr-[15px]">
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
                                    title="NEW RELEASES"
                                />
                                <NavbarItem
                                    activeNewItem
                                    onClick={() => {
                                        setToggleState(2)
                                    }}
                                    fontThin
                                    className={` hover:text-[#fff] h-[50px] mr-[30px] text-[#ffffff80]
                                        ${toggleState === 2 && 'active'} `}
                                    title="MOVIES"
                                />
                                <NavbarItem
                                    activeNewItem
                                    onClick={() => {
                                        setToggleState(3)
                                    }}
                                    fontThin
                                    className={` hover:text-[#fff] h-[50px] mr-[30px] text-[#ffffff80]
                                        ${toggleState === 3 && 'active'} `}
                                    title="TV SERIES"
                                />
                                <NavbarItem
                                    activeNewItem
                                    onClick={() => {
                                        setToggleState(4)
                                    }}
                                    fontThin
                                    className={` hover:text-[#fff] h-[50px] mr-[30px] text-[#ffffff80]
                                        ${toggleState === 4 && 'active'} `}
                                    title="CARTOONS"
                                />
                            </Navbar>
                        </div>
                    </div>
                </div>
                {/* Tab NEW RELEASES */}
                <NewReleases data={listFilm} genres={genres} className={toggleState === 1 ? 'active' : ''} />
                {/* Tab MOVIES */}
                <MovieTab data={listFilm} genres={genres} className={toggleState === 2 ? 'active' : ''} />
                {/*  TV SERIES */}
                <TvSeriesTab data={listFilm} genres={genres} className={toggleState === 3 ? 'active' : ''} />
                {/*  CARTOONS*/}
                <CartoonsTab data={listFilm} genres={genres} className={toggleState === 4 ? 'active' : ''} />
            </div>

            {/* Expected premiere */}
            <div className="content-item-wrapper relative">
                <div className=" container flex flex-row flex-wrap content-center items-center mx-auto pl-[15px] pr-[15px]">
                    <div className="content-head">
                        <h2 className="text-4xl text-[#fff] leading-[100%] mt-[70px] mb-[10px]">Expected premiere</h2>
                    </div>
                </div>
                <ExpectedPremiereTab data={listFilm} genres={genres} />
                <div className=" container flex flex-row flex-wrap content-center justify-center items-center mx-auto pl-[15px] pr-[15px] pb-[70px]">
                    <Button className="mt-[-20px] w-[150px] " primary large>
                        Show more
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Home
