import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import images from '~/assets/images'
import Button from '~/components/Button/Button'
import config from '~/config'
import '~/pages/Account/Account.scss'

function Register() {
    const [toggleChecked, setToggleChecked] = useState(true)
    const [checkboxChecked, setCheckboxChecked] = useState(true)
    const iconCheckRef = useRef()
    console.log(checkboxChecked)
    const handleCheckbox = () => {
        setCheckboxChecked(!checkboxChecked)
        setToggleChecked(!toggleChecked)
    }

    return (
        <div className="sign-wrapper">
            <div className="sign-image" style={{ backgroundImage: `url(${images.section})` }}>
                <div
                    className="movie-title container flex flex-row flex-wrap justify-center  items-center
                    mx-auto pl-[15px] pr-[15px] "
                >
                    <div className="sign-content flex justify-center items-center w-full min-h-[100vh] py-[40px] ">
                        <form className="sign__form px-[60px] py-[50px]" action="#">
                            <Link className="logo flex justify-center items-center mb-[50px] " to={config.routes.home}>
                                <img className="max-w-[127px]" src={images.logo} alt="img" />
                            </Link>
                            <div className="form-group">
                                <input className="form-input" id="name" type="text" name="name" placeholder="Name" />
                                <span className="form-message text-[12px] text-primary mt-[4px]">
                                    Please fill in this field.{' '}
                                </span>
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-input"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                />
                                <span className="form-message text-[12px] text-primary mt-[4px]">
                                    Please fill in this field.{' '}
                                </span>
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-input"
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <span className="form-message text-[12px] text-primary mt-[4px]">
                                    Please fill in this field.{' '}
                                </span>
                            </div>
                            <div className="form-group form-group__checkbox mt-[2px]">
                                <input
                                    className="form-checkbox"
                                    id="remember"
                                    type="checkbox"
                                    name="remember"
                                    checked={checkboxChecked}
                                    onChange={handleCheckbox}
                                />
                                <label
                                    htmlFor="remember"
                                    className="cursor-pointer block mt-[-24px] ml-[34px] text-[#ffffff80] text-[14px] leading-[22px] font-openSans"
                                >
                                    I agree to the{' '}
                                    <Link className="privacy" to={'/'}>
                                        Privacy Policy
                                    </Link>
                                </label>
                                <div
                                    ref={iconCheckRef}
                                    onClick={handleCheckbox}
                                    className={toggleChecked ? 'icon-check active' : 'icon-check'}
                                ></div>
                            </div>
                            <div className="form-group">
                                <Button className="w-full mt-[20px]" primary large>
                                    Sign Up
                                </Button>
                            </div>
                            <p className=" text-[#ffffff80] font-openSans text-[14px] text-center">
                                Already have an account?{' '}
                                <Link className="privacy" to={'/login'}>
                                    Sign in!
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
