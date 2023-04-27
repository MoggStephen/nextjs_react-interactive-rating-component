//Imports
import Head from '../../components/index/head';
import Layout from '../../components/index/layout';
import Footer from '../../components/index/footer';

export default function Home(){
  return (
    <>
      <Head/>
      <Layout/>  
      <Footer/>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  };
}