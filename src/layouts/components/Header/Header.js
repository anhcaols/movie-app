import { useState } from 'react'
import { Link } from 'react-router-dom'
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/animations/perspective.css'
import 'tippy.js/dist/tippy.css'

import './Header.scss'
import images from '~/assets/images'
import config from '~/config'
import { DropMenuIcon, FeedbackIcon, LogoutIcon, MoreMenuIcon, SearchIcon, UserIcon } from '~/components/Icons/Icons'
import Navbar, { NavbarItem } from '~/components/Navbar'
import PopperWrapper from '~/components/Popper'
import Subnav from '~/components/Navbar/Subnav/Subnav'
import SubnavItem from '~/components/Navbar/Subnav/SubnavItem'
import Button from '~/components/Button/Button'
import Image from '~/components/Image/Image'
import storage from '~/store/storage'

let userCurrent
if (storage.get().mode === 'on') {
    userCurrent = true
} else {
    userCurrent = false
}
function Header() {
    const [showSearch, setShowSearch] = useState(false)
    const [iconSearch, setIconSearch] = useState(false)
    const [toggleBtn, setToggleBtn] = useState(false)

    //handle Events
    const handleShowSearch = () => {
        setIconSearch(!iconSearch)
        setShowSearch(!showSearch)
    }
    const handleCloseSearch = () => {
        setIconSearch(false)
        setShowSearch(false)
    }

    const handleToggle = () => {
        setToggleBtn(!toggleBtn)
    }
    return (
        <header className="header-wrapper fixed top-0 right-0 left-0 z-50 bg-bgd">
            <div className="header-top bg-bgd">
                <div className="container h-[70px] md:h-20 flex flex-row items-center mx-auto pl-[15px] pr-[15px] ">
                    {/* Logo */}
                    <Link
                        onClick={handleCloseSearch}
                        className="logo flex justify-center items-center w-[110px] sm:w-[157px] md:w-[175px] lg:[210px] xl:w-[248px] bg-[#28282d] hover:bg-bgd"
                        to={config.routes.home}
                    >
                        <img
                            className="w-[80px] sm:w-[100px] md:w-[120px] h-[70px] md:h-20"
                            src={images.logo}
                            alt="img"
                        />
                    </Link>
                    {/* Navbar */}
                    <div className={`navbar-header ${toggleBtn ? 'active' : ''}`}>
                        <div onClick={handleToggle} className={`overlay ${toggleBtn ? 'active' : ''}`}></div>
                        <Navbar className="ml-[40px]">
                            <NavbarItem onClick={handleCloseSearch} title="HOME" to={config.routes.home} />
                            <div>
                                <Tippy
                                    interactive
                                    delay={[200, 500]}
                                    trigger="click"
                                    render={(attrs) => (
                                        <PopperWrapper>
                                            <div className="" tabIndex="-1" {...attrs}>
                                                <Subnav>
                                                    <SubnavItem title="Actor" to={'/'} />
                                                    <SubnavItem title="Movie genre" to={'/'} />
                                                    <SubnavItem title="Director" to={'/'} />
                                                    <SubnavItem title="Movie Blog" to={'/'} />
                                                </Subnav>
                                            </div>
                                        </PopperWrapper>
                                    )}
                                    placement="top-start"
                                    offset={[0, 0]}
                                >
                                    <NavbarItem title="Cinema blog" />
                                </Tippy>
                            </div>

                            <NavbarItem title="Event" to={config.routes.event} />
                            <NavbarItem title="HELP" to={config.routes.help} />
                            <>
                                <Tippy
                                    interactive
                                    trigger="click"
                                    delay={[200, 500]}
                                    render={(attrs) => (
                                        <PopperWrapper>
                                            <div className="" tabIndex="-1" {...attrs}>
                                                <Subnav>
                                                    <SubnavItem title="About" to={'/'} />
                                                    <SubnavItem
                                                        onClick={handleCloseSearch}
                                                        title="Profile"
                                                        href={
                                                            userCurrent === true
                                                                ? config.routes.profile
                                                                : config.routes.login
                                                        }
                                                    />
                                                    <SubnavItem title="Sign In" to={config.routes.login} />
                                                    <SubnavItem title="Sign Up" to={config.routes.register} />
                                                    <SubnavItem title="Privacy Policy" to={'/'} />
                                                    <SubnavItem title="Contact" to={'/'} />
                                                </Subnav>
                                            </div>
                                        </PopperWrapper>
                                    )}
                                    placement="top-start"
                                    offset={[0, 0]}
                                >
                                    <div className="navbar-item h-10 xl:h-20 flex items-center cursor-pointer text-text ">
                                        <MoreMenuIcon className="w-5 h- fill-text hover:fill-[#ff55a5]" />
                                    </div>
                                </Tippy>
                            </>
                        </Navbar>
                    </div>
                    {/* Action */}
                    <div className="actions ml-auto flex items-center">
                        <Link to={config.routes.search} onClick={handleShowSearch}>
                            <SearchIcon
                                className={`${
                                    iconSearch && 'fill-[#ff55a5] '
                                } w-[22px] h- fill-text hover:fill-[#ff55a5] `}
                            />
                        </Link>
                        <div>
                            <Tippy
                                interactive
                                trigger="click"
                                delay={[200, 500]}
                                render={(attrs) => (
                                    <PopperWrapper>
                                        <div className="" tabIndex="-1" {...attrs}>
                                            <Subnav>
                                                <SubnavItem title="English" href={'/'} />
                                                <SubnavItem title="VietNamese" href={'/'} />
                                            </Subnav>
                                        </div>
                                    </PopperWrapper>
                                )}
                                placement="top-start"
                                offset={[0, 0]}
                            >
                                <button className="hover:text-primary text-text text-sm h-[70px] md:h-20 ml-[20px] mr-[10px] md:mr-[45px] md:ml-[35px]">
                                    EN
                                </button>
                            </Tippy>
                        </div>
                        {userCurrent ? (
                            <div className="avatar">
                                <div>
                                    <Tippy
                                        interactive
                                        trigger="click"
                                        delay={[200, 500]}
                                        render={(attrs) => (
                                            <PopperWrapper>
                                                <div className="" tabIndex="-1" {...attrs}>
                                                    <Subnav>
                                                        <SubnavItem
                                                            title="View Profile"
                                                            href={config.routes.profile}
                                                            icon={<UserIcon />}
                                                        />
                                                        <SubnavItem
                                                            title="Feedback and help"
                                                            to={'/'}
                                                            icon={<FeedbackIcon />}
                                                        />
                                                        <SubnavItem
                                                            title="Logout"
                                                            to={config.routes.login}
                                                            icon={<LogoutIcon />}
                                                        />
                                                    </Subnav>
                                                </div>
                                            </PopperWrapper>
                                        )}
                                        placement="top-end"
                                        offset={[18, 19]}
                                    >
                                        <Image
                                            className="ml-[10px] xl:ml-0 w-9 h-w-9 rounded-full cursor-pointer"
                                            src=""
                                            alt="img"
                                        />
                                    </Tippy>
                                </div>
                            </div>
                        ) : (
                            <>
                                <Button className="hidden md:flex" primary large to={config.routes.login}>
                                    SIGN IN
                                </Button>
                                <Button
                                    className="flex md:hidden w-[40px]"
                                    icon={<LogoutIcon className="fill-[#fff] w-[22px]" />}
                                    primary
                                    small
                                    to={config.routes.login}
                                ></Button>
                            </>
                        )}
                        <button
                            onClick={handleToggle}
                            className={`header-toggle-btn block xl:hidden relative ml-[20px] md:ml-[30px]  ${
                                toggleBtn ? 'active' : ''
                            }`}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
            {/* {showSearch && (
                <div className={`header-search `}>
                    <div className=" container flex flex-row items-center mx-auto bg-orange-300 pl-[15px] pr-[15px] ">
                        <Search />
                    </div>
                </div>
            )} */}
        </header>
    )
}

export default Header
