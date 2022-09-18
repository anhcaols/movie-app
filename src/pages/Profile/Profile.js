import { useState } from 'react'
import { Link } from 'react-router-dom'

import images from '~/assets/images'
import Image from '~/components/Image/Image'
import Navbar, { NavbarItem } from '~/components/Navbar'
import config from '~/config'
import './Profile.scss'
import '~/pages/Home/Home.scss'
import ProfileMain from './ProfileMain/ProfileMain'
import Setting from './Setting/Setting'
import Subscription from './Subscription/Subscription'
import storage from '~/store/storage'
function Profile() {
    const [toggleState, setToggleState] = useState(1)
    const [toggleStateTab, setToggleStateTab] = useState(false)

    //handle Event
    const handleToggleTab = () => {
        setToggleStateTab(!toggleStateTab)
    }
    return (
        <div className="profile-wrapper">
            <div
                className="profile-image py-[50px] xl:pt-[70px] xl:pb-[68px]"
                style={{ backgroundImage: `url(${images.section})` }}
            >
                <div
                    className="movie-title container flex flex-col xl:flex-row justify-between flex-wrap xl:items-center
                    mx-auto pl-[15px] pr-[15px] "
                >
                    <h1 className="text-[30px] xl:text-[36px] text-[#fff] leading-[42px] xl:leading-[50px] font-light mb-[10px] xl:mb-0">
                        My FlixGo
                    </h1>
                    <div>
                        <Link
                            className="text-[#ffffff80] hover:text-primary text-[14px] xl:text-[15px] font-openSans relative profile__link-home"
                            to={config.routes.home}
                        >
                            Home
                        </Link>
                        <span className="cursor-default ml-[40px] text-[#ffffff80] text-[15px] font-openSans" to="/">
                            Profile
                        </span>
                    </div>
                </div>
            </div>

            <div className="content-header">
                <div className=" container flex flex-row flex-wrap content-center items-center mx-auto pl-[15px] pr-[15px]">
                    <div className="content-head">
                        <div className="flex  xl:items-center flex-col xl:flex-row pt-[30px] pb-[10px] xl:py-0">
                            <div className="info-user flex items-center mr-[114px] xl:h-[82px]">
                                <Image className="w-[50px] h-[50px] mr-[15px] rounded-full" src="" alt="img" />
                                <div>
                                    <h4 className="text-[#fff] font-medium mb-[2px]">{storage.get().name}</h4>
                                    <p className="text-[#ffffff80] text-[14px]">FlixGo ID: 041001</p>
                                </div>
                            </div>
                            <div className="flex items-center mt-[10px]">
                                <p
                                    onClick={handleToggleTab}
                                    className="title-nav-tab flex items-center md:hidden text-[14px] text-[#fff] h-[50px]"
                                >
                                    {(toggleState === 1 && 'PROFILE') ||
                                        (toggleState === 2 && 'SUBSCRIPTION') ||
                                        (toggleState === 3 && 'SETTINGS')}
                                </p>
                                <span
                                    onClick={handleToggleTab}
                                    className={`toggle-nav-tabs block w-4 h-4 relative ${
                                        toggleStateTab ? 'active' : ''
                                    } `}
                                ></span>
                            </div>
                            <div className="profile-nav-tabs">
                                <Navbar className={`${toggleStateTab ? 'active' : ''} ml-0`}>
                                    <NavbarItem
                                        activeNewItem
                                        onClick={() => {
                                            setToggleState(1)
                                            setToggleStateTab(false)
                                        }}
                                        fontThin
                                        className={`hover:text-[#fff] h-[50px] mr-[40px] text-[#ffffff80]
                                         ${toggleState === 1 && 'active custom-nav'}`}
                                        title="PROFILE"
                                    />
                                    <NavbarItem
                                        activeNewItem
                                        onClick={() => {
                                            setToggleState(2)
                                            setToggleStateTab(false)
                                        }}
                                        fontThin
                                        className={` hover:text-[#fff] h-[50px] mr-[40px] text-[#ffffff80]
                                         ${toggleState === 2 && 'active custom-nav'}`}
                                        title="SUBSCRIPTION"
                                    />
                                    <NavbarItem
                                        activeNewItem
                                        onClick={() => {
                                            setToggleState(3)
                                            setToggleStateTab(false)
                                        }}
                                        fontThin
                                        className={` hover:text-[#fff] h-[50px] mr-[40px] text-[#ffffff80]
                                          ${toggleState === 3 && 'active custom-nav'}`}
                                        title="SETTINGS"
                                    />
                                </Navbar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item-profile bg-[#2b2b31]">
                <ProfileMain className={toggleState === 1 ? 'active' : ''} />
                <Subscription className={toggleState === 2 ? 'active' : ''} />
                <Setting className={toggleState === 3 ? 'active' : ''} />
            </div>
        </div>
    )
}

export default Profile
