import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import "./Button1.css";
import { FaRegEdit } from "react-icons/fa";
import { Label, TextInput } from "flowbite-react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { updateHousehold } from "../features/householdRecord/householdSlice";
import { useDispatch } from "react-redux";
import { IoPersonAddSharp } from "react-icons/io5";
import { register } from "../features/users/userSlice";

function ModalAdmin({ name1, ngalan, households }) {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const { name, email, password, role } = formData;

  const myStyle = {
    backgroundColor: "rgb(168, 38, 255)",
    boxShadow: "5px 5px 0px rgb(140, 32, 212)",
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    setOpenModal(false);

    const data = {
      name,
      email,
      password,
      role,
    };

    await dispatch(register(data))
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
          Add User
          <IoPersonAddSharp className="svg" />
        </Button>
      </div>

      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="z-[999999]"
        size={"2xl"}
      >
        <Modal.Header>Add User</Modal.Header>

        <Modal.Body>
          <form onSubmit={handleFormSubmit} id="myForm">
            <div className="border p-5 shadow-md">
              <div>
                <div className="flex-grow">
                  <div className="mb-2 block">
                    <Label htmlFor="password1" value="NAME:" />
                  </div>
                  <TextInput
                    id="name"
                    type="text"
                    value={name}
                    onChange={onChange}
                    name="name"
                    required
                  />
                </div>
                <div className="flex-grow">
                  <div className="mb-2 block">
                    <Label htmlFor="password1" value="EMAIL:" />
                  </div>
                  <TextInput
                    id="email"
                    type="email"
                    value={email}
                    onChange={onChange}
                    name="email"
                    required
                  />
                </div>

                <div className="flex-grow">
                  <div className="mb-2 block">
                    <Label htmlFor="password1" value="PASSWORD:" />
                  </div>
                  <TextInput
                    id="password"
                    type="text"
                    value={password}
                    onChange={onChange}
                    name="password"
                    required
                  />
                </div>
                <div className="max-w-full mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="countries" value="ROLE:" />
                  </div>
                  <select
                    id="role"
                    className="w-full rounded-lg bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
                    value={role}
                    onChange={onChange}
                    name="role"
                    required
                  >
                    <option></option>
                    <option>resident</option>
                    <option>user</option>
                    <option>admin</option>
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
export default ModalAdmin;
