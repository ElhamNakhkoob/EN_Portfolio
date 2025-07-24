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

  // ...existing code...
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] p-4 md:p-6 text-[#1e1e1e] mt-8 md:mt-20 pt-2 md:pt-8">
      <h1 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">
        {t("contact.heading")}
      </h1>
      <p className="text-sm md:text-lg mb-4 md:mb-8 text-center">
        {t("contact.subheading")}
      </p>

      {message && (
        <div
          className={`mb-2 md:mb-4 text-center font-semibold text-sm md:text-base ${
            message.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {message.text}
        </div>
      )}

      <form
        ref={form}
        action={formAction}
        className="w-full max-w-md px-2 md:px-0"
      >
        <div className="mb-2 md:mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-semibold mb-1 md:mb-2"
          >
            {t("contact.nameLabel")}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={t("contact.namePlaceholder")}
            required
            className="w-full py-2 px-3 rounded border border-[#1e1e1e] text-[#1e1e1e] bg-white focus:outline-none focus:ring-2 focus:ring-[#662809] text-sm md:text-base"
          />
        </div>

        <div className="mb-2 md:mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-semibold mb-1 md:mb-2"
          >
            {t("contact.emailLabel")}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={t("contact.emailPlaceholder")}
            required
            className="w-full py-2 px-3 rounded border border-[#1e1e1e] text-[#1e1e1e] bg-white focus:outline-none focus:ring-2 focus:ring-[#662809] text-sm md:text-base"
          />
        </div>

        <div className="mb-3 md:mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-semibold mb-1 md:mb-2"
          >
            {t("contact.messageLabel")}
          </label>
          <textarea
            name="message"
            id="message"
            rows="3"
            placeholder={t("contact.messagePlaceholder")}
            required
            className="w-full py-2 px-3 rounded border border-[#1e1e1e] text-[#1e1e1e] bg-white focus:outline-none focus:ring-2 focus:ring-[#662809] text-sm md:text-base resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full font-bold py-3 md:py-2 px-4 rounded bg-white text-[#1e1e1e] border border-[#1e1e1e] hover:bg-[#f3f3f3] transition text-sm md:text-base"
        >
          {t("contact.buttonText")}
        </button>
      </form>
    </div>
  );
};

export default Contact;
