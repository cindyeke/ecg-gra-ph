import Image from 'next/image'
import { Grid, Box, Button } from '@mui/material'
import PropTypes from 'prop-types'
import Footer from './components/Footer'
import Header from './components/Header'
import homePageImg from '../../../public/images/people.jpg'
import layoutStyles from './Layout.styles'
import { SECTION } from 'utils/constants'
import useLayout from './hook/useLayout'
import homeIcon from '../../../public/svgs/home.svg'

const Layout = ({ children }) => {
    const { sectionId, handleGoToSection } = useLayout()

    return (
        <Grid sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Grid
                style={{
                    ...layoutStyles.imgWrapper,
                    ...(sectionId !== SECTION.home &&
                        layoutStyles.disableImageWrapper),
                }}
            >
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
            {sectionId !== SECTION.home && (
                <Button
                    sx={{
                        position: 'absolute',
                        zIndex: '9999999',
                        bottom: '70px',
                        right: '25px',
                        width: 70,
                        height: 70,
                        borderRadius: '50%',
                        textAlign: 'center',
                        lineHeight: '100px',
                        verticalAlign: 'middle',
                        padding: '15px',
                        boxShadow: '0 0 5px #858585',
                    }}
                    onClick={() => handleGoToSection(SECTION.home)}
                >
                    <Image
                        src={homeIcon}
                        alt="Home Icon"
                        style={layoutStyles.homeIcon}
                        width={30}
                        height={30}
                    />
                </Button>
            )}
        </Grid>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
