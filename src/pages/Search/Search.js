import { useEffect, useRef, useState } from 'react'
import Button from '~/components/Button/Button'
import Card from '~/components/Card/Card'
import { useDebounce } from '~/hooks'
import './Search.scss'

function Search() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [searchResult, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [moreBtn, setMoreBtn] = useState(false)
    const [countMovie, setCountMovie] = useState(8)
    const [textBtn, setTextBtn] = useState('See More')

    const searchContainer = useRef()
    const searchImage = useRef()
    const moreBtnRef = useRef()

    // Call Api
    const debouncedValue = useDebounce(searchValue, 500)
    useEffect(() => {
        const fetchApi = () => {
            fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=8e6ce93930533e9735da28b27d751706&language=en-US&query=${debouncedValue}&page=1&include_adult=false`,
            )
                .then((res) => res.json())
                .then((res) => {
                    setSearchResult(res.results)
                    setMoreBtn(true)
                })
        }
        if (!debouncedValue.trim()) {
            setSearchResult([])
            setMoreBtn(false)

            return
        }
        fetchApi()
    }, [debouncedValue])

    // results search
    let data = searchResult.slice(0, countMovie)

    // handle Event
    const handleOnchange = (e) => {
        const searchValue = e.target.value
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
            setCountMovie(8)
        }
    }
    const handleMoreBtn = () => {
        if (countMovie < searchResult.length - 3) {
            setCountMovie(countMovie + 4)
        }
        if (textBtn !== 'See More') {
            setCountMovie(countMovie - 4)
        }
        if (countMovie >= searchResult.length - 4) {
            setTextBtn('See Less')
        } else {
            setTextBtn('See More')
        }
    }
    return (
        <>
            <div className="header-search">
                <div className="container flex flex-row items-center mx-auto bg-orange-300 pl-[15px] pr-[15px] ">
                    <form className="w-full flex h-[60px] items-center justify-between bg-[#28282d]">
                        <input
                            onChange={handleOnchange}
                            className="bg-[#28282d] text-[white] outline-none placeholder:text-[#8e8e91]
                            h-full px-5 text-[15px] leading-[30px] w-full"
                            type="text"
                            placeholder="I'm looking for..."
                        />
                    </form>
                </div>
            </div>

            <div className="search-wrapper ">
                <div
                    ref={searchImage}
                    className="search-image relative"
                    style={{
                        backgroundImage: `url(https://dmitryvolkov.me/demo/flixgo2.0/main/img/section/section.jpg)`,
                    }}
                >
                    <div className="search-content flex justify-center">
                        <div
                            ref={searchContainer}
                            className="container z-10 my-[70px] opacity-1 flex flex-row flex-wrap items-center mx-auto px-[15px]"
                        >
                            <div className="grid grid-cols-2 xl:grid-cols-4">
                                {data.map((film) => {
                                    return <Card key={film.id} data={film} />
                                })}
                            </div>
                            {moreBtn && (
                                <div className=" container flex flex-row flex-wrap content-center justify-center items-center mx-auto px-[15px]">
                                    <Button
                                        ref={moreBtnRef}
                                        onClick={handleMoreBtn}
                                        className="mt-[50px] w-[150px] "
                                        primary
                                        large
                                    >
                                        {textBtn}
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
