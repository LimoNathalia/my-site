import About from '../../components/About';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Nav from '../../components/Nav';
import Contact from '../../components/Contact';

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        <Nav />
        <About />
        <Contact />
        <Footer />
      </Layout>
    </>
  );
}
