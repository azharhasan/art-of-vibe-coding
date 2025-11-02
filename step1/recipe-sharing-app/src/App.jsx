import Hero from './components/Hero';
import WaitlistForm from './components/WaitlistForm';
import FoodGallery from './components/FoodGallery';
import Features from './components/Features';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <Hero />
      <WaitlistForm />
      <FoodGallery />
      <Features />
    </div>
  );
}

export default App;
