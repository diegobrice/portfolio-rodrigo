import Head from "next/head";
import Album from "../components/album";
import Articles from "../components/articles";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Rodrigo Almonte | Home</title>
        <meta name="description" content="Rodrigo Almonte peruvian guitarist and composer based in Dublin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <Hero></Hero>
      <Album></Album>
      <Articles></Articles>
      <Footer></Footer>
    </>
  );
}
