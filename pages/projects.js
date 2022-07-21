import Head from 'next/head'
import Layout from '../components/layout/Layout'
import NavBar from '../components/learning-pathss/NavBar'
import MainSection from '../components/projects/MainSection'

const projects = () => {
    return (
        <div>
            <Head>
                <title>Browse All Projects | Academire</title>
                <meta name="description" content="Browse All Courses" />
            </Head>
            <div>
                <Layout>
                    <div className='flex'>
                        <NavBar />
                        <MainSection />
                    </div>
                </Layout>
            </div>
        </div>
    )
}

export default projects