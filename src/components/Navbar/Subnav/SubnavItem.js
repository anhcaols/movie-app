import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function SubnavItem({ title, to = false, href = false,icon = false }) {
    let Comp = Link
    const props = {}
    if (to) {
        props.to = to
    }
    if (href) {
        props.href = href
        Comp = 'a'
    }
    return (
        <li>
            <Comp {...props} className="text-base flex items-center leading-10 text-[#ffffffbf] font-light hover:text-primary">
                {icon && <span className='mr-2'>{icon}</span>}
                {title}
            </Comp>
        </li>
    )
}
SubnavItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.node,
    href: PropTypes.node,
}
export default SubnavItem
