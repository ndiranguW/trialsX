// "use client";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <>
      <form>
        <div className="md:flex md:text-lg">
          <label className="label">
            <span className="label-text text-lg">
              contact:<span className="text text-cyan-500">email</span> $
            </span>
          </label>
          <div>
            <input
              name="email"
              type="email"
              className={`caret-inherit text-current ${styles.inputField}`}
              autoFocus
            />
          </div>
          {/* error-msg || feedback msg */}
        </div>

        <div className="hidden lg:text-lg">
          <div className="md:flex">
            <label className="label">
              <span className="label-text text-lg">
                contact:<span className="text text-cyan-500">message</span> $
              </span>
            </label>
            <div>
              <input
                name="email"
                type="email"
                className={`caret-inherit text-current ${styles.inputField}`}
                placeholder="email"
                autoFocus
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
