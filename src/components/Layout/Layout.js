import PropTypes from 'prop-types'
import Footer from './components/Footer'
import Header from './components/Header'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main
                style={{
                    height: '77vh',
                    backgroundColor: 'pink',
                    overflow: 'scroll',
                }}
            >
                {children}
            </main>
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
