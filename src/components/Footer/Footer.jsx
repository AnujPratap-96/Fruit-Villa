import { FaFacebookF , FaInstagram , FaTwitter, FaLeaf , FaWhatsapp } from "react-icons/fa";
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-primary/10  py-12 mt-12">
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1 , delay:0.2}}
    className="container flex justify-between items-center">
     {/* Logo Section  */}
     <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <p className=" text-primary ">Fruit</p>
          <p className=" text-secondary">Villa</p>
          <FaLeaf className=" text-green-500" />
        </div>
     {/* Social Icon Section  */}
     <div className="text-3xl flex items-center gap-4 mt-4 text-gray-700">
     <FaInstagram/>
     <FaTwitter/>
     <FaFacebookF/>
     <FaWhatsapp/>
     </div>
    </motion.div>
    </footer>
  )
};

export default Footer;
