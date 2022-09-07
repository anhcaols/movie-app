import { useEffect, useState } from 'react'
import { useDebounce } from '~/hooks'

function Search() {
    const [searchResult, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const handleOnchange = (e) => {
        const searchValue = e.target.value
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        }
    }
    const debouncedValue = useDebounce(searchValue, 500)
    const fetchApi = () => {
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=8e6ce93930533e9735da28b27d751706&language=en-US&query=${debouncedValue}&page=1&include_adult=false`,
        )
            .then((res) => res.json())
            .then((res) => setSearchResult(res.results))
    }
    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([])
            return
        }
        fetchApi()
    }, [debouncedValue])
    return (
        <>
            <form className="w-full flex h-[60px] items-center justify-between bg-[#28282d]">
                <input
                    onChange={handleOnchange}
                    className="bg-[#28282d] text-[white] outline-none placeholder:text-[#8e8e91]
                     h-full px-5 text-[15px] leading-[30px] w-full"
                    type="text"
                    placeholder="I'm looking for..."
                />
            </form>
        </>
    )
}

export default Search
