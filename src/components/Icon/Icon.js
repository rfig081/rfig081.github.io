import "./Icon.css";

const Icon = ({ iconText, iconImage }) => {
  return (
    <div className="iconContainer" title={iconText}>
      <img src={`/icons/${iconImage}.svg`} alt="" />
    </div>
  );
};

export default Icon;
