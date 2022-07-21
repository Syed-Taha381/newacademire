import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Terms from '../components/terms/Terms'

const TermsOfService = () => {
    return (
        <div>
            <Head>
                <title>Terms of Services | Academire</title>
                <meta name="description" content="Browse All Courses" />
            </Head>
            <div>
                <Layout>
                    <Terms />
                </Layout>
            </div>
        </div>
    )
}

export default TermsOfService