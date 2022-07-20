import Head from 'next/head'
import Layout from '../../components/layout/Layout'
import Community from '../../components/projects/Community'

const CommunitySolutions = () => {
    return (
        <div>
            <Head>
                <title>Tesla Clone Community Solutions | Academire</title>
                <meta name="description" content="Browse All Courses" />
            </Head>
            <div>
                <Layout>
                   <Community />
                </Layout>
            </div>
        </div>
    )
}

export default CommunitySolutions