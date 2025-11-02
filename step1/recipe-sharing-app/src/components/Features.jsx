import { FEATURES } from '../constants';
import styles from './Features.module.css';

function Features() {
  return (
    <div className={styles.featuresSection}>
      {FEATURES.map((feature) => (
        <div key={feature.id} className={styles.feature}>
          <div className={styles.featureIcon} aria-hidden="true">
            {feature.icon}
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Features;
