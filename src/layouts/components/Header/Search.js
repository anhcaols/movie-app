import Button from '~/components/Button/Button'

function Search() {
    return (
        <>
            <form className="w-full flex h-[60px] items-center justify-between bg-[#28282d]">
                <input
                    className="bg-[#28282d] text-[white] outline-none placeholder:text-[#8e8e91]
                     h-full px-5 text-[15px] leading-[30px] w-full"
                    type="text"
                    placeholder="I'm looking for..."
                />
               <div className='pr-5'>
                    <Button primary small>
                        Search
                    </Button>
               </div>
            </form>
        </>
    )
}

export default Search
