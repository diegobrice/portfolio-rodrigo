import Head from "next/head";
import Image from "next/image";
import Album from "../components/album";
import Articles from "../components/articles";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const timer = setTimeout(() => {
      Swal.fire({
        title: "DISTANCIA (Debut Album ) - Crowdfunding",
        html: "We need your help to get my debut album released. Follow the link to learn more.",
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
          '<a target="_blank" href="https://fundit.ie/project/rodrigo-almonte-distancia-debut-album">Fund this project</a>',
      });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

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
