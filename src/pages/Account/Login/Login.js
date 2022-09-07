import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import images from '~/assets/images'
import Button from '~/components/Button/Button'
import config from '~/config'
import '~/pages/Account/Account.scss'
import storage from '~/store/storage'

function Login() {
    const [success, setSuccess] = useState(false)
    const [toggleChecked, setToggleChecked] = useState(true)
    const [checkboxChecked, setCheckboxChecked] = useState(true)
    const iconCheckRef = useRef()
    const formRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    useEffect(() => {
        const inputEmail = emailRef.current.value
        const passwordEmail = passwordRef.current.value
        if (inputEmail === '' || passwordEmail === '') {
            const mode = (storage.get().mode = 'off')
            storage.set({
                ...storage.get(),
                mode,
            })
        }
    }, [])
    const handleCheckbox = () => {
        setCheckboxChecked(!checkboxChecked)
        setToggleChecked(!toggleChecked)
    }
    useEffect(() => {
        // validator
        const Validator = () => {
            const selectorRules = {}
            // validate
            const validate = (inputElement, rule) => {
                let errorMessage
                const formPresent = inputElement.closest('.form-group')
                const errorElement = formPresent.querySelector('.form-message')
                const rules = selectorRules[rule.selector]
                rules.forEach((itemRule) => {
                    switch (inputElement.type) {
                        default:
                            errorMessage = itemRule(inputElement.value)
                    }
                })
                if (errorMessage) {
                    formPresent.querySelector('.form-input').style.border = '1px solid #ff55a5'
                    errorElement.innerText = errorMessage
                }
                return !!errorMessage
            }

            const rulesValidate = [
                Validator.isRequired('#email'),
                Validator.isEmail('#email'),
                Validator.isMinLength('#password', 6),
            ]
            if (formRef.current) {
                formRef.current.querySelector('#login-btn').onclick = function (e) {
                    e.preventDefault()
                    var isFormValid = true
                    rulesValidate.forEach((rule) => {
                        const inputElement = formRef.current.querySelector(rule.selector)
                        const isValid = validate(inputElement, rule)
                        if (isValid) {
                            isFormValid = false
                        }
                    })
                    if (isFormValid) {
                        const email = storage.get().email
                        const password = storage.get().password
                        const name = storage.get().name

                        const inputEmail = emailRef.current.value
                        const passwordEmail = passwordRef.current.value
                        if (email === inputEmail && password === passwordEmail) {
                            const mode = (storage.get().mode = 'on')
                            storage.set({
                                name,
                                email,
                                password,
                                mode,
                            })
                            alert('Login successfully')
                            setSuccess(true)
                        } else {
                            alert('Email or password is incorrect')
                        }
                    }
                }
                //Luu lai cac Rule cho moi input
                rulesValidate.forEach((rule) => {
                    if (Array.isArray(selectorRules[rule.selector])) {
                        selectorRules[rule.selector].push(rule.test)
                    } else {
                        selectorRules[rule.selector] = [rule.test]
                    }
                    const inputElements = formRef.current.querySelectorAll(rule.selector)
                    Array.from(inputElements).forEach((inputElement) => {
                        if (inputElement) {
                            inputElement.onblur = function () {
                                validate(inputElement, rule)
                            }

                            inputElement.oninput = function () {
                                const formPresent = inputElement.closest('.form-group')
                                const errorElement = formPresent.querySelector('.form-message')
                                errorElement.innerText = ''
                                formPresent.querySelector('.form-input').style.border = 'none'
                            }

                            inputElement.onchange = function () {
                                validate(inputElement, rule)
                            }
                        }
                    })
                })
            }
        }
        //Rules
        Validator.isRequired = function (selector, message) {
            return {
                selector: selector,
                test: function (value) {
                    return value ? undefined : message || 'Please fill in this field.'
                },
            }
        }

        Validator.isEmail = function (selector, message) {
            return {
                selector: selector,
                test: function (value) {
                    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    return regex.test(value) ? undefined : message || 'Invalid email address.'
                },
            }
        }

        Validator.isMinLength = function (selector, minLength, message) {
            return {
                selector: selector,
                test: function (value) {
                    return value.length >= minLength
                        ? undefined
                        : message || `Please enter at least  ${minLength} characters.`
                },
            }
        }
        Validator()
    }, [])
    return (
        <div className="sign-wrapper">
            <div className="sign-image" style={{ backgroundImage: `url(${images.section})` }}>
                <div
                    className="movie-title container flex flex-row flex-wrap justify-center  items-center
                    mx-auto pl-[15px] pr-[15px] "
                >
                    <div className="sign-content flex justify-center items-center w-full min-h-[100vh] py-[40px] ">
                        <form ref={formRef} className="sign__form px-5 py-10 md:px-[60px] md:py-[50px]" action="#">
                            <a
                                className="logo flex justify-center items-center mb-[40px] md:mb-[50px] "
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
                                    ref={emailRef}
                                />
                                <span className="form-message text-[12px] text-primary mt-[4px]"></span>
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-input"
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    ref={passwordRef}
                                />
                                <span className="form-message text-[12px] text-primary mt-[4px]"></span>
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
                                    Remember Me
                                </label>
                                <div
                                    ref={iconCheckRef}
                                    onClick={handleCheckbox}
                                    className={toggleChecked ? 'icon-check active' : 'icon-check'}
                                ></div>
                            </div>
                            <div className="form-group">
                                <Button
                                    href={success && config.routes.home}
                                    id="login-btn"
                                    className="w-full mt-[20px]"
                                    primary
                                    large
                                >
                                    Sign In
                                </Button>
                            </div>
                            <p className=" text-[#ffffff80] font-openSans text-[14px] text-center">
                                Don't have an account? {''}
                                <Link className="privacy" to={'/register'}>
                                    Sign up!
                                </Link>
                            </p>
                            <p className=" text-[#ffffff80] mt-[20px] font-openSans text-[14px] text-center">
                                <Link className="privacy" to={'/forgot'}>
                                    Forgot password?
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
