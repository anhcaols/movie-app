import classNames from 'classnames'
import { useState } from 'react'
import PropTypes from 'prop-types'

import Card from '~/components/Card/Card'
import Button from '~/components/Button/Button'

function ExpectedPremiereTab({ className, data, genres = [] }) {
    const [countMovie, setCountMovie] = useState(6)
    const [textBtn, setTextBtn] = useState('See More')

    let dataRender = data.slice(0, countMovie)
    //handle Events
    const handleMoreBtn = () => {
        if (countMovie < data.length - 1) {
            setCountMovie(countMovie + 6)
        }
        if (textBtn !== 'See More') {
            setCountMovie(countMovie - 6)
        }
        if (countMovie >= data.length - 6) {
            setTextBtn('See Less')
        } else {
            setTextBtn('See More')
        }
    }
    return (
        <div>
            <div className={classNames('content-body block pb-[70px]', { [className]: className })}>
                <div className="container flex flex-row flex-wrap content-center items-center mx-auto pt-[10px]">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                        {dataRender.map((film) => {
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
            <div className=" container flex flex-row flex-wrap content-center justify-center items-center mx-auto px-[15px] pb-[50px] md:pb-[70px]">
                <Button onClick={handleMoreBtn} className="mt-[-20px] w-[150px] " primary large>
                    {textBtn}
                </Button>
            </div>
        </div>
    )
}
ExpectedPremiereTab.propTypes = {
    classNames: PropTypes.string,
    data: PropTypes.array,
    genres: PropTypes.array,
}
export default ExpectedPremiereTab
