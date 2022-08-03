import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavMenu from "../components/NavMenu/Navlinks";
import AR from "../components/AR/AR";
import FeaturedWork from "../components/FeaturedWork/FeaturedWork";
import AboutMe from "../components/AboutMe/AboutMe";
import Nft from "../components/Nfts/Nft";

const Home: NextPage = () => {
  return (
    <div className="flex text-xl flex-col">
      <Head>
        <title>olowuife | Home</title>
        <link rel="icon" href="/images/artist-ifeoluwa-h-pix.png" />
      </Head>
      <NavMenu />
      {/* start */}
      <div className="flex flex-col justify-between mt-14 md:flex-row">
        <Image
          priority
          src="/images/artist-ifeoluwa-h-pix.png"
          alt="artist-h-pix"
          width={300}
          height={600}
          className="object-cover object-top"
        />
        <div className="p-6">
          <h1 className="text-5xl md:text-6xl font-medium">
            Pencil Artist & Creative Director
          </h1>
          <p className="text-xl leading-relaxed mt-6">
            👋 Hi there, i am Olowu, Ifeoluwa Oluwaseun a contemporary Nigerian
            Artist born in Lagos, Nigeria.
          </p>
        </div>
      </div>
      {/* end */}
      <FeaturedWork />
      <AboutMe />
      <AR />
      <div className="">
        <Nft />
        <div className="px-6 py-12 flex flex-col">
          <p className="text-lg leading-9">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy textever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
          <div className=" my-8">
            <p className=" font-bold uppercase">Olowuife Oluwaseun</p>
            <p className=" uppercase">Artist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
