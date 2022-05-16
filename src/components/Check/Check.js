import CheckBoxIcon from "@mui/icons-material/CheckBox";

const Check = ({ isCheck }) => {
  return (
    <>
      <CheckBoxIcon color={isCheck ? "success" : "error"} />
    </>
  );
};

export default Check;
