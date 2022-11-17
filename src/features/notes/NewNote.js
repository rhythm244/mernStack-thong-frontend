import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersApiSlice";
import NewNoteForm from "./NewNoteForm";

const NewNote = () => {
  const users = useSelector(selectAllUsers);

  const contetnt = users ? <NewNoteForm users={users} /> : <p>Loading...</p>;

  return content;
};

export default NewNote;
