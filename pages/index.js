import Home from 'src/sections/Home'
import Layout from 'components/Layout'
import About from 'src/sections/About'
import NavProvider from 'src/provider/NavProvider'
import Services from 'src/sections/Services'
import Pastors from 'src/sections/Pastors'

const App = () => {
    return (
        <NavProvider>
            <Layout>
                <Home />
                <About />
                <Services />
                <Pastors />
            </Layout>
        </NavProvider>
    )
}

export default App
