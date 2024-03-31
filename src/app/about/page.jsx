import { Meteors } from "@/components/meteors";

const About = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh]">
        <div className="overflow-hidden">
          <Meteors number={40} className={`absolute z-[1]`} />
          <div className="flex justify-center pb-[120px] md:pb-[60px] items-center align-center text-center h-[100vh] w-[100vw] p-[5px] bg-gradient-to-b from-gray-100 to-slate-700 dark:from-black dark:to-slate-700">
            <div
              className={`text-2xl smd:text-3xl md:text-3xl xmd:text-3xl lg:text-4xl font-bold nunito-font text-center`}
            >
              About Me!
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100vw] h-[100vh] flex jusify-center items-center align-center p-[100px] smd:p-[150px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi in, vitae
        veritatis voluptas, modi officia autem, eveniet dolorum reiciendis eos
        natus non suscipit omnis culpa delectus provident consequatur quas
        praesentium.
      </div>
    </>
  );
};
export default About;
