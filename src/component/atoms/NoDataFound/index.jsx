import { IoSearchOutline } from "react-icons/io5";
import classes from "./NoDataFound.module.css";
import Button from "../Button";

function NoDataFound({
  text = "No Data Found",
  className,
  description,
  buttonText,
  buttonOnClick,
}) {
  return (
    <div
      className={[classes.noDataContainer, className && className].join(" ")}
    >
      <IoSearchOutline
        size={50}
        color={"var(--white-color)"}
        className={classes.icon}
      />
      <p className="fs-16">{text}</p>
      {description && (
        <p style={{ fontSize: "14px" }} className=" pb-3">
          {description}
        </p>
      )}
      {buttonText && (
        <Button variant="primary" onClick={buttonOnClick}>
          {buttonText}
        </Button>
      )}
    </div>
  );
}

export default NoDataFound;
