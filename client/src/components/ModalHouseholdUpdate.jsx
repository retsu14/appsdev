import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import "./Button1.css";
import { FaRegEdit } from "react-icons/fa";
import { Label, TextInput } from "flowbite-react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { updateHousehold } from "../features/householdRecord/householdSlice";
import { useDispatch } from "react-redux";

function ModalHouseholdUpdate({ name, ngalan, households }) {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    barangayname: "",
    householdnumber: "",
    householdheadname: "",
    status: "",
  });
  const { barangayname, householdnumber, householdheadname, status } = formData;

  const myStyle = {
    backgroundColor: "rgb(168, 38, 255)",
    boxShadow: "5px 5px 0px rgb(140, 32, 212)",
  };

  useEffect(() => {
    if (households) {
      setFormData({
        barangayname: households.barangayname,
        householdnumber: households.householdnumber,
        householdheadname: households.householdheadname,
        status: households.status,
      });
    }
  }, [households]);

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    setOpenModal(false);

    const data = {
      barangayname,
      householdnumber,
      householdheadname,
      status,
    };

    await dispatch(updateHousehold({ id: households._id, formdata: data }))
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
        size={"2xl"}
      >
        <Modal.Header>Add Household</Modal.Header>

        <Modal.Body>
          <form onSubmit={handleFormSubmit} id="myForm">
            <div className="border p-5 shadow-md">
              <div>
                <div className="flex-grow hidden">
                  <div className="mb-2 block">
                    <Label htmlFor="password1" value="BARANGAYNAME:" />
                  </div>
                  <TextInput
                    id="barangayname"
                    type="text"
                    value={barangayname}
                    onChange={onChange}
                    name="barangayname"
                    required
                  />
                </div>
                <div className="flex-grow">
                  <div className="mb-2 block">
                    <Label htmlFor="password1" value="HOUSEHOLD NO.:" />
                  </div>
                  <TextInput
                    id="householdnumber"
                    type="text"
                    value={householdnumber}
                    onChange={onChange}
                    name="householdnumber"
                    required
                  />
                </div>

                <div className="flex-grow">
                  <div className="mb-2 block">
                    <Label htmlFor="password1" value="HOUSEHOLD HEAD NAME:" />
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
export default ModalHouseholdUpdate;
