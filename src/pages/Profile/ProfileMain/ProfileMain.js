import PropTypes from 'prop-types'

import Image from '~/components/Image/Image'
import Table from './Table/Table'
import classNames from 'classnames'

function ProfileMain({ className }) {
    return (
        <div className={classNames('profile-main profile-tab', { [className]: className })}>
            <div className="container flex flex-row flex-wrap content-center pt-[20px] xl:pt-[40px] items-center mx-auto pl-[15px] pr-[15px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full gap-[20px] xl:gap-[30px] pb-[20px] xl:pb-[30px]">
                    <div className="stats relative overflow-hidden h-[110px] p-5 rounded bg-[#28282d] w-full">
                        <p className="text-[14px] text-text font-normal font-openSans mb-[10px]">Premium plan</p>
                        <p className="text-[#fff] font-normal leading-[100%] text-[36px]">$19.99</p>
                        <Image
                            className="w-[36px] absolute bottom-[20px] right-[20px]"
                            src="https://dmitryvolkov.me/demo/flixgo2.0/main/img/credit-card.svg"
                            alt="img"
                        />
                    </div>
                    <div className="stats relative overflow-hidden h-[110px] p-5 rounded bg-[#28282d] w-full">
                        <p className="text-[14px] text-text font-normal font-openSans mb-[10px]">Premium plan</p>
                        <p className="text-[#fff] font-normal leading-[100%] text-[36px]">1172</p>
                        <Image
                            className="w-[36px] absolute bottom-[20px] right-[20px]"
                            src="https://dmitryvolkov.me/demo/flixgo2.0/main/img/film.svg"
                            alt="img"
                        />
                    </div>
                    <div className="stats relative overflow-hidden h-[110px] p-5 rounded bg-[#28282d] w-full">
                        <p className="text-[14px] text-text font-normal font-openSans mb-[10px]">Premium plan</p>
                        <p className="text-[#fff] font-normal leading-[100%] text-[36px]">2573</p>
                        <Image
                            className="w-[36px] absolute bottom-[20px] right-[20px]"
                            src="https://dmitryvolkov.me/demo/flixgo2.0/main/img/comments.svg"
                            alt="img"
                        />
                    </div>
                    <div className="stats relative overflow-hidden h-[110px] p-5 rounded bg-[#28282d] w-full">
                        <p className="text-[14px] text-text font-normal font-openSans mb-[10px]">Premium plan</p>
                        <p className="text-[#fff] font-normal leading-[100%] text-[36px]">1021</p>
                        <Image
                            className="w-[36px] absolute bottom-[20px] right-[20px]"
                            src="https://dmitryvolkov.me/demo/flixgo2.0/main/img/star-half-alt.svg"
                            alt="img"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-[30px] mb-[70px]">
                    <Table
                        heading="Movies for you"
                        category="CATEGORY"
                        title="TITLE"
                        src="https://dmitryvolkov.me/demo/flixgo2.0/main/img/film.svg"
                    />
                    <Table
                        heading="Latest reviews"
                        author="AUTHOR"
                        item="ITEM"
                        src="https://dmitryvolkov.me/demo/flixgo2.0/main/img/star-half-alt.svg"
                    />
                </div>
            </div>
        </div>
    )
}

ProfileMain.propTypes = {
    classNames: PropTypes.string,
}
export default ProfileMain
