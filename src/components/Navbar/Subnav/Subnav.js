import PropTypes from 'prop-types'

function Subnav({ children }) {
    return <ul>{children}</ul>
}

Subnav.propTypes = {
    children: PropTypes.node.isRequired,
}
export default Subnav
