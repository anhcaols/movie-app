import PropTypes from 'prop-types'
import classNames from 'classnames'

import Comment from '~/components/Comment/Comment'
import '~/pages/MovieDetails/MovieDetails.scss'
import Button from '~/components/Button/Button'

function CommentTab({ className }) {
    return (
        <div className={classNames('comment-list  px-[15px] w-[100%] lg:w-[66.666667%]', { [className]: className })}>
            <Comment
                comment
                src=""
                time={'24.08.2018, 17:53'}
                author="Cao Anh"
                actions
                content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered
             alteration in some form, by injected humour, or randomised words which don't look even slightly
             believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
             anything embarrassing hidden in the middle of text."
            />

            <Comment
                comment
                className="ml-[25px] lg:ml-[50px]"
                src=""
                time={'24.08.2018, 17:53'}
                author="Cao Anh"
                rate={10}
                actions
                content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered
           alteration in some form, by injected humour, or randomised words which don't look even slightly
           believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
           anything embarrassing hidden in the middle of text."
            />

            {/* text area */}
            <div className="comment-text-wrapper mt-[30px] p-[20px] bg-[#28282d] ">
                <form action="#" className="flex flex-col">
                    <textarea className="form__textarea  placeholder:text-[#ffffff80]" placeholder="Add comment" />
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
CommentTab.propTypes = {
    classNames: PropTypes.string,
}
export default CommentTab
