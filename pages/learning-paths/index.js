import Head from 'next/head'
import Layout from '../../components/layout/Layout'
import NavBar from '../../components/learning-paths/NavBar'
import SideArea from '../../components/learning-paths/SideArea'

function index() {
    return (
        <div>
            <Head>
                <title>Learning Paths | Academire</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <div>
                <Layout>
                    <div className='flex'>
                        <NavBar />
                        <SideArea />
                    </div>
                </Layout>
            </div>
        </div>
    )
}

export default index