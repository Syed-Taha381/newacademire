import Head from 'next/head'
import Layout from '../components/layout/Layout'
import NavBar from '../components/learning-pathss/NavBar'
import Course from '../components/courses/Course.jsx'

const Courses = () => {
  return (
    <div>
            <Head>
                <title>Browse All Courses | Academire</title>
                <meta name="description" content="Browse All Courses" />
            </Head>
            <div>
                <Layout>
                    <div className='flex'>
                        <NavBar />
                        <Course />
                    </div>
                </Layout>
            </div>
        </div>
  )
}

export default Courses