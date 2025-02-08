import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { APP_NAME } from "../Constants/GlobalConstants";

const Footer = () => {
  return (
    <section className="w-full h-72 bg-lime-500">
      <div className="w-full h-16 bg-lime-600 flex flex-col md:flex-row justify-between items-center p-4">
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start">
          <span className="text-4xl p-2 text-white font-roboto">
            {APP_NAME}
          </span>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="flex items-center gap-2">
            <span className="text-white text-xl hidden md:block">
              Contact Us At:
            </span>
            <a href="#">
              <FaWhatsapp className="text-white text-2xl hover:text-black" />
            </a>
            <a href="#">
              <FaFacebook className="text-white text-2xl hover:text-black" />
            </a>
            <a href="#">
              <FaXTwitter className="text-white text-2xl hover:text-black" />
            </a>
            <a href="#">
              <FaInstagram className="text-white text-2xl hover:text-black" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-auto flex flex-col md:flex-row justify-center items-start gap-4 p-4">
        <div className="w-full md:w-1/4 flex flex-col gap-2 text-lg">
          <a className="font-bold text-white hover:text-black" href="#">
            More About GrocerymoreStore
          </a>
          <a className="text-white hover:text-black" href="#">
            Mission Statement
          </a>
          <a className="text-white hover:text-black" href="#">
            Accreditation and Approval
          </a>
          <a className="text-white hover:text-black" href="#">
            Caribbean Leader
          </a>
          <a className="text-white hover:text-black" href="#">
            Virtual Tour
          </a>
        </div>

        <div className="w-full md:w-1/4 flex flex-col gap-2 text-lg">
          <a className="font-bold text-white hover:text-black" href="#">
            Solutions
          </a>
          <a className="text-white hover:text-black" href="#">
            Managed WordPress Posting
          </a>
          <a className="text-white hover:text-black" href="#">
            Agencies
          </a>
          <a className="text-white hover:text-black" href="#">
            Freelancers
          </a>
          <a className="text-white hover:text-black" href="#">
            WooCommerce
          </a>
        </div>

        <div className="w-full md:w-1/4 flex flex-col gap-2 text-lg">
          <a className="font-bold text-white hover:text-black" href="#">
            Resource
          </a>
          <a className="text-white hover:text-black" href="#">
            Blog
          </a>
          <a className="text-white hover:text-black" href="#">
            eBook
          </a>
          <a className="text-white hover:text-black" href="#">
            Knowledge Base
          </a>
          <a className="text-white hover:text-black" href="#">
            Customer Reviews
          </a>
        </div>

        <div className="w-full md:w-1/4 flex flex-col gap-2 text-lg">
          <a className="font-bold text-white hover:text-black" href="#">
            Managed WordPress Posting
          </a>
          <a className="text-white hover:text-black" href="#">
            About Us
          </a>
          <a className="text-white hover:text-black" href="#">
            Careers
          </a>
          <a className="text-white hover:text-black" href="#">
            Customer Service
          </a>
          <a className="text-white hover:text-black" href="#">
            Contacts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
