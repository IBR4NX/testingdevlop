
import { FaInstagram, FaFacebook,FaX ,FaWhatsapp ,FaGithub } from "react-icons/fa6";


export default function Footer() {


  return (
    <footer className=" py-8 mx-5 border-t divide-y *:py-5 divide-gray-950/10 dark:divide-white/5 border-gray-950/10 dark:border-white/10 mt-20 grid grid-cols-1 ">

      <div className="container mx-auto grid grid-cols-2 md:grid-cols-2 gap-8 px-4">

        {/* Social Media Section */}


        {/* Quick Links Section */}
        <div >
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div dir="ltr" className=" ">
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <p>location:  Mekhlaf, TAIZ</p>
          <a href="tel:+967738386364">Phone: +967 738 386 364</a>
          <a href="mailto:ibr4nx@gmail.com">Email: ibr4nx@gmail.com</a>
        </div>

      </div>
      <div className="  flex flex-col md:flex-row gap-y-10 justify-between text-white/40 ">

        <div className="flex flex-col  justify-between items-center mx-10  ">
          <h2 className=" text-lg max-md: font-bold mb-4">Follow Us</h2>
          <div className="  flex justify-between w-full *:size-10 gap-5 *:transition-colors  *:hover:text-white **:size-8 ">
            <a href="https://www.facebook.com/ibr4nx" className="" ><FaFacebook/></a>
            <a href="https://www.instagram.com/ibr4nx" className="" ><FaInstagram/></a>
            <a href="https://www.twitter.com/ibr4nx" className="" ><FaX/></a>
            <a href="https://www.whatsapp.com" className="" ><FaWhatsapp/></a>

          </div>
        </div>
        <div dir="ltr" className="flex gap-2 justify-center items-center  ">
          <FaGithub/>
          <p>&copy; {new Date().getFullYear()} Ibrahim Al-Mekhlafi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}