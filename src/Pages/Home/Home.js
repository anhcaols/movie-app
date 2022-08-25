import './Home.scss'
import images from '~/assets/Image'
import Button from '~/components/Button/Button'
import { PrevIcon, NextIcon } from '~/components/Icons'
import SimpleSlider from '~/components/Slider/Slider'
function Home() {
    return (
        <div className="relative bg-bgd">
            <div
                className="main-image opacity-[0.07] bg-bgd"
                style={{ backgroundImage: `url(${images.homeBg4})` }}
            ></div>
            <div className="list-film w-full absolute top-[70px]">
                <div
                    className="container flex flex-row flex-wrap content-center justify-between items-center
                    mx-auto pl-[15px] pr-[15px] "
                >
                    <h1 className="text-4xl text-[white] font-medium leading-[54px] mb-[17px]">
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

                <div className=" container flex flex-row flex-wrap content-center justify-between items-center mx-auto mt-5 ">
                    <SimpleSlider />
                </div>
            </div>
        </div>
    )
}

export default Home
