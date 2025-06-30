import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "C",
    "cplusplus",
    "css3",
    "tailwindcss",
    "html5",
    "java",
    "eclipse",
    "javascript",
    "microsoft",
    "python",
    "linux",
    "react",
    "typescript",
    "netlify",
    "vercel",
    "vitejs",
    "nextjs-pink",
    "threejs",
    "wordpress",
    "visualstudiocode",
    "pocketbase",
    "MongoDB",
    "mysql",
    "postman",
    "git",
    "github",
    "arduino",
    "raspberrypi",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={30} radius={160}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={20} radius={110} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);