import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { PlayIcon } from '~/components/Icons'
import Image from '../Image/Image'

function CardImage({ src, alt, to, className }) {
    const classes = classNames('movie-image relative', {
        [className]: className,
    })
    return (
        <Link className={classes} to={to}>
            <Image className="block rounded w-full h-full object-cover overflow-hidden" src={src} alt={alt} />
            <span className="play-icon">
                <PlayIcon className="w-7 h-7 fill-[#fff]" />
            </span>
        </Link>
    )
}

CardImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    to: PropTypes.node,
    className: PropTypes.string,
}
export default CardImage
