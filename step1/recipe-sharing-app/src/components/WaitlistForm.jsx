import { useWaitlistForm } from '../hooks/useWaitlistForm';
import { WAITLIST_CONTENT } from '../constants';
import styles from './WaitlistForm.module.css';

function WaitlistForm() {
  const { formData, submitted, errors, handleChange, handleSubmit } = useWaitlistForm();

  return (
    <div className={styles.waitlistCard}>
      <h2 className={styles.cardTitle}>{WAITLIST_CONTENT.title}</h2>
      <p className={styles.cardDescription}>{WAITLIST_CONTENT.description}</p>

      {submitted ? (
        <div className={styles.successMessage}>
          <svg
            className={styles.successIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p>{WAITLIST_CONTENT.successMessage}</p>
        </div>
      ) : (
        <form className={styles.waitlistForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? styles.inputError : ''}
              placeholder="Enter your name"
              aria-describedby={errors.name ? 'name-error' : undefined}
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && (
              <span id="name-error" className={styles.errorText} role="alert">
                {errors.name}
              </span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? styles.inputError : ''}
              placeholder="Enter your email"
              aria-describedby={errors.email ? 'email-error' : undefined}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && (
              <span id="email-error" className={styles.errorText} role="alert">
                {errors.email}
              </span>
            )}
          </div>

          <button type="submit" className={styles.submitButton}>
            Join Waitlist
          </button>
        </form>
      )}
    </div>
  );
}

export default WaitlistForm;
