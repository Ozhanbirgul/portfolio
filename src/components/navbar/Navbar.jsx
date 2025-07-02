import "./navbar.scss"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {motion} from "framer-motion";
import Siderbar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Siderbar />
      <div className="wrapper">
        <span 
          >
            <img src="/logom.png" className="logo" alt="kişisel logom" />
        </span>
        <div className="social">
            <a href="https://github.com/kullaniciAdi" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://linkedin.com/in/kullaniciAdi" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
