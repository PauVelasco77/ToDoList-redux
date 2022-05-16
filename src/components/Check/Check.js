import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState } from "react";

const Check = ({ isCheck }) => {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <>
      <CheckBoxIcon
        color={isCheck ? "error" : "success"}
        onClick={() => setIsClicked(!isClicked)}
      />
    </>
  );
};

export default Check;
