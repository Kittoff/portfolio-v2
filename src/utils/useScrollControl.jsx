import { useEffect, useState } from "react";
import gsap from "gsap";

const useScrollControl = () => {
  const [enableScroll, setEnableScroll] = useState(false);

  useEffect(() => {
    if (enableScroll) {
      gsap.set("body", { overflow: "auto" });
      document.body.removeAttribute("data-lenis-prevent");
      document.body.removeAttribute("data-lenis-stop");
    } else {
      gsap.set("body", { overflow: "hidden" });
      document.body.setAttribute("data-lenis-prevent", "true");
      document.body.setAttribute("data-lenis-stop", "true");
    }
  }, [enableScroll]);

  const unlockScroll = () => {
    setEnableScroll(true);
  };

  return { enableScroll, unlockScroll };
};

export default useScrollControl;