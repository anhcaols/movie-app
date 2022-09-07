import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import './Button.scss'

const Button = forwardRef(
    (
        {
            className,
            children,
            icon,
            to,
            href,
            primary = false,
            outline = false,
            small = false,
            large = false,
            disabled = false,
            onClick,
            ...passProps
        },
        ref,
    ) => {
        let Comp = 'button'
        const props = { onClick, ...passProps }
        if (to) {
            props.to = to
            Comp = Link
        } else if (href) {
            props.href = href
            Comp = 'a'
        }
        if (disabled) {
            Object.keys(props).forEach((key) => {
                if (key.startsWith('on') && typeof props[key] === 'function') {
                    delete props[key]
                }
            })
        }
        const classes = classNames('wrapper-btn ', {
            [className]: className,
            primary,
            outline,
            small,
            large,
        })
        return (
            <Comp ref={ref} className={classes} {...props}>
                {icon && <span className="flex items-center content-center">{icon}</span>}
                <span className="title text-sm text-[white] tracking-[0.6px]">{children}</span>
            </Comp>
        )
    },
)
Button.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.node,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    icon: PropTypes.node,
    children: PropTypes.node,
    onClick: PropTypes.func,
}

export default Button
