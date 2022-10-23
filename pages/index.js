import Home from 'src/sections/Home'
import Layout from 'components/Layout'
import About from 'src/sections/About'
import NavProvider from 'src/provider/NavProvider'

const App = () => {
    return (
        <NavProvider>
            <Layout>
                <Home />
                <About />
            </Layout>
        </NavProvider>
    )
}

export default App
