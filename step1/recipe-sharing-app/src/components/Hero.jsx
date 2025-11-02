import { HERO_CONTENT } from '../constants';
import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={styles.heroSection}>
      <h1 className={styles.heroTitle}>{HERO_CONTENT.title}</h1>
      <p className={styles.heroSubtitle}>{HERO_CONTENT.subtitle}</p>
    </div>
  );
}

export default Hero;
