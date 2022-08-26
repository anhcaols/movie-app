import { useState } from 'react'
import './Home.scss'
import images from '~/assets/images'
import Button from '~/components/Button/Button'
import { PrevIcon, NextIcon } from '~/components/Icons'
import SimpleSlider from '~/pages/Home/Slider/Slider'
import Navbar, { NavbarItem } from '~/components/Navbar'
import TvSeriesTab from './TvSeriesTab/TvSeriesTab'
import MovieTab from './MovieTab/MovieTab'
import NewReleases from './NewReleases/NewReleases'
import CartoonsTab from './CartoonsTab/CartoonsTab'
import ExpectedPremiere from './ExpectedPremiere/ExpectedPremiere'

function Home() {
    const [toggleState, setToggleState] = useState(1)
    return (
        <div className="main-movie relative bg-bgd">
            {/* Background Image */}
            <div className="main-image opacity-[0.07] " style={{ backgroundImage: `url(${images.homeBg4})` }}></div>
            {/* Movie content  */}
            <div className="movie-content w-full absolute top-[70px] ">
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
                    <SimpleSlider />
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
                <NewReleases className={toggleState === 1 ? 'active' : ''} />
                {/* Tab MOVIES */}
                <MovieTab className={toggleState === 2 ? 'active' : ''} />
                {/*  TV SERIES */}
                <TvSeriesTab className={toggleState === 3 ? 'active' : ''} />
                {/*  CARTOONS*/}
                <CartoonsTab className={toggleState === 4 ? 'active' : ''} />
            </div>

            {/* Expected premiere */}
            <div className="content-item-wrapper relative">
                <div className=" container flex flex-row flex-wrap content-center items-center mx-auto pl-[15px] pr-[15px]">
                    <div className="content-head">
                        <h2 className="text-4xl text-[#fff] leading-[100%] mt-[70px] mb-[10px]">Expected premiere</h2>
                    </div>
                </div>
                <ExpectedPremiere />
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
