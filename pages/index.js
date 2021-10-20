import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Hulu Clone</title>
        <meta
          name="description"
          content="Hulu Clone with the help of REST API"
        />
      </Head>

      <Header />
      <Nav />
      <Results />
    </div>
  );
}



export async function getServerSideProps(context) {
  
  const genre = context.query.genre;
   
}
