import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'
import config from '~/config'
import images from '~/assets/images'
import '../Home.scss'
import { PlayIcon } from '~/components/Icons'
import Card from '~/components/Card/Card'
import axios from 'axios'
function SimpleSlider() {
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
    const [listFilm, setListFilm] = useState([])

    //Call Api
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await axios.get(
                    'https://api.themoviedb.org/3/movie/297762/similar?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1',
                )
                setListFilm(result.data.results)
            } catch (error) {
                console.log(error)
            }
        }
        fetchApi()
    }, [])

    return (
        <div className="w-full block">
            <Slider {...settings}>
                {listFilm.map((film) => {
                    return (
                        <Card
                            key={film.id}
                            toDetail={config.routes.detail}
                            toGenre={config.routes.home}
                            // img={` https://image.tmdb.org/t/p/original${film.poster_path}`}
                            // name={film.title}
                            // genre={['Action']}
                            // rate={film.vote_count}
                            data={film}
                        />
                    )
                })}
            </Slider>
        </div>
    )
}
export default SimpleSlider
