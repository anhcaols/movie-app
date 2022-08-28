import PropTypes from 'prop-types'

import Header from '~/layouts/components/Header'
import Footer from "~/layouts/components/Footer"
function MainLayout({ children }) {
    return (
        <div className="app">
            <Header />
            <main className="main" style={{ marginTop: '80px' }}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default MainLayout
