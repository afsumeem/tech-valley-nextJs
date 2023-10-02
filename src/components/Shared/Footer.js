import { BiBold } from "react-icons/bi";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Footer = () => {
  const { data: session } = useSession();

  return (
    <footer className="bg-black ">
      <footer className="footer p-10 text-base-content flex justify-around">
        <nav className="text-white">
          <header className="footer-title">Tech Valley</header>

          <ul>
            <li>
              <Link
                href="/cpu"
                className="text-slate-200 hover:text-white text-base link-hover"
              >
                CPU / Processor
              </Link>
            </li>
            <li>
              <Link
                href="/motherboard"
                className="text-slate-200 hover:text-white text-base link-hover"
              >
                Motherboard
              </Link>
            </li>
            <li>
              <Link
                href="/ram"
                className="text-slate-200 hover:text-white text-base link-hover"
              >
                RAM
              </Link>
            </li>
            <li>
              <Link
                href="/powersupply"
                className="text-slate-200 hover:text-white text-base link-hover"
              >
                Power Supply Unit
              </Link>
            </li>
            <li>
              <Link
                href="/storage"
                className="text-slate-200 hover:text-white text-base link-hover"
              >
                Storage Device
              </Link>
            </li>
            <li>
              <Link
                href="/monitor"
                className="text-slate-200 hover:text-white text-base link-hover"
              >
                Monitor
              </Link>
            </li>
            <li>
              <Link
                href="/others"
                className="text-slate-200 hover:text-white text-base link-hover"
              >
                Others
              </Link>
            </li>

            {!session?.user && (
              <Link
                href="/login"
                className="text-slate-200 hover:text-white text-base link-hover"
              >
                Login
              </Link>
            )}
            {/* logout */}
            {session?.user && (
              <button
                onClick={() => signOut()}
                className="text-slate-200 hover:text-white text-base link-hover"
              >
                Logout
              </button>
            )}
          </ul>
        </nav>
        <nav className="text-white">
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t  text-base-content border-base-30">
        <aside className="items-center grid-flow-col">
          <span className="text-white text-3xl">
            <BiBold />
          </span>
          <p className="text-white">
            <span className="font-bold">Tech Valley</span> <br />
            Copyright &copy;2023 All Rights Reserved.
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <span className="text-white text-xl">
                <BiLogoFacebookCircle />
              </span>
            </a>
            <a>
              <span className="text-white text-xl">
                <BiLogoTwitter />
              </span>
            </a>
            <a>
              <span className="text-white text-xl">
                <BiLogoYoutube />
              </span>
            </a>
          </div>
        </nav>
      </footer>
    </footer>
  );
};

export default Footer;
