import "./Button.css";
import { IoPersonAddSharp } from "react-icons/io5";
const Button = (props) => {
  const myStyle = {
    backgroundColor: "rgb(168, 38, 255)",
    boxShadow: "5px 5px 0px rgb(140, 32, 212)",
  };
  return (
    <button
      className="Btn w-[200px]"
      style={myStyle}
      data-modal-target="static-modal"
      data-modal-toggle="static-modal"
      type="button"
    >
      {props.name}
      <IoPersonAddSharp className="svg" />
    </button>
  );
};

export default Button;
