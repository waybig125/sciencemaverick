import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer class="bg-white dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="xmd:flex xmd:justify-between">
            <div class="mb-6 md:mb-0">
              <Link
                href="/"
                class="flex items-center justify-center text-center"
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
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div className="hidden xmd:block">
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Pages
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href={`/`}>Home</Link>
                  </li>
                  <li>
                    <Link href={`/about`}>About</Link>
                  </li>
                  <li>
                    <Link href={`/contact`}>Contact</Link>
                  </li>
                  {/* <li>Categories</li> */}
                  <li>
                    <Link href={`/posts`}>Posts</Link>
                  </li>
                </ul>
              </div>
              <div className="hidden xmd:block">
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between text-center">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023 <span class="events-none">Science Maverick</span>. All
              Rights Reserved.
            </span>
            <div class="smd:flex mt-4 hidden sm:mt-0">
              <Link href="https://youtube.com/@Science_maverick">
                <span class="text-gray-500 hover:text-gray-900 dark:hover:text-white text-sm block">
                  <Image
                    src="../../../youtube.svg"
                    width="50"
                    height="25"
                    alt="YouTube logo"
                  />
                  <span class="sr-only">YouTube channel</span>
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
