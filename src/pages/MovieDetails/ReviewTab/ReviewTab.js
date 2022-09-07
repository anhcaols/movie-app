import { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Nouislider from 'nouislider-react'
import 'nouislider/distribute/nouislider.css'

import Comment from '~/components/Comment/Comment'
import '~/pages/MovieDetails/MovieDetails.scss'
import Button from '~/components/Button/Button'
function ReviewTab({ className }) {
    const progressAreaRef = useRef()
    const [rate, setRate] = useState(0)

    const update = (values) => {
        setRate(values)
    }

    return (
        <div className={classNames('comment-list  px-[15px] w-[100%] lg:w-[66.666667%]', { [className]: className })}>
            <Comment
                review
                src=""
                title={'Best Marvel movie in my opinion'}
                time={'24.08.2018, 17:53'}
                author="Cao Anh"
                rate={8.4}
                content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                             alteration in some form, by injected humour, or randomised words which don't look even slightly
                             believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                             anything embarrassing hidden in the middle of text."
            />

            <Comment
                review
                src=""
                title={'Best Marvel movie in my opinion'}
                time={'24.08.2018, 17:53'}
                author="Cao Anh"
                rate={8.4}
                content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                           alteration in some form, by injected humour, or randomised words which don't look even slightly
                           believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                           anything embarrassing hidden in the middle of text."
            />
            {/* text area */}
            <div className="comment-text-wrapper mt-[30px] p-[20px] bg-[#28282d] ">
                <form action="#" className="flex flex-col">
                    <input className="form__input placeholder:text-[#ffffff80]" placeholder="Title" />
                    <textarea className="form__textarea  placeholder:text-[#ffffff80]" placeholder="Review" />
                    <div className="mt-[30px] text-[15px]  ">
                        <p className="mb-[10px] h-[20px] text-[#ffffff80]">Rate:</p>
                        <div ref={progressAreaRef} className="flex  relative">
                            <Nouislider
                                behaviour="tap-snap"
                                connect={[true, false]}
                                start={0}
                                onUpdate={update}
                                range={{ min: [0], max: [10] }}
                            />
                            <p className="number-rate">{rate}</p>
                        </div>
                    </div>
                    <Button
                        onClick={(e) => {
                            e.preventDefault()
                        }}
                        primary
                        large
                        className="mt-[25px] w-[150px]"
                    >
                        SEND
                    </Button>
                </form>
            </div>
        </div>
    )
}
ReviewTab.propTypes = {
    classNames: PropTypes.string,
}
export default ReviewTab
