import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
      <Skill skill="HTML/CSS" emoji="🙂" color="#96B6C5" />
      <Skill skill="JavaScript" emoji="😎" color="#ADC4CE" />
      <Skill skill="NodeJS" emoji="🤗" color="#94ADD7" />
      <Skill skill="Bootstrap" emoji="🥱" color="#9E9FA5" />
      <Skill skill="React" emoji="🤩" color="#D8D9DA" />
      <Skill skill="Git/Git-Hub" emoji="😉" color="#CEE6F3" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
