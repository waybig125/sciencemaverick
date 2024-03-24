import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        className={`flex h-[100vh] w-[100vw] flex-row justify-center items-center text-center`}
      >
        <div className={`bg-red-100 w-[50%]`}>a</div>
        <div>b</div>
      </div>
    </>
  );
}
