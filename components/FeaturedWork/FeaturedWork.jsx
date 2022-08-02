import Image from "next/image";
import featured from "./Featured";

const FeaturedWork = () => {
  return (
    <div className=" p-6">
      {featured.map((feature) => (
        <div key={feature.id} className="flex flex-col my-3">
          <Image
            priority
            src={feature.src}
            alt={feature.title}
            width={300}
            height={500}
            className="block object-cover object-center"
          />
          <hr className=" my-4 border-t-1 border-black" />
          <div className="flex justify-between items-center">
            <h4 className=" uppercase text-base">{feature.project}</h4>
            <p className=" uppercase text-base">{feature.year}</p>
          </div>

          <h2 className="text-2xl uppercase my-3 font-semibold">
            {feature.title}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default FeaturedWork;
