import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import "./Button1.css";
import { IoPersonAddSharp } from "react-icons/io5";
import { Label, TextInput } from "flowbite-react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { createResident } from "../features/residents/residentSlice";
import { useDispatch } from "react-redux";

function ModalHousehold({ name }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    householdnumber: "",
    householdheadname: "",
    status: "",
  });
  const { householdnumber, householdheadname, status } = formData;

  const [openModal, setOpenModal] = useState(false);

  const myStyle = {
    backgroundColor: "rgb(168, 38, 255)",
    boxShadow: "5px 5px 0px rgb(140, 32, 212)",
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    setOpenModal(false);

    const data = {
      householdnumber,
      householdheadname,
      status,
    };

    await dispatch(createResident(data))
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
          <IoPersonAddSharp className="svg" />
        </Button>
      </div>

      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="z-[999999]"
        size={"2xl"}
      >
        <Modal.Header>Add Household</Modal.Header>

        <Modal.Body>
          <form onSubmit={handleFormSubmit} id="myForm">
            <div className="border p-5 shadow-md">
              <div>
                <div className="flex-grow">
                  <div className="mb-2 block">
                    <Label htmlFor="password1" value="HOUSEHOLD NO.:" />
                  </div>
                  <TextInput
                    id="householdnumber"
                    type="number"
                    value={householdnumber}
                    onChange={onChange}
                    name="householdnumber"
                    required
                  />
                </div>

                <div className="flex-grow">
                  <div className="mb-2 block">
                    <Label htmlFor="password1" value="MIDDLENAME:" />
                  </div>
                  <TextInput
                    id="householdheadname"
                    type="text"
                    value={householdheadname}
                    onChange={onChange}
                    name="householdheadname"
                    required
                  />
                </div>
                <div className="max-w-full mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="countries" value="STATUS:" />
                  </div>
                  <select
                    id="status"
                    className="w-full rounded-lg bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
                    value={status}
                    onChange={onChange}
                    name="status"
                    required
                  >
                    <option></option>
                    <option>ACTIVE</option>
                    <option>INACTIVE</option>
                  </select>
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
export default ModalHousehold;
