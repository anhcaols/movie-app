import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import images from '~/assets/images'
import Button from '~/components/Button/Button'
import config from '~/config'
import '~/pages/Account/Account.scss'

function Forgot() {
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
                    className="movie-title container flex flex-row flex-wrap justify-center items-center
                    mx-auto pl-[15px] pr-[15px] "
                >
                    <div className="sign-content flex justify-center items-center w-full min-h-[100vh] py-[40px] ">
                        <form className="sign__form px-5 py-10 md:px-[60px] md:py-[50px]" action="#">
                            <a
                                className="logo flex justify-center items-center mb-[40px] md:mb-[50px]"
                                href={config.routes.home}
                            >
                                <img className="max-w-[127px]" src={images.logo} alt="img" />
                            </a>
                            <div className="form-group">
                                <input
                                    className="form-input"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                />
                                {/* <span className='form-message text-[12px] text-primary mt-[4px]'>Please fill in this field. </span> */}
                            </div>
                            <div className="form-group form-group__checkbox mt-[2px]">
                                <input
                                    className="form-checkbox ml-[1px]"
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
                                    Sign in
                                </Button>
                            </div>
                            <p className=" text-[#ffffff80] font-openSans text-[14px] text-center">
                                We will send a password to your Email
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forgot
