import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { data: session } = useSession();

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

  return (
    <nav className="navbar bg-black flex justify-between">
      <Link
        href="/"
        className="btn btn-ghost hover:bg-inherit text-white normal-case text-xl"
      >
        Tech Valley
      </Link>

      <div className="navbar-end w-full">
        <details className="dropdown dropdown-end">
          <summary
            tabIndex={0}
            className="btn btn-ghost text-white hover:bg-slate-800 transition duration-1000"
          >
            Categories
          </summary>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
          >
            {uniqueCategories.map((category, i) => (
              <li key={i}>
                <Link
                  href={`/products/${category}`}
                  className="text-slate-200 hover:text-white text-base"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </details>

        {/* pc builder button */}
        <div className="flex items-center pl-8">
          <Link href="/pcbuilder">
            <button className="text-slate-200 hover:text-white text-base hover:bg-slate-800 p-2 rounded transition duration-700">
              PC Builder
            </button>
          </Link>

          <div className="ml-2">
            {" "}
            {/* user sign in & sign up */}
            {!session?.user && (
              <Link href="/login">
                <button className="text-slate-200 hover:text-white text-base hover:bg-slate-800 p-2 rounded transition duration-700 ">
                  Login
                </button>
              </Link>
            )}
            {/* logout */}
            {session?.user && (
              <button
                onClick={() => signOut()}
                className="text-slate-200 hover:text-white text-base hover:bg-slate-800 p-2 rounded transition duration-700"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

//
