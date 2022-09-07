import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Image from '~/components/Image/Image'

function SubnavItem({
    className,
    classNameImg,
    title,
    to = false,
    href = false,
    icon = false,
    fontBase = false,
    img = false,
    ...passProp
}) {
    let Comp = Link
    const props = { ...passProp }
    if (to) {
        props.to = to
    }
    if (href) {
        props.href = href
        Comp = 'a'
    }
    const classes = classNames(
        `text-base flex items-center leading-10 text-[#ffffffbf] ${fontBase ? '' : 'font-light'} hover:text-primary`,
        {
            [className]: className,
        },
    )
    return (
        <li>
            <Comp {...props} className={classes}>
                {icon && <span className="mr-2">{icon}</span>}
                {title}
                {img && <Image className={classNames({ [classNameImg]: classNameImg })} src={img} alt="app-store" />}
            </Comp>
        </li>
    )
}
SubnavItem.propTypes = {
    classNames: PropTypes.string,
    title: PropTypes.string,
    to: PropTypes.node,
    href: PropTypes.node,
    classNameImg: PropTypes.string,
    fontBase: PropTypes.bool,
    img: PropTypes.string,
    icon: PropTypes.object,
}
export default SubnavItem
