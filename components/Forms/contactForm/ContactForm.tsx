"use client";
import styles from "./ContactForm.module.css";
import { FC, KeyboardEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type FormData = {
  email: string;
  message: string;
};

const ContactForm: FC = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showMessageInput, setShowMessageInput] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const handleEmailChange = (event: { target: { value: string } }) => {
    const { value } = event.target;
    setValue("email", value);

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(value));
  };

  // opens message input field
  const handleDocumentKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter" && isEmailValid) {
      console.log("email valid. opening message input....");
      setShowMessageInput(true);
    }
  };

  // sending user message to nodemailer
  function onSubmit(data: FormData) {
    sendEmail(data);

    // reset form
    setValue("email", "");
    setValue("message", "");

    // !close contact form collapsible.

    // display feedback message
    toast.success("Message Sent!");
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex md:text-lg">
          <div>
            <label className="label">
              <span className="label-text text-lg">
                contact:<span className="text-cyan-500">email</span> $
              </span>
            </label>
          </div>

          <div className="px-2 md:w-2/4">
            <input
              type="email"
              className={styles.inputField}
              autoFocus
              placeholder="Enter your email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email Required!",
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  message: "Please enter a valid email",
                },
              })}
              onChange={handleEmailChange}
              onKeyDown={handleDocumentKeyDown}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
        </div>

        {/* message input: hidden on load */}
        {showMessageInput && (
          <div className="md:flex py-2 lg:text-lg">
            <div>
              <label className="label">
                <p className="label-text text-lg">
                  contact:<span className="text text-cyan-500">message</span> $
                </p>
              </label>
            </div>

            <div className="flex items-center justify-center relative md:w-2/4 px-2">
              <input
                type="text"
                autoFocus
                className={`${styles.inputField} h-auto`}
                placeholder="message..."
                {...register("message", {
                  required: true,
                  minLength: 4,
                })}
              />
              <button
                type="submit"
                className="absolute right-2 btn btn-sm btn-square"
              >
                <PaperPlaneIcon className="text-info -rotate-45" />
              </button>
            </div>
          </div>
        )}
      </form>
      {/* React-toastify alert box */}
      <ToastContainer
        role="alert"
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={true}
        transition={Flip}
        pauseOnHover
        closeOnClick
      />
    </>
  );
};

export default ContactForm;
