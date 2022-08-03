import Link from "next/link";
// import YouTube, { YouTubeProps } from "react-youtube";

const AboutMe = () => {
  return (
    <div className="px-6 py-12">
      <h2 className="text-4xl uppercase font-semibold">About</h2>
      <h3 className=" my-8">
        AN INTERNATIONAL DIGITAL ARTIST CREATING IMAGINARY WORK OF ART
      </h3>
      <p className=" leading-9">
        Olowu, Ifeoluwa Oluwaseun is a contemporary Nigerian Artist born in
        Lagos, Nigeria. He attended Yaba College of Technology primary and
        secondary school. Having grew up surrounded by art, watching cartoons,
        movies and reading comics, his love for art grew.{" "}
      </p>
      <button className=" my-8 border bg-black text-white py-3 px-5 rounded-full text-lg border-none">
        ABOUT ME
      </button>

      {/* <div>
        <YouTube videoId="jAacM6j1uxY" />
      </div> */}
    </div>
  );
};

export default AboutMe;
