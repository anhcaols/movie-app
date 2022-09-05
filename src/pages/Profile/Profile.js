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

    return (
        <div className="profile-wrapper">
            <div className="profile-image pt-[70px] pb-[68px]" style={{ backgroundImage: `url(${images.section})` }}>
                <div
                    className="movie-title container flex flex-row justify-between flex-wrap items-center
                    mx-auto pl-[15px] pr-[15px] "
                >
                    <h1 className="text-[36px] text-[#fff] leading-[50px] font-light">My FlixGo</h1>
                    <div>
                        <Link
                            className="text-[#ffffff80] hover:text-primary text-[15px] font-openSans relative profile__link-home"
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
                        <div className="flex items-center ">
                            <div className="info-user flex items-center mr-[114px] h-[82px]">
                                <Image className="w-[50px] h-[50px] mr-[15px] rounded-full" src="" alt="img" />
                                <div>
                                    <h4 className="text-[#fff] font-medium mb-[2px]">{storage.get().name}</h4>
                                    <p className="text-[#ffffff80] text-[14px]">FlixGo ID: {storage.get().id}</p>
                                </div>
                            </div>
                            <Navbar className="ml-0">
                                <NavbarItem
                                    activeNewItem
                                    onClick={() => {
                                        setToggleState(1)
                                    }}
                                    fontThin
                                    className={`hover:text-[#fff] h-[50px] mr-[40px] text-[#ffffff80]
                                     ${toggleState === 1 && 'active'}`}
                                    title="PROFILE"
                                />
                                <NavbarItem
                                    activeNewItem
                                    onClick={() => {
                                        setToggleState(2)
                                    }}
                                    fontThin
                                    className={` hover:text-[#fff] h-[50px] mr-[40px] text-[#ffffff80]
                                     ${toggleState === 2 && 'active'}`}
                                    title="SUBSCRIPTION"
                                />
                                <NavbarItem
                                    activeNewItem
                                    onClick={() => {
                                        setToggleState(3)
                                    }}
                                    fontThin
                                    className={` hover:text-[#fff] h-[50px] mr-[40px] text-[#ffffff80]
                                      ${toggleState === 3 && 'active'}`}
                                    title="SETTINGS"
                                />
                            </Navbar>
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
