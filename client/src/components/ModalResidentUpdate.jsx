import { Button, Modal } from "flowbite-react";
import { useState, useEffect } from "react";
import "./Button1.css";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Label, TextInput, FileInput } from "flowbite-react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { updateResident } from "../features/residents/residentSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function ModalResidentUpdate({ name, positions, residents }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    nationalid: "",
    firstname: "",
    middlename: "",
    lastname: "",
    alias: "",
    email: "",
    birthplace: "",
    birthday: "",
    age: "",
    civilstatus: "",
    gender: "",
    status: "",
    singleparent: "",
    seniorcitizen: "",
    pwd: "",
    religion: "",
    citizenship: "",
    contact: "",
    occupation: "",
    relation: "",
    registeredvoter: "",
    purok: "",
    pet: "",
    household: "",
    barangayname: "",
  });
  const {
    nationalid,
    firstname,
    middlename,
    lastname,
    alias,
    email,
    birthplace,
    birthday,
    age,
    civilstatus,
    gender,
    status,
    singleparent,
    seniorcitizen,
    pwd,
    religion,
    citizenship,
    contact,
    occupation,
    relation,
    registeredvoter,
    purok,
    pet,
    household,
    barangayname,
  } = formData;

  useEffect(() => {
    if (residents) {
      setFormData({
        nationalid: residents.nationalid,
        firstname: residents.firstname,
        middlename: residents.middlename,
        lastname: residents.lastname,
        alias: residents.alias,
        email: residents.email,
        birthplace: residents.birthplace,
        birthday: residents.birthday,
        age: residents.age,
        civilstatus: residents.civilstatus,
        gender: residents.gender,
        status: residents.status,
        singleparent: residents.singleparent,
        seniorcitizen: residents.seniorcitizen,
        pwd: residents.pwd,
        religion: residents.religion,
        citizenship: residents.citizenship,
        contact: residents.contact,
        occupation: residents.occupation,
        relation: residents.relation,
        registeredvoter: residents.registeredvoter,
        purok: residents.purok,
        pet: residents.pet,
        household: residents.household,
        barangayname: residents.barangayname,
      });
    }
  }, [residents]);

  const [openModal, setOpenModal] = useState(false);

  const myStyle = {
    backgroundColor: "rgb(168, 38, 255)",
    boxShadow: "5px 5px 0px rgb(140, 32, 212)",
  };

  const checkhousehold = async (householdnumber, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(
        `http://localhost:5001/api/householdrecords/${householdnumber}`,
        config
      );
      return !!response;
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    setOpenModal(false);

    const data = {
      nationalid,
      firstname,
      middlename,
      lastname,
      alias,
      email,
      birthplace,
      birthday,
      age,
      civilstatus,
      gender,
      status,
      singleparent,
      seniorcitizen,
      pwd,
      religion,
      citizenship,
      contact,
      occupation,
      relation,
      registeredvoter,
      purok,
      pet,
      household,
      barangayname,
    };
    const householdExists = await checkhousehold(
      formData.household,
      user.token
    );

    if (!householdExists) {
      Swal.fire({
        title: "Error!",
        text: "Household does not exist. Please enter a valid household number.",
        icon: "error",
      });
      return;
    } else {
      await dispatch(updateResident({ id: residents._id, formdata: data }));
      setFormData("");

      // Your additional form submission logic here
      Swal.fire({
        title: "SAVE!",
        icon: "success",
      });
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <button
        className="flex items-center w-max min-h-full"
        onClick={() => setOpenModal(true)}
      >
        <FaRegEdit className="h-4 w-4" />
      </button>

      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="z-[999999]"
        size={"8xl"}
      >
        <Modal.Header>Update Resident</Modal.Header>

        <Modal.Body>
          <form onSubmit={handleFormSubmit} id="myForm">
            <div className="lg:flex gap-5">
              <div className="lg:w-[50%] border p-5 shadow-md">
                <div className="text-center mb-5 border-b p-2">ABOUT ME</div>
                <div className="flex justify-center">
                  <FaUserCircle className="w-[20vw] h-[20vh]" />
                </div>
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="file-upload" value="UPLOAD PROFILE:" />
                  </div>
                  <FileInput id="file-upload" />
                </div>
                <div>
                  <div className="flex-grow">
                    <div className="mb-2 block">
                      <Label htmlFor="password1" value="NATIONAL ID NO.:" />
                    </div>
                    <TextInput
                      id="fname"
                      type="text"
                      value={nationalid}
                      onChange={onChange}
                      name="nationalid"
                      required
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="mb-2 block">
                      <Label htmlFor="password1" value="FIRSTNAME:" />
                    </div>
                    <TextInput
                      id="firstname"
                      type="text"
                      value={firstname}
                      onChange={onChange}
                      name="firstname"
                      required
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="mb-2 block">
                      <Label htmlFor="password1" value="MIDDLENAME:" />
                    </div>
                    <TextInput
                      id="middlename"
                      type="text"
                      value={middlename}
                      onChange={onChange}
                      name="middlename"
                      required
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="mb-2 block">
                      <Label htmlFor="password1" value="LASTNAME:" />
                    </div>
                    <TextInput
                      id="lastname"
                      type="text"
                      value={lastname}
                      onChange={onChange}
                      name="lastname"
                      required
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="mb-2 block">
                    <Label htmlFor="password1" value="ALIAS:" />
                  </div>
                  <TextInput
                    id="alias"
                    type="text"
                    value={alias}
                    onChange={onChange}
                    name="alias"
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
              </div>
              <div className="lg:w-[50%] border p-5 shadow-md">
                <div className="text-center mb-5 border-b p-2">
                  PERSONAL DETAILS
                </div>

                <div className="max-w-full mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="countries" value="BIRTHDAY:" />
                  </div>
                  <input
                    id="birthday"
                    type="text"
                    className="w-full rounded-lg bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
                    value={birthday}
                    onChange={onChange}
                    name="birthday"
                    required
                  />
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
                    <Label htmlFor="countries" value="CIVIL STATUS:" />
                  </div>
                  <select
                    id="civilstatus"
                    className="w-full rounded-lg bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
                    value={civilstatus}
                    onChange={onChange}
                    name="civilstatus"
                    required
                  >
                    <option></option>
                    <option>SINGLE</option>
                    <option>MARRIED</option>
                    <option>DIVORCED</option>
                    <option>SEPARATED</option>
                  </select>
                </div>
                <div className="max-w-full mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="countries" value="GENDER:" />
                  </div>
                  <select
                    id="gender"
                    className="w-full rounded-lg bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
                    value={gender}
                    onChange={onChange}
                    name="gender"
                    required
                  >
                    <option></option>
                    <option>MALE</option>
                    <option>FEMALE</option>
                    <option>OTHER</option>
                  </select>
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
                <div className="max-w-full mb-3">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="countries"
                      value="ARE YOU A SINGLE PARENT?"
                    />
                  </div>
                  <select
                    id="singpleparent"
                    className="w-full rounded-lg bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
                    value={singleparent}
                    onChange={onChange}
                    name="singleparent"
                    required
                  >
                    <option></option>
                    <option>YES</option>
                    <option>NO</option>
                  </select>
                </div>
                <div className="max-w-full mb-3">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="countries"
                      value="ARE YOU A SENIOR CITIZEN?"
                    />
                  </div>
                  <select
                    id="seniorcitizen"
                    className="w-full rounded-lg bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
                    value={seniorcitizen}
                    onChange={onChange}
                    name="seniorcitizen"
                    required
                  >
                    <option></option>
                    <option>YES</option>
                    <option>NO</option>
                  </select>
                </div>
                <div className="max-w-full mb-3">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="countries"
                      value="ARE YOU A PERSON WITH DISABILITY?"
                    />
                  </div>
                  <select
                    id="pwd"
                    className="w-full rounded-lg bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
                    value={pwd}
                    onChange={onChange}
                    name="pwd"
                    required
                  >
                    <option></option>
                    <option>YES</option>
                    <option>NO</option>
                  </select>
                </div>
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="RELIGION:" />
                  </div>
                  <TextInput
                    id="religion"
                    type="text"
                    value={religion}
                    onChange={onChange}
                    name="religion"
                    required
                  />
                </div>
              </div>
              <div className="lg:w-[50%] border p-5 shadow-md">
                <div className="text-center mb-5 border-b p-2">
                  PERSONAL DETAILS
                </div>

                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="CITIZENSHIP:" />
                  </div>
                  <TextInput
                    id="citizenship"
                    type="text"
                    value={citizenship}
                    onChange={onChange}
                    name="citizenship"
                    required
                  />
                </div>
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="CONTACT NO. :" />
                  </div>
                  <TextInput
                    id="contact"
                    type="number"
                    value={contact}
                    onChange={onChange}
                    name="contact"
                    required
                  />
                </div>
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="OCCUPATION:" />
                  </div>
                  <TextInput
                    id="occupation"
                    type="text"
                    value={occupation}
                    onChange={onChange}
                    name="occupation"
                    required
                  />
                </div>
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="RELATION TO THE HEAD:" />
                  </div>
                  <TextInput
                    id="relation"
                    type="text"
                    value={relation}
                    onChange={onChange}
                    name="relation"
                    required
                  />
                </div>
                <div className="max-w-full mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="countries" value="REGISTERED VOTER:" />
                  </div>
                  <select
                    id="registeredvoter"
                    className="w-full rounded-lg bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
                    value={registeredvoter}
                    onChange={onChange}
                    name="registeredvoter"
                    required
                  >
                    <option></option>
                    <option>YES</option>
                    <option>NO</option>
                  </select>
                </div>
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="PUROK:" />
                  </div>
                  <TextInput
                    id="purok"
                    type="number"
                    value={purok}
                    onChange={onChange}
                    name="purok"
                    required
                  />
                </div>
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="PET:" />
                  </div>
                  <TextInput
                    id="pet"
                    type="number"
                    value={pet}
                    onChange={onChange}
                    name="pet"
                    required
                  />
                </div>
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="HOUSEHOLD NUMBER:" />
                  </div>
                  <TextInput
                    id="household"
                    type="text"
                    value={household}
                    onChange={onChange}
                    name="household"
                    required
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="BARANGAY NAME:" />
                  </div>
                  <TextInput
                    id="barangay"
                    type="text"
                    value={barangayname}
                    onChange={onChange}
                    name="barangayname"
                    required
                    disabled
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
            Update
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalResidentUpdate;
