import Home from 'src/sections/Home'
import Layout from 'components/Layout'
import About from 'src/sections/About'
import NavProvider from 'src/provider/NavProvider'
import Services from 'src/sections/Services'
import Pastors from 'src/sections/Pastors'
import Contact from 'src/sections/Contact'
import { useMediaQuery } from 'react-responsive'
import { Box } from '@mui/material'

const App = () => {
    const isMiniTabletOrMobile = useMediaQuery({ query: '(max-width: 640px)' })
    return (
        // <>
        //     {isMiniTabletOrMobile ? (
        //         <NavProvider>
        //             <Layout>
        //                 <Home />
        //                 <About />
        //                 <Services />
        //                 <Pastors />
        //                 <Contact />
        //             </Layout>
        //         </NavProvider>
        //     ) : (
        //         <Grid
        //             container
        //             justifyContent="center"
        //             alignContent="center"
        //             height="100vh"
        //         >
        //             <Typography variant="h1">
        //                 This screen is not supported currently
        //             </Typography>
        //         </Grid>
        //     )}
        // </>

        <NavProvider>
            <Box
                sx={{
                    height: '100%',
                    overflow: 'auto',
                }}
            >
                <Layout>
                    <Home />
                    <About />
                    <Services />
                    <Pastors />
                    <Contact />
                </Layout>
            </Box>
        </NavProvider>
    )
}

export default App
