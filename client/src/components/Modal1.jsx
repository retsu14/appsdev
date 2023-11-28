import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import "./Button.css";
import { IoPersonAddSharp } from "react-icons/io5";

function Modal1() {
  const [openModal, setOpenModal] = useState(false);
  const myStyle = {
    backgroundColor: "rgb(168, 38, 255)",
    boxShadow: "5px 5px 0px rgb(140, 32, 212)",
  };

  return (
    <>
      <Button
        className="Btn w-[200px]"
        style={myStyle}
        onClick={() => setOpenModal(true)}
      >
        Barangay Official
        <IoPersonAddSharp className="svg" />
      </Button>
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="z-[999999]"
        size={"6xl"}
      >
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="Btn"
            style={myStyle}
            onClick={() => setOpenModal(false)}
          >
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
