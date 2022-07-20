import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Contact from '../components/contact/Contact'

const contact = () => {
    return (
        <div>
            <Head>
                <title>Contact Us | Academire</title>
                <meta name="description" content="Browse All Courses" />
            </Head>
            <div>
                <Layout>
                    <Contact />
                </Layout>
            </div>
        </div>
    )
}

export default contact