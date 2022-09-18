import classNames from 'classnames'
import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import storage from '~/store/storage'
import config from '~/config'
import Button from '~/components/Button/Button'

function Setting({ className }) {
    const emailRef = useRef()
    const nameRef = useRef()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const saveBtnRef = useRef()
    const changeBtnRef = useRef()
    const passwordOldRef = useRef()
    const passwordNewRef = useRef()
    const passwordConfirmRef = useRef()
    let fullName = storage.get().name.split(' ')
    let firstName, lastName
    ;[firstName, ...lastName] = fullName

    useEffect(() => {
        emailRef.current.value = storage.get().email
        nameRef.current.value = storage.get().name
        firstNameRef.current.value = firstName
        lastNameRef.current.value = [...lastName].join(' ')

        function handleSave() {
            saveBtnRef.current.onclick = (e) => {
                if (firstNameRef.current.value === firstName && lastNameRef.current.value === [...lastName].join(' ')) {
                    e.preventDefault()
                } else {
                    const valueFirstName = firstNameRef.current.value
                    const valueLastName = lastNameRef.current.value
                    const fullName = [valueFirstName, valueLastName].join(' ')
                    storage.set({
                        ...storage.get(),
                        name: fullName,
                    })
                    alert('Update successful')
                }
            }
        }

        function handleChange() {
            changeBtnRef.current.onclick = (e) => {
                if (passwordOldRef.current.value === storage.get().password) {
                    if (
                        passwordNewRef.current.value !== '' &&
                        passwordConfirmRef.current.value !== '' &&
                        passwordNewRef.current.value.length >= 6 &&
                        passwordConfirmRef.current.value.length >= 6 &&
                        passwordNewRef.current.value === passwordConfirmRef.current.value
                    ) {
                        storage.set({
                            ...storage.get(),
                            password: passwordNewRef.current.value,
                        })
                        alert('Update successful')
                        passwordNewRef.current.value = ''
                        passwordConfirmRef.current.value = ''
                        passwordOldRef.current.focus()
                        passwordOldRef.current.value = ''
                    } else {
                        alert('The two passwords must match and be at least 6 characters')
                    }
                } else {
                    e.preventDefault()
                    alert('Please enter your correct password')
                }
            }
        }
        handleSave()
        handleChange()
    }, [])
    return (
        <div className={classNames('profile-tab', { [className]: className })}>
            <div className="container flex flex-row flex-wrap content-center items-center mx-auto pl-[15px] pr-[15px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-[30px] mt-[40px] mb-[70px] ">
                    <div className="profile-detail p-[30px] rounded bg-[#28282d]">
                        <h4 className="mb-[25px] text-[#fff] font-medium">Profile Details</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:lg:grid-cols-2 gap-0 md:gap-[30px] lg:gap-0 xl:gap-[30px]">
                            <form className="pb-[20px]">
                                <label className="profile-label">Username</label>
                                <input
                                    ref={nameRef}
                                    disabled
                                    className="profile-input"
                                    type="text"
                                    placeholder="Cao Anh"
                                />
                            </form>
                            <form className="pb-[20px]">
                                <label className="profile-label">Email</label>
                                <input ref={emailRef} className="profile-input" type="email" disabled />
                            </form>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:lg:grid-cols-2 gap-0 md:gap-[30px] lg:gap-0 xl:gap-[30px]">
                            <form className="pb-[20px]">
                                <label className="profile-label">First Name</label>
                                <input ref={firstNameRef} className="profile-input" type="text" placeholder="Cao" />
                            </form>
                            <form className="pb-[20px]">
                                <label className="profile-label">Last Name</label>
                                <input ref={lastNameRef} className="profile-input" type="text" placeholder="Anh" />
                            </form>
                        </div>
                        <Button
                            ref={saveBtnRef}
                            href={config.routes.profile}
                            className="mt-[10px] w-full md:w-[150px]"
                            primary
                            large
                        >
                            Save
                        </Button>
                    </div>
                    {/* Change password */}
                    <div className="profile-detail p-[30px] rounded bg-[#28282d]">
                        <h4 className="mb-[25px] text-[#fff] font-medium">Change password</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:lg:grid-cols-2 gap-0 md:gap-[30px] lg:gap-0 xl:gap-[30px]">
                            <form className="pb-[20px]">
                                <label className="profile-label">Old Password</label>
                                <input ref={passwordOldRef} className="profile-input" type="password" />
                            </form>
                            <form className="pb-[20px]">
                                <label className="profile-label">New Password</label>
                                <input ref={passwordNewRef} className="profile-input" type="password" />
                            </form>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:lg:grid-cols-2 gap-0 md:gap-[30px] lg:gap-0 xl:gap-[30px]">
                            <form className="pb-[20px]">
                                <label className="profile-label">Confirm New Password</label>
                                <input ref={passwordConfirmRef} className="profile-input" type="password" />
                            </form>
                        </div>
                        <Button ref={changeBtnRef} className="mt-[10px] w-full md:w-[150px]" primary large>
                            Change
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

Setting.propTypes = {
    classNames: PropTypes.string,
}
export default Setting
