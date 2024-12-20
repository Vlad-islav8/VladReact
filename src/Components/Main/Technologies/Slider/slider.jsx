import { useState } from "react";
import styles from "./slider.module.css";
export default function Slider(props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideItems = props.data.dataInfo.map((el, index) => (
    <div
      className={`${styles.slide} ${
        currentSlide === index ? styles.active : ""
      }`}
      key={index}
      style={{
        transform: `translateX(${100 * (index - currentSlide)}%)`,
      }}
    >
      <img src={el.url} alt={el.title} />
    </div>
  ));

  return (
    <div className={styles.slider}>
      <div className={styles.sliderTrack}>{slideItems}</div>
      <div className={styles.sliderControls}>
        <button
          className={styles.prevBtn}
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === 0 ? slideItems.length - 1 : prev - 1
            )
          }
        >
          Предыдущий
        </button>
        <div className={styles.sliderDots}>
          {slideItems.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                currentSlide === index ? styles.activeDot : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        <button
          className={styles.nextBtn}
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === slideItems.length - 1 ? 0 : prev + 1
            )
          }
        >
          Следующий
        </button>
      </div>
    </div>
  );
}
