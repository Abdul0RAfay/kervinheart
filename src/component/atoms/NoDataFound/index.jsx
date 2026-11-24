import { LuInbox } from "react-icons/lu";
import classes from "./NoDataFound.module.css";
import Button from "../Button";

function NoDataFound({
  text = "Nothing here yet",
  className,
  description,
  buttonText,
  buttonOnClick,
}) {
  return (
    <div className={[classes.noDataContainer, className].filter(Boolean).join(" ")}>
      <span className={classes.iconWrap}>
        <LuInbox className={classes.icon} aria-hidden="true" />
      </span>
      <p className={classes.title}>{text}</p>
      {description && <p className={classes.description}>{description}</p>}
      {buttonText && (
        <Button variant="primary" onClick={buttonOnClick} customStyle={{ width: "auto" }}>
          {buttonText}
        </Button>
      )}
    </div>
  );
}

export default NoDataFound;
