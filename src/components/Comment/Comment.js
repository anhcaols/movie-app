import classNames from 'classnames'
import PropTypes from 'prop-types'

import images from '~/assets/images'
import { DisLikeIcon, LikeIcon, QuoteIcon, ReplyIcon } from '../Icons'
import Image from '../Image/Image'
import '~/pages/MovieDetails/MovieDetails.scss'

function Comment({ className, comment, review, src, title, time, author, rate, actions, content }) {
    return (
        <div className={classNames('comment-item', { [className]: className })}>
            <div className="comment-author flex mt-[30px]">
                <div className="comment__avatar w-[46px] mr-[14px] ">
                    <Image className="rounded-full" src={src} alt="avatar" />
                </div>
                <div>
                    <h4 className="text-[#fff]">{comment ? author : title}</h4>
                    <p className="text-[13px] text-[#ffffff80] leading-[20px] mt-[2px]">
                        {time} {comment && ' '} {review && <span>by {author}</span>}
                    </p>
                </div>
                {review && (
                    <div className="ml-auto flex items-center">
                        <img className="w-4 mr-1" src={images.star} alt="start" />{' '}
                        <span className="text-[#fff]">{rate}</span>
                    </div>
                )}
            </div>
            <div className="comment__text bg-[#28282d] text-[#ffffffb3] rounded mt-[15px]">
                <p className="p-[20px] leading-[26px]">{content}</p>
                {actions && (
                    <div className="comments__actions flex items-center justify-between border-t border-solid border-[#ffffff0d] py-[16px] px-[20px]">
                        <div className="flex flex-row  comments__rate relative">
                            <button className="flex mr-[25px]">
                                <LikeIcon className="opacity-[0.7] hover:opacity-[1] fill-[#0cb457] w-[18px] mr-[6px]" />{' '}
                                <span className="text-sm">12</span>
                            </button>
                            <button className="flex">
                                <span className="text-sm mr-[6px]">1</span>{' '}
                                <DisLikeIcon className="opacity-[0.7] hover:opacity-[1] fill-[#ad1425] w-[18px] mt-[1px]" />
                            </button>
                        </div>
                        <div className="flex flex-row">
                            <button className="flex mr-[20px]">
                                <ReplyIcon className="fill-[#ffffffb3] hover:fill-[#fff] w-[16px] mr-[6px]" />{' '}
                                <span className="text-xs hover:text-[#fff] ">REPLY</span>
                            </button>
                            <button className="flex">
                                <QuoteIcon className="fill-[#ffffffb3] hover:fill-[#fff] w-[16px] mr-[6px]" />{' '}
                                <span className="text-xs hover:text-[#fff]">QUOTE</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

Comment.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    title: PropTypes.string,
    time: PropTypes.string,
    author: PropTypes.string,
    rate: PropTypes.number,
    actions: PropTypes.bool,
    content: PropTypes.string,
    comment: PropTypes.bool,
    review: PropTypes.bool,
}

export default Comment
