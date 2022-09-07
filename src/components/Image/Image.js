import PropTypes from 'prop-types'
import classNames from 'classnames'
import { forwardRef } from 'react'
import { useState } from 'react'

import images from '~/assets/images'

const Image = forwardRef(({ src, alt, fallback: customFallback = images.noImage, className, ...props }, ref) => {
    const [_fallback, setFallBack] = useState('')
    const handleError = () => {
        setFallBack(customFallback)
    }
    return (
        <img
            className={classNames('', className)}
            ref={ref}
            src={_fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    )
})

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
    className: PropTypes.string,
    customFallback: PropTypes.string,
}
export default Image
