import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#96B6C5",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#ADC4CE",
  },
  {
    skill: "NodeJs",
    level: "intermediate",
    color: "#94ADD7",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#CEE6F3",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#D8D9DA",
  },
  {
    skill: "Bootstrap",
    level: "advanced",
    color: "#9E9FA5",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="profileCard.jpg" alt="profilePic"></img>;
}
function Intro() {
  return (
    <>
      <h1>Faizan Wani</h1>
      <p>
        I am a Full Stack Developer, with a passion for crafting visually
        appealing and user-centered digital experiences. My goal is to continue
        to learn, stay updated with the latest design and development trends and
        collaborate with a team of experts to deliver high-quality digital
        products.
      </p>
    </>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{level === "beginner" && "🙄"}</span>
      <span>{level === "intermediate" && "🙂"}</span>
      <span>{level === "advanced" && "🤗"}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
