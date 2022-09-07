import PropTypes from 'prop-types'
import classNames from 'classnames'

function Navbar({ className, children }) {
    const classes = classNames('navbar flex flex-row text-[text] items-center', {
        [className]: className,
    })
    return <nav className={classes}>{children}</nav>
}

Navbar.propTypes = {
    children: PropTypes.node.isRequired,
    classNames: PropTypes.string,
}
export default Navbar
