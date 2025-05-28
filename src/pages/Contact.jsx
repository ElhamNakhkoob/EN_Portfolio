import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import { useActionState } from "react";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const sendEmail = async (prevState, formData) => {
    try {
      await emailjs.sendForm(
        "service_l7ljht9",
        "template_t6342xo",
        form.current,
        "sQwe6SyvduUQRNwRS"
      );
      form.current.reset();
      return { type: "success", text: t("contact.successMessage") };
    } catch (error) {
      console.error(error);
      return { type: "error", text: t("contact.errorMessage") };
    }
  };

  const [message, formAction] = useActionState(sendEmail, null);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4" style={{ color: "#DADADA" }}>
        {t("contact.heading")}
      </h1>
      <p className="text-lg mb-8" style={{ color: "#DADADA" }}>
        {t("contact.subheading")}
      </p>
      {message && (
        <div
          className={`mb-4 text-center font-semibold ${
            message.type === "success" ? "text-green-400" : "text-red-400"
          }`}
        >
          {message.text}
        </div>
      )}
      <form ref={form} action={formAction} className="w-full max-w-md">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-bold mb-2"
            style={{ color: "#DADADA" }}
          >
            {t("contact.nameLabel")}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={t("contact.namePlaceholder")}
            required
            className="w-full py-2 px-3 rounded focus:outline-none bg-transparent"
            style={{ border: "1px solid #DADADA", color: "#DADADA" }}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-bold mb-2"
            style={{ color: "#DADADA" }}
          >
            {t("contact.emailLabel")}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={t("contact.emailPlaceholder")}
            required
            className="w-full py-2 px-3 rounded focus:outline-none bg-transparent"
            style={{ border: "1px solid #DADADA", color: "#DADADA" }}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-bold mb-2"
            style={{ color: "#DADADA" }}
          >
            {t("contact.messageLabel")}
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder={t("contact.messagePlaceholder")}
            required
            className="w-full py-2 px-3 rounded focus:outline-none bg-transparent"
            style={{ border: "1px solid #DADADA", color: "#DADADA" }}
          ></textarea>
        </div>
        <button
          type="submit"
          className="font-bold py-2 px-4 rounded focus:outline-none cursor-pointer"
          style={{ backgroundColor: "#DADADA", color: "#000000" }}
        >
          {t("contact.buttonText")}
        </button>
      </form>
    </div>
  );
};

export default Contact;
