import BannerPng from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";

const bgStyle ={
  backgroundImage: `url(${BannerPng})`,
  backgroundSize: "cover",
  backgroundRepeat:"no-repeat",
  backgroundPosition: "center",
}

const Banner3 = () => {
  return (
    <section className="container mb-12">
      <div style ={bgStyle} className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl">
        {/* Banner Image  */}
        <div>

        </div>
        {/* Brand Info  */}
        <div className="flex flex-col justify-center">
          <div className=" text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className=" text-3xl lg:text-5xl font-bold uppercase"
            >
              Get Fresh Fruits Today
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Discover the essence of freshness with our handpicked, sun-kissed
              fruits. Our brand is committed to delivering organic, ripe, and
              naturally flavorful produce, packed with nutrition and bursting
              with vibrant taste. Experience the pure, wholesome goodness straight from farm to table, ensuring quality you can trust in every bite..
            </motion.p>
          
            <motion.div
              variants={FadeLeft(0.9)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn">Order Now</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
