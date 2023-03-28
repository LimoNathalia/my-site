import Particles from '../../components/Particles';
import About from '../../components/About';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Nav from '../../components/Nav';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';

export default function Home() {
  return (
    <>
      <Particles id="tsparticles" />
      <Layout>
        <Header />
        <Nav />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Layout>
    </>
  );
}
