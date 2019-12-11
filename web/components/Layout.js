import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

import '../public/style.scss';

const Layout = (props) => (
  <div>
    <Head>
      <title>Likeminds</title>
      <meta name='viewport' content='initial-scale=1, viewport-fit=cover' key="viewport" />
    </Head>

    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout;
