import Image from 'next/image'
import { Grid, Box } from '@mui/material'
import PropTypes from 'prop-types'
import Footer from './components/Footer'
import Header from './components/Header'
import homePageImg from '../../../public/images/people.jpg'
import layoutStyles from './Layout.styles'

const Layout = ({ children }) => {
    return (
        <>
            <Grid style={layoutStyles.root}>
                <Image
                    src={homePageImg}
                    layout="fill"
                    objectFit="cover"
                    alt="Brand logo"
                />
                <Box style={layoutStyles.overlay} />
            </Grid>
            <Header />
            <main style={layoutStyles.main}>{children}</main>
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
