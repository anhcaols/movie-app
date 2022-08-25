import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'
import config from '~/config'
import images from '~/assets/Image'

export default function SimpleSlider() {
    const settings = {
        infinite: true,
        nextArrow: false,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    return (
        <div className="w-full block">
            <Slider {...settings}>
                <div className="movie-item px-[15px]">
                    <Link to={config.routes.detail}>
                        <img
                            className="block rounded w-full object-cover"
                            src="https://dmitryvolkov.me/demo/flixgo2.0/main/img/covers/cover.jpg"
                            alt=""
                        />
                    </Link>
                    <div className="text-[white]">
                        <Link to={config.routes.detail}>
                            {' '}
                            <h3 className="hover:text-primary hover:text-primary text-xl mt-[14px] mb-[3px] leading-[30px] overflow-hidden whitespace-nowrap text-ellipsis ">
                                I Dream in Another Language
                            </h3>
                        </Link>
                        <div className="genre-movie">
                            <Link className="mr-2 text-[14px] font-thin leading-[30px]" to={''}>
                                Action
                            </Link>
                            <Link className="mr-2 text-[14px] font-thin" to={''}>
                                Drama
                            </Link>
                        </div>
                        <div className="flex ">
                            <img className="w-4 mr-1" src={images.star} alt="start" /> <span>7.1</span>
                        </div>
                    </div>
                </div>
                <div className="movie-item px-[15px]">
                    <Link to={config.routes.detail}>
                        <img
                            className="block rounded w-full object-cover"
                            src="https://dmitryvolkov.me/demo/flixgo2.0/main/img/covers/cover.jpg"
                            alt=""
                        />
                    </Link>
                    <div className="text-[white]">
                        <Link to={config.routes.detail}>
                            {' '}
                            <h3 className="hover:text-primary text-xl mt-[14px] mb-[3px] leading-[30px] overflow-hidden whitespace-nowrap text-ellipsis ">
                                Blindspotting
                            </h3>
                        </Link>
                        <div className="genre-movie">
                            <Link className="mr-2 text-[14px] font-thin leading-[30px]" to={''}>
                                Action
                            </Link>
                        </div>
                        <div className="flex ">
                            <img className="w-4 mr-1" src={images.star} alt="start" /> <span>7.1</span>
                        </div>
                    </div>
                </div>
                <div className="movie-item px-[15px]">
                    <Link to={config.routes.detail}>
                        <img
                            className="block rounded w-full object-cover"
                            src="https://dmitryvolkov.me/demo/flixgo2.0/main/img/covers/cover.jpg"
                            alt=""
                        />
                    </Link>
                    <div className="text-[white]">
                        <Link to={config.routes.detail}>
                            {' '}
                            <h3 className="hover:text-primary  text-xl mt-[14px] mb-[3px] leading-[30px] overflow-hidden whitespace-nowrap text-ellipsis ">
                                Blindspotting
                            </h3>
                        </Link>
                        <div className="genre-movie">
                            <Link className="mr-2 text-[14px] font-thin leading-[30px]" to={''}>
                                Action
                            </Link>
                        </div>
                        <div className="flex ">
                            <img className="w-4 mr-1" src={images.star} alt="start" /> <span>7.1</span>
                        </div>
                    </div>
                </div>
                <div className="movie-item px-[15px]">
                    <Link to={config.routes.detail}>
                        <img
                            className="block rounded w-full object-cover"
                            src="https://dmitryvolkov.me/demo/flixgo2.0/main/img/covers/cover.jpg"
                            alt=""
                        />
                    </Link>
                    <div className="text-[white]">
                        <Link to={config.routes.detail}>
                            {' '}
                            <h3 className="hover:text-primary text-xl mt-[14px] mb-[3px] leading-[30px] overflow-hidden whitespace-nowrap text-ellipsis ">
                                Blindspotting
                            </h3>
                        </Link>
                        <div className="genre-movie">
                            <Link className="mr-2 text-[14px] font-thin leading-[30px]" to={''}>
                                Action
                            </Link>
                        </div>
                        <div className="flex ">
                            <img className="w-4 mr-1" src={images.star} alt="start" /> <span>7.1</span>
                        </div>
                    </div>
                </div>
                <div className="movie-item px-[15px]">
                    <Link to={config.routes.detail}>
                        <img
                            className="block rounded w-full object-cover"
                            src="https://dmitryvolkov.me/demo/flixgo2.0/main/img/covers/cover.jpg"
                            alt=""
                        />
                    </Link>
                    <div className="text-[white]">
                        <Link to={config.routes.detail}>
                            {' '}
                            <h3 className="hover:text-primary text-xl mt-[14px] mb-[3px] leading-[30px] overflow-hidden whitespace-nowrap text-ellipsis ">
                                Blindspotting
                            </h3>
                        </Link>
                        <div className="genre-movie">
                            <Link className="mr-2 text-[14px] font-thin leading-[30px]" to={''}>
                                Action
                            </Link>
                        </div>
                        <div className="flex ">
                            <img className="w-4 mr-1" src={images.star} alt="start" /> <span>7.1</span>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}
