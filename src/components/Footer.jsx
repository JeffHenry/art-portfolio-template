import {
  FaBehance,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="bg-white/8 0 text-gray-800 py-8 fixed bottom-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-800">
          &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://behance.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance size="2em" />
          </a>
          <a
            href="https://instagram/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size="2em" />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size="2em" />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size="2em" />
          </a>
          <a
            href="https://bluesky.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBluesky size="2em" />
          </a>
        </div>
      </div>
    </footer>
  );
}
