import moment from "moment";
import classes from "./CommonCells.module.css";
import { capitalizeFirstLetter, mergeClass } from "@/resources/utils/helper";

export const RenderTextCell = ({ cellValue: item }) => {
  return (
    <span className={mergeClass("maxLine1 t-t-c")}>
      {item ? capitalizeFirstLetter(item?.toString()) : item ?? "-"}
    </span>
  );
};

export const RenderDateCell = ({ cellValue: item }) => {
  return (
    <span className={mergeClass(classes?.date)}>
      {moment(item).format("lll")}
    </span>
  );
};

export const IconButton = ({ icon, onClick }) => {
  return (
    <div className={classes?.iconButton} onClick={onClick}>
      {icon}
    </div>
  );
};
