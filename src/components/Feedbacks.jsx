import { motion } from "framer-motion";
import { styles } from "../Styles";
import SectionWraper from "../hoc/SectionWraper";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  testimonial,
  name,
  designation,
  company,
  image,
  index,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.7)}
    className="bg-black-200 rounded-3xl p-10 w-full xs:w-[300px]"
  >
    <p className=" text-white font-black text-[48px]">"</p>
    <div className="mt-1">
      <p className="text-white text-[18px]  mb-4 tracking-wider">
        {testimonial}
      </p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white text-[16px] font-medium">
            <span className="blue-text-gradient">@</span>
            {name}
          </p>
          <p className="mt-1 text-secondary text-[12px] font-medium ">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-2xl p-5">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()} className="">
          <p className={`${styles.sectionSubText}`}>What my clients say</p>
          <h2 className={`${styles.sectionHeadText} text-white`}>
            Testimonials.
          </h2>
        </motion.div>
      </div>
      <div className={`${styles.padding} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWraper(Feedbacks, "");
