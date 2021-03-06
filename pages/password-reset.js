import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Reset from '../components/Login/Reset'

const passwordReset = () => {
    return (
        <div>
            <Head>
                <title>Password Reset | Academire</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <div>
                <Layout>
                    <Reset />
                </Layout>
            </div>
        </div>
    )
}

export default passwordReset