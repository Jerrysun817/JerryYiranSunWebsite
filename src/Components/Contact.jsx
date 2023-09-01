import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSending, setIsSending] = useState(false);

  const submitMessage = (data) => {
    setIsSending(true);

    emailjs
      .send("service_3amt6v9", "template_tak6hjd", data, "-QmFSgsRfPaEkn-oU")
      .then((response) => {
        alert("Email successfully sent!", response.status, response.text);
        reset();
      })
      .catch((err) => console.error("Failed to send email. Error: ", err));

    setTimeout(() => {
      setIsSending(false);
    }, 2000);
  };

  return (
    <form noValidate onSubmit={handleSubmit(submitMessage)}>
      <div className="grid grid-cols-2 grid-flow-row gap-4 md:px-64 px-20">
        <div className="col-span-2">
          <h1 className="text-center text-[40px] font-semibold">
            Get in touch
          </h1>
        </div>

        <div className={`md:col-span-1 col-span-2 row-span-1 `}>
          <input
            type="text"
            placeholder="First Name *"
            name="firstName"
            className={`input input-bordered w-full ${
              errors.firstName ? "input-error" : ""
            }`}
            {...register("firstName", {
              required: {
                value: true,
                message: "Please enter your first name",
              },
            })}
          />
          {errors.firstName && (
            <p className="text-red-500 text-[13px] px-3">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="md:col-span-1 col-span-2 row-span-1">
          <input
            type="text"
            placeholder="Last Name *"
            name="lastName"
            className={`input input-bordered w-full ${
              errors.lastName ? "input-error" : ""
            }`}
            {...register("lastName", {
              required: {
                value: true,
                message: "Please enter your last name",
              },
            })}
          />
          {errors.lastName && (
            <p className=" text-red-500 text-[13px] px-3">
              {errors.lastName.message}
            </p>
          )}
        </div>
        <div className="md:col-span-1 col-span-2 row-span-1">
          <input
            type="text"
            name="email"
            placeholder="Email *"
            className={`input input-bordered w-full ${
              errors.email ? "input-error" : ""
            }`}
            {...register("email", {
              required: {
                value: true,
                message: "Please enter your email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-[13px] px-3">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="md:col-span-1 col-span-2 row-span-1">
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number *"
            className={`input input-bordered w-full ${
              errors.phoneNumber ? "input-error" : ""
            }`}
            {...register("phoneNumber", {
              required: {
                value: true,
                message: "Please enter your phone number",
              },
            })}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-[13px] px-3">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
        <div className="col-span-2 row-span-2 ">
          <textarea
            name="userMessage"
            className={`textarea textarea-bordered h-full w-full ${
              errors.userMessage ? "textarea-error" : ""
            }`}
            placeholder="Type your message here *"
            maxLength={1000}
            {...register("userMessage", {
              required: {
                value: true,
                message: "Please enter your message",
              },
            })}
          />
          {errors.userMessage && (
            <p className="text-red-500 text-[13px] px-3">
              {errors.userMessage.message}
            </p>
          )}
        </div>
        <div className="col-span-2 flex justify-center mt-3">
          <button type="submit " className="btn" disabled={isSending}>
            {isSending ? (
              <span className="loading loading-dots loading-md"></span>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};
