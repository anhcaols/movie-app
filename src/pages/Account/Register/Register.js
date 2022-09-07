import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import images from '~/assets/images'
import Button from '~/components/Button/Button'
import config from '~/config'
import '~/pages/Account/Account.scss'
import storage from '~/store/storage'

function Register() {
    const [toggleChecked, setToggleChecked] = useState(true)
    const [checkboxChecked, setCheckboxChecked] = useState(true)
    const iconCheckRef = useRef()
    const formRef = useRef()
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
            //Rules
            const rulesValidate = [
                Validator.isRequired('#name'),
                Validator.isRequired('#email'),
                Validator.isEmail('#email'),
                Validator.isMinLength('#password', 6),
            ]
            if (formRef.current) {
                formRef.current.querySelector('#register-btn').onclick = function (e) {
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
                        var enableInputs = formRef.current.querySelectorAll('[name]')
                        var formValues = Array.from(enableInputs).reduce((values, input) => {
                            switch (input.type) {
                                default:
                                    values[input.name] = input.value
                            }
                            return values
                        }, {})
                        formValues.mode = 'off'
                        formValues.id = '041001'
                        alert('Sign Up Success! Please login')
                        storage.set(formValues)
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
        //Rules Function
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
                        <form className="sign__form px-5 py-10 md:px-[60px] md:py-[50px]" action="#" ref={formRef}>
                            <a
                                className="logo flex justify-center items-center mb-[40px] md:mb-[50px] "
                                href={config.routes.home}
                            >
                                <img className="max-w-[127px]" src={images.logo} alt="img" />
                            </a>
                            <div className="form-group">
                                <input className="form-input" id="name" type="text" name="name" placeholder="Name" />
                                <span className="form-message text-[12px] text-primary mt-[4px]"></span>
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-input"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
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
                                />
                                <span className="form-message text-[12px] text-primary mt-[4px]"></span>
                            </div>
                            <div className="form-group form-group__checkbox mt-[2px] ">
                                <input
                                    className="form-checkbox ml-[1px]"
                                    id="privacy-policy"
                                    type="checkbox"
                                    // name="privacy-policy"
                                    checked={checkboxChecked}
                                    onChange={handleCheckbox}
                                />
                                <label
                                    htmlFor="privacy-policy"
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
                                <Button id="register-btn" className="w-full mt-[20px]" primary large>
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
