import Head from 'next/head'
import Problem from '../../components/project/Problem'
import Layout from '../../components/layout/Layout'

const TeslaClone = () => {
    return (
        <div>
            <Head>
                <title>Tesla Clone | Academire</title>
                <meta name="description" content="Browse All Courses" />
            </Head>
            <div>
                <Layout>
                    <Problem />
                </Layout>
            </div>
        </div>
    )
}

export default TeslaClone