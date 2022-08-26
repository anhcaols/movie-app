import { useState } from 'react'
import { Link } from 'react-router-dom'
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/animations/perspective.css'
import 'tippy.js/dist/tippy.css'

import './Header.scss'
import images from '~/assets/images'
import config from '~/config'
import {
    DropMenuIcon,
    FeedbackIcon,
    LogoutIcon,
    MoreMenuIcon,
    SearchIcon,
    SettingIcon,
    UserIcon,
} from '~/components/Icons/Icons'
import Navbar, { NavbarItem } from '~/components/Navbar'
import PopperWrapper from '~/components/Popper'
import Subnav from '~/components/Navbar/Subnav/Subnav'
import SubnavItem from '~/components/Navbar/Subnav/SubnavItem'
import Button from '~/components/Button/Button'
import Search from './Search'

const userCurrent = false
function Header() {
    const [showSearch, setShowSearch] = useState(false)
    const [iconSearch, setIconSearch] = useState(false)

    //handle Events
    const handleShowSearch = () => {
        setShowSearch(!showSearch)
        setIconSearch(!iconSearch)
    }
    return (
        <header className="header-wrapper fixed top-0 right-0 left-0 z-50 bg-bgd">
            <div className="header-top bg-bgd ">
                <div className="container flex flex-row items-center mx-auto pl-[15px] pr-[15px] ">
                    {/* Logo */}
                    <Link
                        className="logo flex justify-center items-center w-[248px] bg-[#28282d] hover:bg-bgd"
                        to={config.routes.home}
                    >
                        <img className="max-w-[120px] h-20" src={images.logo} alt="img" />
                    </Link>
                    {/* Navbar */}
                    <Navbar>
                        <NavbarItem title="HOME" icon={<DropMenuIcon />} to={config.routes.home} />
                        <Tippy
                            interactive
                            delay={[200, 500]}
                            render={(attrs) => (
                                <PopperWrapper>
                                    <div className="" tabIndex="-1" {...attrs}>
                                        <Subnav>
                                            <SubnavItem title="Catalog Grid" to={'/'} />
                                            <SubnavItem title="Catalog List" to={'/'} />
                                            <SubnavItem title="Details Movie" to={'/'} />
                                            <SubnavItem title="Details TV Series" to={'/'} />
                                        </Subnav>
                                    </div>
                                </PopperWrapper>
                            )}
                            placement="top-start"
                            offset={[0, 0]}
                        >
                            <NavbarItem title="CATALOG" icon={<DropMenuIcon />} />
                        </Tippy>

                        <NavbarItem title="PRICING PLAN" to={config.routes.pricing} />
                        <NavbarItem title="HELP" to={config.routes.help} />
                        <Tippy
                            interactive
                            delay={[200, 500]}
                            render={(attrs) => (
                                <PopperWrapper>
                                    <div className="" tabIndex="-1" {...attrs}>
                                        <Subnav>
                                            <SubnavItem title="About" to={'/'} />
                                            <SubnavItem title="Profile" to={'/'} />
                                            <SubnavItem title="Sign In" to={'/'} />
                                            <SubnavItem title="Sign Up" to={'/'} />
                                            <SubnavItem title="Forgot password" to={'/'} />
                                            <SubnavItem title="Privacy Policy" to={'/'} />
                                            <SubnavItem title="Contact" to={'/'} />
                                        </Subnav>
                                    </div>
                                </PopperWrapper>
                            )}
                            placement="top-start"
                            offset={[0, 0]}
                        >
                            <div className="navbar-item h-20 flex items-center cursor-pointer text-text ">
                                <MoreMenuIcon className="w-5 h- fill-text hover:fill-[#ff55a5]" />
                            </div>
                        </Tippy>
                    </Navbar>
                    {/* Action */}
                    <div className="actions ml-auto flex items-center">
                        <button onClick={handleShowSearch}>
                            <SearchIcon
                                className={`${
                                    iconSearch && 'fill-[#ff55a5] '
                                } w-[22px] h- fill-text hover:fill-[#ff55a5] `}
                            />
                        </button>
                        <Tippy
                            interactive
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
                            <button className="text-text text-sm h-20 mr-[45px] ml-[35px]">EN</button>
                        </Tippy>
                        {userCurrent ? (
                            <div className="avatar">
                                <Tippy
                                    interactive
                                    delay={[200, 500]}
                                    render={(attrs) => (
                                        <PopperWrapper>
                                            <div className="" tabIndex="-1" {...attrs}>
                                                <Subnav>
                                                    <SubnavItem title="View Profile" href={'/'} icon={<UserIcon />} />
                                                    <SubnavItem title="Settings" href={'/'} icon={<SettingIcon />} />
                                                    <SubnavItem
                                                        title="Feedback and help"
                                                        href={'/'}
                                                        icon={<FeedbackIcon />}
                                                    />
                                                    <SubnavItem title="Logout" href={'/'} icon={<LogoutIcon />} />
                                                </Subnav>
                                            </div>
                                        </PopperWrapper>
                                    )}
                                    placement="top-end"
                                    offset={[18, 22]}
                                >
                                    <img
                                        className=" w-9 h-w-9 rounded-full cursor-pointer"
                                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/205d4812d9f51f6bc23308d18580f805~c5_100x100.jpeg?x-expires=1661533200&x-signature=Lha0r7eMxx2J60XUM4W5Ct%2BEVRM%3D"
                                        alt="img"
                                    />
                                </Tippy>
                            </div>
                        ) : (
                            <Button primary large href={config.routes.login}>
                                SIGN IN
                            </Button>
                        )}
                    </div>
                </div>
            </div>
            {showSearch && (
                <div className={`header-search `}>
                    <div className=" container flex flex-row items-center mx-auto bg-orange-300 pl-[15px] pr-[15px] ">
                        <Search />
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
