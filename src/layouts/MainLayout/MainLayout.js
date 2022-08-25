import PropTypes from 'prop-types'

import Header from '~/layouts/components/Header'
function MainLayout({ children }) {
    return (
        <div className="app">
            <Header />
            <div className="main" style={{ marginTop: '80px' }}>
                {children}
            </div>
            <div className="footer" style={{ height: '1000px' }}>
                {/* <Footer/> */}
            </div>
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default MainLayout
