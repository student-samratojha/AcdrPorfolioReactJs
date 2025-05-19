import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/samratOjhaLogo.webp";
import { FaSquareXTwitter } from "react-icons/fa6";
function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex items-center shrink-0">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-1" width={60} height={53} alt="logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="/" aria-label="LinkedIn" target="_blank">
          <FaLinkedin />
        </a>
        <a href="/" aria-label="GitHub" target="_blank">
          <FaGithub />
        </a>
        <a href="/" aria-label="Instagram" target="_blank">
          <FaInstagram />
        </a>
        <a href="/" aria-label="Twitter" target="_blank">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
