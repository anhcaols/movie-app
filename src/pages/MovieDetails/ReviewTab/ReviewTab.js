import PropTypes from 'prop-types'
import classNames from 'classnames'
import Comment from '~/components/Comment/Comment'
import '~/pages/MovieDetails/MovieDetails.scss'
function ReviewTab({ className }) {
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
        </div>
    )
}
ReviewTab.propTypes = {
    classNames: PropTypes.string,
}
export default ReviewTab
