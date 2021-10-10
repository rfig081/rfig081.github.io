import "./Icon.css";

const Skill = ({ iconText, iconImage }) => {
  return (
    <div className="iconContainer" title={iconText}>
      <img src={`/icons/${iconImage}.svg`} alt="" />
    </div>
  );
};

export default Skill;
