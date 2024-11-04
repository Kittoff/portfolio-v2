"use client";

import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    sendEmail(data);
  }

  return (
    <>
      <form
        className="font-bigilla text-step_3 lg:text-step_4 bg-customBlack px-5 pt-8 leading-[1.2] text-white lg:px-20"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="">
          {/* <label htmlFor="name" className="before:absolute before:bg-blue-500">
            Bonjour Christophe, <br /> mon nom est{" "}
          </label> */}
          <h3>Bonjour Christophe, </h3>
          <div className="gap-6 lg:flex">
            mon nom est
            <div className="relative lg:w-1/3">
              <div className="custom_after">
                <input
                  id="name"
                  type="text"
                  placeholder="votre nom*"
                  className="truc placeholder:text-step__1 w-full bg-transparent placeholder:italic focus:outline-none"
                  {...register("name", { required: true })}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex">
          {/* <label htmlFor="company" className="">
            je travaille chez{" "}
          </label> */}
          <h3 className="w-3/5">je travaille chez</h3>
          <div className="relative">
            <div className="custom_after">
              <input
                id="company"
                type="text"
                placeholder="votre entreprise"
                className="placeholder:text-step__1 w-full bg-transparent placeholder:italic focus:outline-none"
                {...register("company", { required: false })}
              />
            </div>
          </div>
        </div>
        <div className="">
          <label htmlFor="help" className="flex">
            est-ce que tu pourrais m'aider à{" "}
          </label>
          <div className="relative">
            <div className="custom_after">
              <input
                id="help"
                type="text"
                placeholder="votre message*"
                className="placeholder:text-step__1 bg-transparent placeholder:italic focus:outline-none"
                {...register("help", { required: true })}
              />
            </div>
          </div>
        </div>
        <div className="">
          <label htmlFor="email" className="">
            Tu peux me contacter par e-mail à{" "}
          </label>
          <div className="relative">
            <div className="custom_after">
              <input
                id="email"
                type="email"
                placeholder="votre email*"
                className="placeholder:text-step__1 bg-transparent placeholder:italic focus:outline-none"
                {...register("email", { required: true })}
              />
            </div>
          </div>
        </div>
        <div className="">
          <label htmlFor="tel" className="">
            ou par téléphone au{" "}
          </label>
          <div className="relative">
            <div className="custom_after">
              <input
                id="tel"
                type="tel"
                placeholder="votre numéro"
                className="placeholder:text-step__1 bg-transparent placeholder:italic focus:outline-none"
                {...register("tel", { required: false })}
              />
            </div>
          </div>
        </div>

        <div>
          <button className="hover:shadow-form rounded-md bg-purple-500 px-8 py-3 text-base font-semibold text-white outline-none">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;
