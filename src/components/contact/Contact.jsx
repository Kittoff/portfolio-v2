"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    sendEmail(data);
  }

  const container = useRef(null);
  const tl = useRef();

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
        ); // Start slightly before the text animation ends
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <form
        className="wrapper invisible bg-customBlack px-5 pt-8 font-bigilla text-step_3 leading-[1.2] text-white lg:px-20 lg:text-step_4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="overflow-hidden">
          <div className="animated-text">
            <h3>Bonjour Christophe, </h3>
          </div>
        </div>

        <div className="gap-6 lg:flex">
          <div className="overflow-hidden">
            <div className="animated-text">mon nom est</div>
          </div>
          <div className="relative overflow-hidden lg:w-1/3">
            <div className="custom_after animated-input">
              <input
                id="name"
                type="text"
                placeholder="votre nom*"
                className="w-full bg-transparent placeholder:text-step__1 placeholder:italic focus:outline-none"
                {...register("name", { required: true })}
              />
            </div>
          </div>
        </div>

        <div className="gap-6 lg:flex">
          <div className="overflow-hidden">
            <div className="animated-text">je travaille chez</div>
          </div>
          <div className="relative overflow-hidden lg:w-1/3">
            <div className="custom_after animated-input w-full">
              <input
                id="company"
                type="text"
                placeholder="votre entreprise"
                className="w-full bg-transparent placeholder:text-step__1 placeholder:italic focus:outline-none"
                {...register("company", { required: false })}
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="overflow-hidden">
            <div className="animated-text">
              est-ce que tu pourrais m'aider à
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="custom_after animated-input">
              <input
                id="help"
                type="text"
                placeholder="votre message*"
                className="w-full bg-transparent placeholder:text-step__1 placeholder:italic focus:outline-none"
                {...register("help", { required: true })}
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="overflow-hidden">
            <div className="animated-text">
              Tu peux me contacter par e-mail à
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="custom_after animated-input">
              <input
                id="email"
                type="email"
                placeholder="votre email*"
                className="w-full bg-transparent placeholder:text-step__1 placeholder:italic focus:outline-none"
                {...register("email", { required: true })}
              />
            </div>
          </div>
        </div>

        <div className="gap-6 lg:flex">
          <div className="overflow-hidden">
            <div className="animated-text">ou téléphone au</div>
          </div>
          <div className="relative overflow-hidden lg:w-1/3">
            <div className="custom_after animated-input">
              <input
                id="tel"
                type="tel"
                placeholder="votre numéro"
                className="w-full bg-transparent placeholder:text-step__1 placeholder:italic focus:outline-none"
                {...register("tel", { required: false })}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden">
          <button className="animated-input hover:shadow-form rounded-md bg-purple-500 px-8 py-3 text-base font-semibold text-white outline-none">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
