import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import "./Button1.css";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import {
  Checkbox,
  Label,
  TextInput,
  Select,
  Datepicker,
  FileInput,
} from "flowbite-react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

function Modal1() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    status: "",
    term: "",
    position: "",
    age: "",
    gender: "",
    birthday: "",
    phonenumber: "",
    birthplace: "",
    email: "",
    purok: "",
  });
  const {
    firstname,
    lastname,
    status,
    term,
    position,
    age,
    gender,
    birthday,
    phonenumber,
    birthplace,
    email,
    purok,
  } = formData;

  const [openModal, setOpenModal] = useState(false);

  const myStyle = {
    backgroundColor: "rgb(168, 38, 255)",
    boxShadow: "5px 5px 0px rgb(140, 32, 212)",
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    setOpenModal(false);
    setFormData("");

    // Your additional form submission logic here
    Swal.fire({
      title: "SAVE!",
      icon: "success",
    });
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleDateChange = (date) => {
    setFormData((prevState) => ({
      ...prevState,
      term: date,
    }));
  };
  return (
    <>
      <div className="flex lg:justify-end sm:justify-right">
        <Button
          className="Btn w-[200px] md:mt-5 sm:mt-5"
          style={myStyle}
          onClick={() => setOpenModal(true)}
        >
          Barangay Official
          <IoPersonAddSharp className="svg" />
        </Button>
      </div>

      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="z-[999999]"
        size={"6xl"}
      >
        <Modal.Header>Add Barangay Official</Modal.Header>

        <Modal.Body>
          <form onSubmit={handleFormSubmit} id="myForm">
            <div className="lg:flex gap-10">
              <div className="lg:w-[50%] border p-5 shadow-md">
                <div className="text-center mb-5 border-b p-2">ABOUT ME</div>
                <div className="flex justify-center">
                  <FaUserCircle className="w-[20vw] h-[20vh]" />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="file-upload" value="UPLOAD PROFILE:" />
                  </div>
                  <FileInput id="file-upload" />
                </div>
                <div className="flex justify-between gap-5 mb-3">
                  <div className="flex-grow">
                    <div className="mb-2 block">
                      <Label htmlFor="password1" value="FIRSTNAME:" />
                    </div>
                    <TextInput
                      id="fname"
                      type="text"
                      value={firstname}
                      onChange={onChange}
                      name="firstname"
                      required
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="mb-2 block">
                      <Label htmlFor="password1" value="LASTNAME:" />
                    </div>
                    <TextInput
                      id="lname"
                      type="text"
                      value={lastname}
                      onChange={onChange}
                      name="lastname"
                      required
                    />
                  </div>
                </div>
                <div className="max-w-full mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="countries" value="STATUS:" />
                  </div>
                  <Select
                    id="status"
                    type="text"
                    value={status}
                    onChange={onChange}
                    name="status"
                    required
                  >
                    <option>ACTIVE</option>
                    <option>INACTIVE</option>
                  </Select>
                </div>
                <div className="max-w-full mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="countries" value="TERM:" />
                  </div>
                  <input
                    id="term"
                    type="date"
                    className="w-full rounded-lg bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
                    value={term}
                    onChange={onChange}
                    name="term"
                    required
                  />
                </div>

                <div className="max-w-full mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="countries" value="POSITION:" />
                  </div>
                  <Select
                    id="position"
                    type="text"
                    value={position}
                    onChange={onChange}
                    name="position"
                    required
                  >
                    <option>BRGY. CAPTAIN</option>
                    <option>BRGY. SECRETARY</option>
                    <option>BRGY. TREASURER</option>
                    <option>BRGY. COUNCILOR</option>
                  </Select>
                </div>
              </div>
              <div className="lg:w-[50%] border p-5 shadow-md">
                <div className="text-center mb-5 border-b p-2">
                  PERSONAL DETAILS
                </div>
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="AGE:" />
                  </div>
                  <TextInput
                    id="age"
                    type="text"
                    value={age}
                    onChange={onChange}
                    name="age"
                    required
                  />
                </div>
                <div className="max-w-full mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="countries" value="GENDER:" />
                  </div>
                  <Select
                    id="gender"
                    type="text"
                    value={gender}
                    onChange={onChange}
                    name="gender"
                    required
                  >
                    <option>MALE</option>
                    <option>FEMALE</option>
                  </Select>
                </div>
                <div className="max-w-full mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="countries" value="BIRTHDAY:" />
                  </div>
                  <input
                    id="birthday"
                    type="date"
                    className="w-full rounded-lg bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
                    value={birthday}
                    onChange={onChange}
                    name="birthday"
                    required
                  />
                </div>
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="PHONE NUMBER:" />
                  </div>
                  <TextInput
                    id="phonenumber"
                    type="text"
                    value={phonenumber}
                    onChange={onChange}
                    name="phonenumber"
                    required
                  />
                </div>
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="BIRTHPLACE:" />
                  </div>
                  <TextInput
                    id="birthplace"
                    type="text"
                    value={birthplace}
                    onChange={onChange}
                    name="birthplace"
                    required
                  />
                </div>
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="EMAIL ADDRESS:" />
                  </div>
                  <TextInput
                    id="email"
                    type="text"
                    value={email}
                    onChange={onChange}
                    name="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="PUROK:" />
                  </div>
                  <TextInput
                    id="purok"
                    type="text"
                    value={purok}
                    onChange={onChange}
                    name="purok"
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          {/* <input
            type="submit"
            className="Btn"
            style={myStyle}
            onClick={() => {
              setOpenModal(false);
              Swal.fire({
                title: "SAVE!",
                icon: "success",
              });
            }}
          /> */}

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
export default Modal1;
