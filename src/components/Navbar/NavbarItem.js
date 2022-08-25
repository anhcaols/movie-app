import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
const NavbarItem = forwardRef(({ title, icon = false, to = false }, ref) => {
    return (
        <div
            ref={ref}
            className="navbar-item pt-[30px] pb-[30px] cursor-pointer text-[#ffffffbf] text-sm
            uppercase font-normal mr-10 hover:text-primary"
        >
            <Link className="flex  hover:fill-text-primary" to={to}>
                {title}
                {icon && <span className="navbar-icon flex  w-4 h-auto ml-[2px] fill-text">{icon}</span>}
            </Link>
        </div>
    )
})

NavbarItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node,
    to: PropTypes.string,
}
export default NavbarItem
