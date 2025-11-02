import { GALLERY_ITEMS } from '../constants';
import styles from './FoodGallery.module.css';

function FoodGallery() {
  return (
    <div className={styles.foodGallery}>
      <h2 className={styles.galleryTitle}>Get Inspired</h2>
      <div className={styles.galleryGrid}>
        {GALLERY_ITEMS.map((item) => (
          <div key={item.id} className={styles.galleryItem}>
            <img
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              loading="lazy"
            />
            <div className={styles.galleryOverlay}>
              <span>{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodGallery;
