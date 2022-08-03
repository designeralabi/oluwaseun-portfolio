const AR = () => {
  return (
    <div
      className="px-6 py-28 flex flex-col font-normal text-lg bg-no-repeat bg-cover bg-center text-white relative text-center"
      style={{
        backgroundImage: `url("/images/pexels-areous-ahmad-3175983.jpg")`,
      }}
    >
      <div className="absolute inset-0 w-full h-full opacity-100 bg-gradient-to-r from-sky-500 to-indigo-500 mix-blend-multiply"></div>
      <h1 className=" z-20 text-4xl uppercase font-semibold">
        COLOURED REALITY
      </h1>
      <h5 className=" z-20 my-10">
        The 1111 Project joins the AR train by animating the eleven artworks for
        an extra layer of meaning, that can be viewed through the Augemented
        Reality app, EyeJack.
      </h5>
      <div className="flex flex-col justify-center items-center mt-12">
        <div className=" z-20 my-7">
          <h3 className="text-2xl uppercase font-medium">Advertising</h3>
          <p className=" my-6">
            If a picture says a thousand words, AR says about two billion all in
            an instance. It animates the concept behind The 1111 Project, giving
            the art pieces a deeper story to tell.
          </p>
        </div>
        <div className=" z-20 my-7">
          <h3 className="text-2xl uppercase font-medium">Design</h3>
          <p className=" my-6">
            AR is design. It is design on another level, moving beyond just
            stills, to dynamic animation and movement with it.
          </p>
        </div>
        <div className=" z-20 my-7">
          <h3 className="text-2xl uppercase font-medium">Creative</h3>
          <p className=" my-6">
            The Project joins the AR train by animating the eleven artworks for
            an extra layer of meaning, that can be viewed through the Augemented
            Reality app, EyeJack.
          </p>
        </div>
        <button className=" my-8 border bg-black text-white py-3 px-5 rounded-full text-lg border-none z-20 w-52">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AR;
