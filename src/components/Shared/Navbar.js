import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-950 rounded-box w-52"
          >
            <li>
              <Link
                href="/cpu"
                className="text-slate-200 hover:text-white text-base"
              >
                CPU / Processor
              </Link>
            </li>
            <li>
              <Link
                href="/motherboard"
                className="text-slate-200 hover:text-white text-base"
              >
                Motherboard
              </Link>
            </li>
            <li>
              <Link
                href="/ram"
                className="text-slate-200 hover:text-white text-base"
              >
                RAM
              </Link>
            </li>
            <li>
              <Link
                href="/powersupply"
                className="text-slate-200 hover:text-white text-base"
              >
                Power Supply Unit
              </Link>
            </li>
            <li>
              <Link
                href="/storage"
                className="text-slate-200 hover:text-white text-base"
              >
                Storage Device
              </Link>
            </li>
            <li>
              <Link
                href="/monitor"
                className="text-slate-200 hover:text-white text-base"
              >
                Monitor
              </Link>
            </li>
            <li>
              <Link
                href="/others"
                className="text-slate-200 hover:text-white text-base"
              >
                Others
              </Link>
            </li>
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
              <button className="text-slate-200 hover:text-white text-base hover:bg-slate-800 p-2 rounded transition duration-700 ">
                Login
              </button>
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
