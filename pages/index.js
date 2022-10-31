import Home from 'src/sections/Home'
import Layout from 'components/Layout'
import About from 'src/sections/About'
import NavProvider from 'src/provider/NavProvider'
import Services from 'src/sections/Services'

const App = () => {
    return (
        <NavProvider>
            <Layout>
                <Home />
                <About />
                <Services />
            </Layout>
        </NavProvider>
    )
}

export default App
