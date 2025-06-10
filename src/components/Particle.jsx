import { useMemo } from "react";

const Particle = () => {
  const style = useMemo(() => {
    const size = Math.floor(Math.random() * (317 - 50 + 1)) + 50; // 50px - 317px

    // Maks posisi top/left = 100% - maxSize (dalam px atau %, tergantung container)
    const safeArea = 100 - (size / window.innerHeight) * 100;
    const top = Math.random() * safeArea;
    const left = Math.random() * safeArea;

    return {
      width: `${size}px`,
      height: `${size}px`,
      top: `${top}%`,
      left: `${left}%`,
    };
  }, []);

  return (
    <div
      className="bg-[#1A213B] rounded-full absolute opacity-[80%] blur-[10px]"
      style={style}
    />
  );
};

export default Particle;
