import React, { useContext } from "react";
import PlusIcon from "../assets/PlusIcon.png";
import GlobalContext from "../context/GlobalContext";
const CreateEventButton = () => {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
    >
      <img src={PlusIcon} alt="create_event" className="w-7 h-7" />
      <span className="pl-3 pr-7"> Add Event</span>
    </button>
  );
}

export default CreateEventButton;
