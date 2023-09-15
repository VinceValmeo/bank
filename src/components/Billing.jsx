import styles, { layout } from "../style";
import { bill, apple, google } from "../assets";

const Billing = () => (
  <section className={layout.sectionReverse} id="product">
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100] z-index[5]" />
      <div className="absolute z-[3] -left-1 top-0 w-[60%] h-[60%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1 bottom-0 w-[60%] h-[60%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        {" "}
        <img src={apple} alt="Appstore" className="mr-6 cursor-pointer" />
        <img src={google} alt="Google Play Store" className="cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;
