import Head from 'next/head'
import Layout from '../components/layout/Layout'
import PricingPlan from '../components/pricing/PricingPlan'

const pricing = () => {
    return (
        <div>
            <Head>
                <title>Privacy Policy | Academire</title>
                <meta name="description" content="Browse All Courses" />
            </Head>
            <div>
                <Layout>
                    <PricingPlan />
                </Layout>
            </div>
        </div>
    )
}

export default pricing