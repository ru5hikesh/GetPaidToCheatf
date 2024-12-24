import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className=" px-4 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            GETPAIDTOCHEAT
          </h2>
          <p className="text-sm">
            Register Now and start Earning Now. Best Creator Platform Ever
          </p>
          <p className="mt-4 text-sm">@t.me/blahblah</p>
        </div>

        {/* Navigation Section */}
        <div>
          <h3 className="text-lg font-bold text-yellow-400 mb-4">Navigate</h3>
          <ul className="space-y-2">
            <li>
              <a href="/games" className="text-sm hover:underline">
                Games
              </a>
            </li>
            <li>
              <a href="/pricing" className="text-sm hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="/affiliate-program" className="text-sm hover:underline">
                Affiliate Program
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold text-yellow-400 mb-4">Contact us</h3>
          <p className="text-sm mb-4">abc@getpaidtocheat.com</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        Copyright © 2024 Getpaidtocheat. All rights reserved.
      </div>
    </footer>
  );
}
