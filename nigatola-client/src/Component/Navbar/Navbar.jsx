import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import LightDarkButton from "../LightDarkButton";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Departments", path: "/departments" },
  { name: "Admissions", path: "/admissions" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `transition-all duration-[500ms]  ${
      isActive
        ? "text-base-content font-bold"
        : "text-primary hover:text-base-content hover:scale-[1.09]"
    }`;

  return (
    <header className="  sticky top-0 z-70 border-b border-base-content  bg-linear-to-t  to-base-100 from-base-200 text-white backdrop-blur-md mx-auto shadow-xl shadow-base-content/30 ">
      <nav className=" flex  items-center justify-between  py-3 sm:px-8 max-w-360 mx-auto">
        {/* Logo & University Name */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <div className="flex items-center ">
            <img
              className="h-14 w-14 object-cover md:h-20 md:w-20"
              src="/logo.png"
              alt="Nigatola University Logo"
            />

            <div className="leading-tight">
              <h1 className="text-lg font-bold tracking-[0.12em] text-primary sm:text-xl">
                NIGATOLA
              </h1>

              <p className="mt-0.5 text-[12px] font-medium tracking-[0.33em] text-base-content sm:text-xs">
                UNIVERSITY
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-5 lg:flex">
          <LightDarkButton></LightDarkButton>

          <Link
            to="/studentportal/auth/login"
            className="group inline-flex items-center gap-2 rounded-lg btn-primary px-5 py-2.5 text-sm font-semibold text-[#171717] transition "
          >
            Login
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-lg border border-white/15 p-2 text-primary transition hover:bg-white/10 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t rounded-2xl border-white/10 bg-base-100 px-5 pb-5 pt-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm transition-all duration-500 ${
                    isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-base-content hover:text-primary  hover:bg-primary/10 hover:scale-[1.01]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
           <div className="px-4 py-2">
             <LightDarkButton ></LightDarkButton>
           </div>
          </div>

          

          <Link
            to="/studentportal/auth/login"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 rounded-lg btn-primary px-5 py-3 text-sm font-semibold text-[#171717] transition "
          >
            Login
            <ArrowUpRight size={16} />
          </Link>
        </div>
      )}
    </header>
  );
}
