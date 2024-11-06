import Experiences from "@/components/experiences/Experiences";

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-10 px-5 text-center">
        <h2 className="pt-5 text-step_h_0">Expériences</h2>
        <p className="max-w-[800px] text-left text-step_p_0">
          J'ai eu la chance de pouvoir participer à des projets de plus en plus
          passionnants, avec de plus en plus de responsabilités. J'ai pu
          acquérir de nouvelles compétences techniques sur chacune de mes
          missions.
        </p>
        <h3 className="text-step_h__2">Du technique, mais pas que...</h3>
        <p className="max-w-[800px] text-left text-step_p_0">
          Dans tous projets, l'aspect technique est très important. Il est
          essentiel d'être sûr de pouvoir délivrer ce que l'on attend de nous.
          Mais d'autres aspects, tout aussi important, sont l'humain et le
          personnel. Il est essentiel de pouvoir communiquer de façon claire
          afin d'avancer dans la même direction. Il est aussi essentiel de se
          connaître en tant que développeur, afin de répondre le plus
          précisément aux attentes. Tous ces projets ont également été
          formateurs sur ces points.
        </p>
        <p className="text-left text-step_p__1">
          Je vous laisse maintenant découvrir une partie des projets sur
          lesquels j'ai pu travailler
        </p>
      </div>

      <Experiences />
    </div>
  );
};

export default page;
