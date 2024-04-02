import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="xmd:flex xmd:justify-between">
            <div className="mb-6 md:mb-0">
              <Link
                href="/"
                className="flex items-center justify-center text-center"
              >
                <span>
                  <Image
                    src="../../../logos/1.svg"
                    alt="Science Maverick Logo"
                    width="150"
                    height="150"
                    className="hidden dark:block"
                  />
                  <Image
                    src="../../../logos/2.svg"
                    alt="Science Maverick Logo"
                    width="150"
                    height="150"
                    className="block dark:hidden"
                  />
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div className="hidden xmd:block">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Pages
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li>
                    <Link href={`/`}>
                      <span className="hover:text-slate-700 dark:hover:text-gray-200">
                        Home
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/about`}>
                      <span className="hover:text-slate-700 dark:hover:text-gray-200">
                        About
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/contact`}>
                      <span className="hover:text-slate-700 dark:hover:text-gray-200">
                        Contact
                      </span>
                    </Link>
                  </li>
                  {/* <li>Categories</li> */}
                  <li>
                    <Link href={`/posts`}>
                      <span className="hover:text-slate-700 dark:hover:text-gray-200">
                        Posts
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="hidden xmd:block">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="">
                    <Link href="/privacy-policy">
                      <span className="hover:text-slate-700 dark:hover:text-gray-200">
                        Privacy Policy
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service">
                      <span
                        href="/terms-of-service"
                        className="hover:text-slate-700 dark:hover:text-gray-200"
                      >
                        Terms &amp; Conditions
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between text-center">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023 <span className="events-none">Science Maverick</span>. All
              Rights Reserved.
            </span>
            <div className="smd:flex mt-4 hidden sm:mt-0">
              <Link href="https://youtube.com/@Science_maverick">
                <span className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-sm block">
                  <Image
                    src="../../../youtube.svg"
                    width="50"
                    height="25"
                    alt="YouTube logo"
                  />
                  <span className="sr-only">YouTube channel</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
