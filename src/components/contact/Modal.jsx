import { useEffect } from "react";
import TextDisperse from "../TextDisperse/TextDisperse";
import gsap from "gsap";
import useScrollControl from "@/utils/useScrollControl";

const Modal = ({ isOpen, onClose, children }) => {
  const { lockScroll } = useScrollControl();
  useEffect(() => {
    if (isOpen) {
      lockScroll();
      gsap.set("body", { overflow: "hidden" });
    } else {
      gsap.set("body", { overflow: "auto" });
    }
  }, [isOpen, lockScroll]);
  if (!isOpen) return null;

  return (
    <div
      data-lenis-stop
      data-lenis-prevent
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-bigilla text-primary"
    >
      <div className="m-9 rounded-bl-[30px] rounded-br-[80px] rounded-tl-[80px] rounded-tr-[30px] bg-menuBg px-6 pb-8 pt-8">
        <div className="flex flex-col items-center justify-center">
          {children}
          <div
            className="contents w-14 cursor-pointer text-center font-bigilla text-step_2"
            onClick={onClose}
          >
            <TextDisperse>
              <p>Close</p>
            </TextDisperse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
