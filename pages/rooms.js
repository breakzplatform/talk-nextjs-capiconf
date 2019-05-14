import Layout from '../components/Layout'
import { withRouter } from 'next/router'

const Rooms = withRouter(props => (
  <Layout>
    <h1>{props.router.query.title}</h1>
  </Layout>
))

export default Rooms