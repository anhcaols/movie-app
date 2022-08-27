import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../Home.scss'
import Card from '~/components/Card/Card'
function SimpleSlider({ data, genres = [] }) {
    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    arrows: false,
                },
            },
        ],
    }
    return (
        <div className="w-full block">
            <Slider {...settings}>
                {data.map((film) => {
                    return (
                        <Card
                            key={film.id}
                            genresName={film.genre_ids.map((item_id) => {
                                let nameGenre
                                genres.forEach((item_id_name) => {
                                    if (item_id === item_id_name.id) {
                                        nameGenre = item_id_name.name
                                    }
                                })
                                return nameGenre
                            })}
                            data={film}
                        />
                    )
                })}
            </Slider>
        </div>
    )
}
export default SimpleSlider
