import { Meteors } from "@/components/meteors";

const About = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh]">
        <div className="overflow-hidden">
          <Meteors number={40} className={`absolute z-[1]`} />
          <div className="flex justify-center pb-[120px] md:pb-[60px] items-center align-center text-center h-[100vh] w-[100vw] p-[5px] bg-gradient-to-b from-gray-100 to-slate-700 dark:from-black dark:to-slate-700">
            <div
              className={`text-6xl smd:text-6xl md:text-6xl xmd:text-6xl lg:text-8xl font-extrabold tracking-tighter text-center`}
            >
              About Me!
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100vw] h-[100vh] flex jusify-center items-center align-center p-[20px] smd:p-[150px]">
        {`Greetings, fellow science enthusiasts! I'm your host, Science Maverick, also known in the real world as Muhammad Areeb. Here at the Science Maverick blog, we don't just follow the well-trodden path. We delve into the frontiers of discovery, explore the weird and wonderful, and question everything we think we know.

Prepare for thought-provoking articles, mind-bending theories, and the occasional scientific smackdown (because hey, even geniuses disagree sometimes!). Whether you're a seasoned science buff or just starting your curious journey, this blog is your launchpad to a universe of exploration.

So, grab your lab coat (metaphorical or actual, we don't judge), and get ready to explore the wonders of science with a healthy dose of maverick spirit!`}
      </div>
    </>
  );
};
export default About;
