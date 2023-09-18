import styles from "../style";
import { feedback } from "../constants";
import { quotes } from "../assets";
const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42.6px] h-[27.6px] object-contain"
    />
    <p className={`${styles.paragraph} max-w-[300px] mt-5`}>{content}</p>
    <div className="flex my-4">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col justify-center ml-3">
        <p className="font-poppins font-semibold text-[18px] leading-[23px] mb-1 text-white">
          {name}
        </p>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
