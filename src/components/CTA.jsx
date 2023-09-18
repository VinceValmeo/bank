import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`my-20`}>
    <div className="bg-black-gradient-2 rounded-3xl p-20 flex items-center justify-between flex-col md:flex-row">
      <div>
        <h2 className={styles.heading2}>Let’s try our service now!</h2>

        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="mt-10">
        <Button />
      </div>
    </div>
  </section>
);

export default CTA;
