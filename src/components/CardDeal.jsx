import styles, { layout } from "../style";
import { card } from "../assets";
import { Button } from "../components";
const CardDeal = () => (
  <section className={layout.section} id="product">
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Button />
      </div>
    </div>
    <div className={layout.sectionImgReverse}>
      <img src={card} alt="card" className="w-[100%] h-[100]" />
    </div>
  </section>
);

export default CardDeal;
