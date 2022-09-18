import { Link } from 'react-router-dom'

import { FacebookIcon, InstagramIcon, TwitterIcon, VkIcon } from '~/components/Icons'
import Subnav from '~/components/Navbar/Subnav/Subnav'
import SubnavItem from '~/components/Navbar/Subnav/SubnavItem'
import images from '~/assets/images'
import '~/pages/Home/Home.scss'

function Footer() {
    return (
        <footer className="footer content-head relative bg-bgd">
            <div className=" container flex flex-row flex-wrap content-center items-center mx-auto pl-[15px] pr-[15px]">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px] xl:gap-[30px] my-[40px] xl:my-[70px]">
                    <div className="download">
                        <Subnav>
                            <SubnavItem
                                fontBase
                                className=" hover:text-[#fff] cursor-default text-[#fff] font-medium leading-8"
                                title="Download Our App"
                                to={'/'}
                            />
                            <div className="flex items-center md:block">
                                <SubnavItem
                                    classNameImg="w-[140px] my-[15px] mr-[15px] md:mr-[0]"
                                    img={images.appStore}
                                    to={'/'}
                                />
                                <SubnavItem classNameImg="w-[140px]" img={images.googlePlay} to={'/'} />
                            </div>
                        </Subnav>
                    </div>
                    <div className="resources">
                        <Subnav>
                            <SubnavItem
                                fontBase
                                className="mb-2 hover:text-[#fff] cursor-default text-[#fff] font-medium leading-8"
                                title="Resources"
                                to={'/'}
                            />
                            <SubnavItem className="leading-8 text-[#ffffff99]" title="About Us" to={'/'} />
                            <SubnavItem className="leading-8 text-[#ffffff99]" title="Pricing Plan" to={'/'} />
                            <SubnavItem className="leading-8 text-[#ffffff99]" title="Help Center" to={'/'} />
                        </Subnav>
                    </div>
                    <div className="legal">
                        <Subnav>
                            <SubnavItem
                                fontBase
                                className="mb-2 hover:text-[#fff] cursor-default text-[#fff] font-medium leading-8"
                                title="Legal"
                                to={'/'}
                            />
                            <SubnavItem className="leading-8 text-[#ffffff99]" title="Terms of Use" to={'/'} />
                            <SubnavItem className="leading-8 text-[#ffffff99]" title="Privacy Policy" to={'/'} />
                            <SubnavItem className="leading-8 text-[#ffffff99]" title="Security" to={'/'} />
                        </Subnav>
                    </div>
                    <div className="Contact">
                        <Subnav>
                            <SubnavItem
                                fontBase
                                className="mb-2 hover:text-[#fff] cursor-default text-[#fff] font-medium leading-8"
                                title="Contact"
                                to={'/'}
                            />
                            <SubnavItem className="leading-8 text-[#ffffff99]" title="+84.395.562.788" to={'/'} />
                            <SubnavItem
                                className="leading-8 text-[#ffffff99]"
                                title="caotheanhls2001@gmail.com"
                                to={'/'}
                            />
                            <div className="social-media flex items-center h-[40px]">
                                <SubnavItem
                                    icon={<FacebookIcon className="fill-[#3b5999] w-[22px] h-[22px] mr-[12px]" />}
                                    href={'https://www.facebook.com/anhcao.201'}
                                    target="_blank"
                                />
                                <SubnavItem
                                    icon={<InstagramIcon className="fill-[#ff55a5] w-[22px] h-[22px] mr-[12px]" />}
                                    href={'https://www.instagram.com/__anhcao.201/'}
                                    target="_blank"
                                />
                                <SubnavItem
                                    icon={<TwitterIcon className="fill-[#1da1f2] w-[22px] h-[22px] mr-[12px]" />}
                                    href={'/'}
                                    target="_blank"
                                />
                                <SubnavItem
                                    icon={<VkIcon className="fill-[#45668e] w-[22px] h-[22px] mr-[12px]" />}
                                    href={'/'}
                                    target="_blank"
                                />
                            </div>
                        </Subnav>
                    </div>
                </div>
                <div className="footer-copyright w-full flex flex-col xl:flex-row justify-between border-t-[1px] border-solid border-[#ffffff0f] py-[32px]">
                    <h4 className="text-[#ffffff99] text-sm pb-[20px] xl:pb-0">
                        © FlixGo, 2018—2022. Create by{' '}
                        <Link className="hover:underline" to={'/'}>
                            Cao Anh
                        </Link>
                        .
                    </h4>
                    <div className="text-[#ffffff99] text-sm">
                        <span className="mr-[30px]">Terms of Use </span>
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
