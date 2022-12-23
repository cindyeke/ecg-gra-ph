import Image from 'next/image'
import { Grid, Box, Button } from '@mui/material'
import PropTypes from 'prop-types'
import Footer from './components/Footer'
import Header from './components/Header'
import homePageImg from '../../../public/images/people.jpg'
import layoutStyles from './Layout.styles'
import { SECTION } from 'utils/constants'
import useLayout from './hook/useLayout'

const Layout = ({ children }) => {
    const { sectionId, handleGoToSection } = useLayout()

    return (
        <>
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
            {/* <Footer /> */}
            {/* {sectionId !== SECTION.home && (
                <Button
                    sx={{
                        width: '30px',
                        height: '30px',
                        position: 'absolute',
                        zIndex: '9999999',
                        bottom: '70px',
                        right: '25px',
                    }}
                    onClick={() => handleGoToSection(SECTION.home)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="0.5"
                        stroke="#0026B9"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                    </svg>
                </Button>
            )} */}
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
