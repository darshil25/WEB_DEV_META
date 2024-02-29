import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
  const { theme, toggletheme } = useTheme();
  return (
    <label className="switch">
      <input
      onChange={toggletheme}
        type="checkbox"
        checked={theme === "light"}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
