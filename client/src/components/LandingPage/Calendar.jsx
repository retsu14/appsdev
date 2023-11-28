import React, { useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Modal from "react-modal";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar as CalendarIcon } from "react-feather";

const Calendar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const events = [
    {
      title: "Event 1",
      start: new Date(2023, 11, 1),
      end: new Date(2023, 11, 3),
    },
    {
      title: "Event 2",
      start: new Date(2023, 11, 5),
      end: new Date(2023, 11, 7),
    },
    {
      title: "Event 3",
      start: new Date(2023, 11, 10),
      end: new Date(2023, 11, 12),
    },
  ];

  const localizer = momentLocalizer(moment);

  // Get current date in the format "Day, Month Date, Year"
  const currentDate = moment().format("dddd, MMMM D, YYYY");

  // Find the upcoming event
  const upcomingEvent = events.find((event) =>
    moment().isBefore(moment(event.start))
  );

  // Check if there is a current event
  const currentEvent = events.find((event) =>
    moment().isBetween(moment(event.start), moment(event.end))
  );

  return (
    <div className="px-5">
      <div className="bg-gray-300 px-5 py-4 rounded">
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
          onClick={openModal}
        >
          <CalendarIcon className="inline-block mr-2" />
          Calendar
        </button>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Calendar Modal"
          className="Modal"
          overlayClassName="Overlay"
          style={{ content: { width: "80%", maxWidth: "900px" } }}
        >
          <div className="flex justify-end">
            <button
              className="text-blue-500 hover:underline focus:outline-none"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
          <div className="mt-4">
            <BigCalendar
              localizer={localizer}
              events={events}
              style={{ height: "500px", width: "100%" }}
            />
          </div>
        </Modal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 ">
          {/* Card 1 - Current Date */}
          <div className="bg-white p-4 rounded shadow-md hover:shadow-lg">
            <h3 className="text-lg font-bold mb-2">Current Date:</h3>
            <p className="text-gray-700">{currentDate}</p>
          </div>

          {/* Card 2 - Upcoming Event */}
          <div className="bg-white p-4 rounded shadow-md hover:shadow-lg">
            <h3 className="text-lg font-bold mb-2">Upcoming Event:</h3>
            {upcomingEvent ? (
              <p className="text-gray-700">
                {upcomingEvent.title} -{" "}
                {moment(upcomingEvent.start).format("MMMM D, YYYY")} at{" "}
                {moment(upcomingEvent.start).format("h:mm A")}
              </p>
            ) : (
              <p className="text-gray-700">No upcoming events</p>
            )}
          </div>

          {/* Card 3 - Current Event */}
          <div className="bg-white p-4 rounded shadow-md hover:shadow-lg">
            <h3 className="text-lg font-bold mb-2">Current Event:</h3>
            {currentEvent ? (
              <p className="text-gray-700">
                {currentEvent.title} -{" "}
                {moment(currentEvent.start).format("MMMM D, YYYY h:mm A")} to{" "}
                {moment(currentEvent.end).format("MMMM D, YYYY h:mm A")}
              </p>
            ) : (
              <p className="text-gray-700">No current events</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
