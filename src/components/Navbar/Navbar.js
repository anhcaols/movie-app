import PropTypes from 'prop-types'
function Navbar({ children }) {
    return <nav className="navbar ml-10 flex flex-row text-[text] items-center">{children}</nav>
}

Navbar.propTypes = {
    children: PropTypes.node.isRequired,
}
export default Navbar
