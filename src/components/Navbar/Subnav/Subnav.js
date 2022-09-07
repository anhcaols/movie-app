import PropTypes from 'prop-types'
import classNames from 'classnames'

function Subnav({ className, children }) {
    const classes = classNames('', {
        [className]: className,
    })
    return <ul className={classes}>{children}</ul>
}

Subnav.propTypes = {
    children: PropTypes.node.isRequired,
    classNames: PropTypes.string,
}
export default Subnav
