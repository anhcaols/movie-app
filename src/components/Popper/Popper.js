import PropTypes from 'prop-types'
import './Popper.scss'
function Popper({ children }) {
    return (
        <div
            className="popper relative overflow-hidden flex justify-items-start items-start pointer-events-auto
            top-full rounded-[4px] min-w-[180px] px-[20px] min-h-[100px] py-[15px] bg-bgd"
        >
            {children}
        </div>
    )
}

Popper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Popper
