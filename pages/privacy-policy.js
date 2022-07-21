import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Privacy from '../components/privacy/Privacy'

const PrivacyPolicy = () => {
    return (
        <div>
            <Head>
                <title>Academire Pricing Plans | Academire</title>
                <meta name="description" content="Browse All Courses" />
            </Head>
            <div>
                <Layout>
                    <Privacy />
                </Layout>
            </div>
        </div>
    )
}

export default PrivacyPolicy