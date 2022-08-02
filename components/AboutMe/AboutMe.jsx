import Link from "next/link";
// import YouTube, { YouTubeProps } from "react-youtube";

const AboutMe = () => {
  return (
    <div className="p-6">
      <h2 className="text-4xl">About</h2>
      <h3>AN INTERNATIONAL DIGITAL ARTIST CREATING IMAGINARY WORK OF ART</h3>
      <p>
        Olowu, Ifeoluwa Oluwaseun is a contemporary Nigerian Artist born in
        Lagos, Nigeria. He attended Yaba College of Technology primary and
        secondary school. Having grew up surrounded by art, watching cartoons,
        movies and reading comics, his love for art grew.{" "}
      </p>
      <button className="border rounded-full">ABOUT ME</button>

      {/* <div>
        <YouTube videoId="jAacM6j1uxY" />
      </div> */}
    </div>
  );
};

export default AboutMe;
