import { BiBold } from "react-icons/bi";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  const { data: session } = useSession();

  //
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const productCategories = categories.map((product) => product.category);
  const uniqueCategories = productCategories.filter(
    (category, index, currentVal) => currentVal.indexOf(category) === index
  );

  //

  return (
    <footer className="bg-black ">
      <footer className="footer p-10 text-base-content flex justify-around">
        <nav className="text-white">
          <header className="footer-title">Tech Valley</header>

          <ul>
            {uniqueCategories.map((category, i) => (
              <li key={i}>
                <Link
                  href={`/products/${category}`}
                  className="text-slate-200 hover:text-white text-base link-hover"
                >
                  {category}
                </Link>
              </li>
            ))}
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
