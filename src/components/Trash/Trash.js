import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Trash = ({ actionOnClick }) => {
  return (
    <>
      <DeleteForeverIcon onClick={actionOnClick} fontSize="large" />
    </>
  );
};

export default Trash;
