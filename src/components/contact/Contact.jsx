"use client";
import { sendEmail } from "@/utils/send-email";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import SplitType from "split-type";
import Modal from "./Modal";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import Loader from "@/utils/loader/Loader";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      company: "",
      help: "",
      email: "",
      tel: "",
    },
  });
  const [hover, setHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = (data) => {
    setIsLoading(true);
    try {
      sendEmail(data, () => {
        setIsModalOpen(true);
        setIsLoading(false);
        setSubmitStatus("success");
      });
    } catch (error) {
      setIsLoading(false);
      setSubmitStatus("error");
      console.error(error);
    }
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (submitStatus === "success") {
      reset(); // Réinitialiser le formulaire seulement après la fermeture de la modale de succès
      // setIsLoading(false);
    }
    setSubmitStatus(null); // Réinitialiser le statut de soumission
    setIsLoading(false);
  };
  const container = useRef(null);
  const tl = useRef();
  const tlSend = useRef();

  useGSAP(
    () => {
      gsap.set(".wrapper", { autoAlpha: 1 });
      gsap.set(".animated-text, .animated-input", { y: "100%" });

      tl.current = gsap
        .timeline({ delay: 1.25 })
        .to(".animated-text", {
          y: 0,
          duration: 1.3,
          stagger: 0.03,
          ease: "expo.out",
        })
        .to(
          ".animated-input",
          {
            y: 0,
            duration: 1,
            stagger: 0.03,
            ease: "expo.out",
          },
          "-=1",
        );
    },
    { scope: container },
  );

  useGSAP(
    () => {
      let text1 = SplitType.create(".text1", { splitTypeTypes: "chars" });
      let text2 = SplitType.create(".text2", { splitTypeTypes: "chars" });
      tlSend.current = gsap
        .timeline()
        .to(text1.chars, {
          y: -100,
          stagger: 0.03,
          ease: "power1.inOut",
        })
        .to(
          text2.chars,
          {
            y: -59,
            stagger: 0.03,
            ease: "power1.inOut",
          },
          0,
        );
    },
    { scope: container },
  );

  useEffect(() => {
    if (hover) {
      tlSend.current.play();
    } else {
      tlSend.current.reverse();
    }
  }, [hover]);

  const displayError = (field, placeholder) => {
    console.log("teltel", errors[field]);
    if (errors[field]) {
      return t("contact_empty_field");
    }
    if (errors[field] === "tel") {
      return t("contact_tel_error");
    }
    return placeholder;
  };

  return (
    <div ref={container}>
      <form
        className="wrapper invisible px-5 pt-8 font-bigilla text-step_3 leading-[1.2] text-secondary lg:px-20 lg:text-step_4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="overflow-hidden">
          <div className="animated-text">
            <h3>{t("contact_hello")}</h3>
          </div>
        </div>
        <div className="gap-6 lg:flex">
          <div className="overflow-hidden">
            <div className="animated-text">{t("contact_name")}</div>
          </div>
          <div className="relative overflow-hidden lg:w-1/3">
            <div className="custom_after animated-input">
              <input
                id="name"
                name="name"
                type="text"
                placeholder={displayError(
                  "name",
                  t("contact_name_placeholder"),
                )}
                className={`w-full bg-transparent placeholder:text-step__1 placeholder:italic ${errors.name && "placeholder:text-red-400"} focus:outline-none`}
                {...register("name", { required: true })}
              />
            </div>
          </div>
        </div>
        <div className="gap-6 lg:flex">
          <div className="overflow-hidden">
            <div className="animated-text">{t("contact_company")}</div>
          </div>
          <div className="relative overflow-hidden lg:w-1/3">
            <div className="custom_after animated-input w-full">
              <input
                id="company"
                type="text"
                placeholder={t("contact_company_placeholder")}
                className="w-full bg-transparent placeholder:text-step__1 placeholder:italic focus:outline-none"
                {...register("company", { required: false })}
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="overflow-hidden">
            <div className="animated-text">{t("contact_help")}</div>
          </div>
          <div className="relative overflow-hidden">
            <div className="custom_after animated-input">
              <input
                id="help"
                type="text"
                placeholder={displayError(
                  "help",
                  t("contact_help_placeholder"),
                )}
                className={`w-full bg-transparent placeholder:text-step__1 placeholder:italic ${errors.help && "placeholder:text-red-400"} focus:outline-none`}
                {...register("help", { required: true })}
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="overflow-hidden">
            <div className="animated-text">{t("contact_mail")}</div>
          </div>
          <div className="relative overflow-hidden">
            <div className="custom_after animated-input">
              <input
                id="email"
                type="email"
                placeholder={displayError(
                  "email",
                  t("contact_mail_placeholder"),
                )}
                className={`w-full bg-transparent placeholder:text-step__1 placeholder:italic ${errors.email && "placeholder:text-red-400"} focus:outline-none`}
                {...register("email", { required: true })}
              />
            </div>
          </div>
        </div>
        <div className="gap-6 lg:flex">
          <div className="overflow-hidden">
            <div className="animated-text">{t("contact_tel")}</div>
          </div>
          <div className="relative overflow-hidden lg:w-1/3">
            <div
              className={`custom_after animated-input ${errors.tel && "text-red-400"}`}
            >
              <input
                id="tel"
                type="tel"
                placeholder={displayError("tel", t("contact_tel_placeholder"))}
                className="w-full bg-transparent placeholder:text-step__1 placeholder:italic focus:outline-none"
                {...register("tel", {
                  required: false,
                  pattern: {
                    value: /^\+?[0-9]*$/, // Permet uniquement les chiffres et un '+' au début
                    message: t("contact_tel_error"), // Message d'erreur
                  },
                })}
              />
            </div>
            {errors.tel && (
              <span className="text-step_p_1 text-red-400">
                {errors.tel.message}
              </span>
            )}
          </div>
        </div>
        <div className="mb-28 overflow-hidden pt-4">
          <div className="animated-text flex flex-col items-center md:flex-row md:gap-11">
            <div className="mt-20 flex gap-4 overflow-hidden pb-12 text-5xl">
              ~
              <button
                type="submit"
                className={`flex h-14 w-fit ${isLoading ? "cursor-progress" : "cursor-pointer"} flex-col overflow-hidden`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                disabled={isLoading}
              >
                <span className="text1 mb-2"> {t("contact_send")} </span>
                <span className="text2" aria-hidden>
                  {t("contact_send")}
                </span>
              </button>
              ~
            </div>
            <div className="">{isLoading && <Loader />}</div>
          </div>
        </div>
      </form>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>{t("contact_success_title")}</h2>
        <p>{t("contact_success_text")}</p>
        <Fireworks autorun={{ speed: 3 }} />
      </Modal>
    </div>
  );
};

export default Contact;
