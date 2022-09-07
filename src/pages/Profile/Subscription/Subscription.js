import classNames from 'classnames'
import PropTypes from 'prop-types'

import Button from '~/components/Button/Button'

function Subscription({ className }) {
    return (
        <div className={classNames('profile-tab', { [className]: className })}>
            <div className=" container flex flex-row flex-wrap content-center items-center mx-auto pl-[15px] pr-[15px]">
                <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-[30px] mt-[20px] mb-[50px] xl:mt-[40px] xl:mb-[70px]">
                    <div className="profile-price relative overflow-hidden rounded  p-[20px] bg-[#28282d]">
                        <div className="flex justify-between text-[26px] font-normal mb-[5px] text-[#fff] ">
                            <h3>Basic</h3>
                            <h4 className="profile-text__price">Free</h4>
                        </div>
                        <ul>
                            <li className="profile-item-text flex items-center mt-[15px] text-[16px] text-text h-[45px] pl-[15px] relative font-openSans border-b-[1px] border-solid border-[#ffffff0d]">
                                7 days
                            </li>
                            <li className="profile-item-text flex items-center text-[16px] text-text h-[45px] pl-[15px] relative font-openSans border-b-[1px] border-solid border-[#ffffff0d]">
                                720p Resolution
                            </li>
                            <li className="profile-item-text flex items-center text-[16px] text-text h-[45px] pl-[15px] relative font-openSans border-b-[1px] border-solid border-[#ffffff0d]">
                                Limited Availability
                            </li>
                            <li className="profile-item-text flex items-center text-[16px] text-text h-[45px] pl-[15px] relative font-openSans border-b-[1px] border-solid border-[#ffffff0d]">
                                Desktop Only
                            </li>
                            <li className="profile-item-text flex items-center mb-[19px] text-[16px] text-text h-[45px] pl-[15px] relative font-openSans">
                                Limited Support
                            </li>
                        </ul>
                        <Button className="w-full" primary large>
                            Choose plan
                        </Button>
                    </div>

                    <div className="profile-price relative overflow-hidden rounded p-[20px] bg-[#28282d]">
                        <div className="flex justify-between text-[26px] font-normal mb-[5px] text-[#fff] ">
                            <h3>Premium</h3>
                            <h4 className="profile-text__price">$19.99</h4>
                        </div>
                        <ul>
                            <li className="profile-item-text flex items-center mt-[15px] text-[16px] text-text h-[45px] pl-[15px] relative font-openSans border-b-[1px] border-solid border-[#ffffff0d]">
                                1 Month
                            </li>
                            <li className="profile-item-text flex items-center text-[16px] text-text h-[45px] pl-[15px] relative font-openSans border-b-[1px] border-solid border-[#ffffff0d]">
                                Full HD
                            </li>
                            <li className="profile-item-text flex items-center text-[16px] text-text h-[45px] pl-[15px] relative font-openSans border-b-[1px] border-solid border-[#ffffff0d]">
                                Limited Availability
                            </li>
                            <li className="profile-item-text flex items-center text-[16px] text-text h-[45px] pl-[15px] relative font-openSans border-b-[1px] border-solid border-[#ffffff0d]">
                                TV & Desktop
                            </li>
                            <li className="profile-item-text flex items-center mb-[19px] text-[16px] text-text h-[45px] pl-[15px] relative font-openSans">
                                24/7 Support
                            </li>
                        </ul>
                        <Button className="w-full" primary large>
                            Choose plan
                        </Button>
                    </div>

                    <div className="profile-price relative overflow-hidden rounded p-[20px] bg-[#28282d]">
                        <div className="flex justify-between text-[26px] font-normal mb-[5px] text-[#fff] ">
                            <h3>Cinematic</h3>
                            <h4 className="profile-text__price">$39.99</h4>
                        </div>
                        <ul>
                            <li className="profile-item-text flex items-center mt-[15px] text-[16px] text-text h-[45px] pl-[15px] relative font-openSans border-b-[1px] border-solid border-[#ffffff0d]">
                                2 Months
                            </li>
                            <li className="profile-item-text flex items-center text-[16px] text-text h-[45px] pl-[15px] relative font-openSans border-b-[1px] border-solid border-[#ffffff0d]">
                                Ultra HD
                            </li>
                            <li className="profile-item-text flex items-center text-[16px] text-text h-[45px] pl-[15px] relative font-openSans border-b-[1px] border-solid border-[#ffffff0d]">
                                Limited Availability
                            </li>
                            <li className="profile-item-text flex items-center text-[16px] text-text h-[45px] pl-[15px] relative font-openSans border-b-[1px] border-solid border-[#ffffff0d]">
                                Any Device
                            </li>
                            <li className="profile-item-text flex items-center mb-[19px] text-[16px] text-text h-[45px] pl-[15px] relative font-openSans">
                                24/7 Support
                            </li>
                        </ul>
                        <Button className="w-full" primary large>
                            Choose plan
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

Subscription.propTypes = {
    classNames: PropTypes.string,
}
export default Subscription
