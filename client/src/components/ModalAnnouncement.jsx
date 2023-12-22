import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import "./Button1.css";
import { Label, TextInput } from "flowbite-react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useDispatch } from "react-redux";
import { TfiAnnouncement } from "react-icons/tfi";
import { createAnnouncement } from "../features/announcements/announcementSlice";
import { reset } from "../features/announcements/announcementSlice";

function ModalAnnouncement({ name }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
  });
  const { title, date, description } = formData;

  const [openModal, setOpenModal] = useState(false);

  const myStyle = {
    backgroundColor: "rgb(168, 38, 255)",
    boxShadow: "5px 5px 0px rgb(140, 32, 212)",
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    setOpenModal(false);

    const data = {
      title,
      date,
      description,
    };

    await dispatch(createAnnouncement(data))
      .then(() => {
        Swal.fire({
          title: "SAVE!",
          icon: "success",
        });
        setFormData("");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
        });
      });
    location.reload();
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className="flex lg:justify-end sm:justify-right mb-5 mr-5">
        <Button
          className="Btn w-[200px] md:mt-5 sm:mt-5"
          style={myStyle}
          onClick={() => setOpenModal(true)}
        >
          {name}
          <TfiAnnouncement className="svg" />
        </Button>
      </div>

      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="z-[999999]"
        size={"2xl"}
      >
        <Modal.Header>Add Announcement</Modal.Header>

        <Modal.Body>
          <form onSubmit={handleFormSubmit} id="myForm">
            <div className="border p-5 shadow-md">
              <div>
                <div className="flex-grow">
                  <div className="mb-2 block">
                    <Label htmlFor="password1" value="TITLE:" />
                  </div>
                  <TextInput
                    id="title"
                    type="text"
                    value={title}
                    onChange={onChange}
                    name="title"
                    required
                  />
                </div>
                <div className="flex-grow">
                  <div className="mb-2 block">
                    <Label htmlFor="password1" value="DATE:" />
                  </div>
                  <TextInput
                    id="date"
                    type="date"
                    value={date}
                    onChange={onChange}
                    name="date"
                    required
                  />
                </div>

                <div className="flex-grow">
                  <div className="mb-2 block">
                    <Label htmlFor="password1" value="DESCRIPTION:" />
                  </div>
                  <input
                    id="desc"
                    type="text"
                    className="w-full rounded-lg bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 capitalize"
                    value={description}
                    onChange={onChange}
                    name="description"
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="Btn" form="myForm" type="submit" style={myStyle}>
            Save
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalAnnouncement;
