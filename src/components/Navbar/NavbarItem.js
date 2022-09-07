import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const NavbarItem = forwardRef(
    ({ className, title, icon = false, to = false, href = false, fontThin, activeNewItem = false, onClick }, ref) => {
        const props = {
            onClick,
        }
        const classes = classNames(
            `navbar-item ${
                activeNewItem && 'nav-tab'
            }  relative flex items-center h-10  xl:h-20 cursor-pointer text-[#ffffffbf] text-sm uppercase mr-10 hover:text-primary`,
            {
                [className]: className,
            },
        )
        return (
            <div ref={ref} className={classes} {...props}>
                <Link className={`flex hover:fill-text-primary  ${fontThin && 'font-thin'} `} href={href} to={to}>
                    {title}
                    {icon && <span className="navbar-icon flex  w-4 h-auto ml-[2px] fill-text">{icon}</span>}
                </Link>
            </div>
        )
    },
)

NavbarItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node,
    to: PropTypes.string,
    href: PropTypes.string,
    fontThin: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
}
export default NavbarItem
