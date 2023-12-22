import { useState, useEffect } from "react";
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { FaTrashAlt } from "react-icons/fa";
import ModalAnnouncement from "./ModalAnnouncement";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { deleteAnnoucement } from "../features/announcements/announcementSlice";

const TABLE_HEAD = ["NO.", "DATE", "TITLE", "ACTION"];

const rowsPerPageOptions = [3, 5, 10]; // Customize options as needed

function TableAnnouncement({ title1, announcements }) {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleAnnouncements, setVisibleAnnouncements] = useState([]);
  const totalRows = announcements.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleRowsPerPageChange = (value) => {
    setRowsPerPage(value);
    setCurrentPage(1);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, totalRows);

  useEffect(() => {
    const filteredAnnouncements = announcements.filter((announcement) => {
      const headName = announcement.title;

      if (
        headName &&
        typeof headName === "string" &&
        headName.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return true;
      }
      return false;
    });

    const getUniqueAnnouncements = (announcements) => {
      const uniqueTitles = new Set();
      return announcements.filter((announcement) => {
        const title = announcement.title;

        if (!uniqueTitles.has(title)) {
          uniqueTitles.add(title);
          return true;
        }
        return false;
      });
    };

    const uniqueAnnouncements = getUniqueAnnouncements(filteredAnnouncements);
    setVisibleAnnouncements(uniqueAnnouncements.slice(startIndex, endIndex));
  }, [announcements, currentPage, rowsPerPage, searchQuery, totalRows]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes!",
      cancelButtonText: "No!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteAnnoucement(id));
        Swal.fire("Deleted!", "", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "", "error");
      }
    });
  };

  return (
    <Card className="h-full w-full mt-10">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              {title1}
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <ModalAnnouncement name={"Announcement"} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <div className="w-24">
            <label className="text-blue-gray-500 text-sm">Show Entries</label>
            <select
              className="w-full border border-blue-gray-300 p-2 rounded"
              value={rowsPerPage}
              onChange={(e) => handleRowsPerPageChange(Number(e.target.value))}
            >
              {rowsPerPageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleAnnouncements.map((annoucement, index) => {
              const absoluteIndex = startIndex + index + 1;
              const isLast = absoluteIndex === totalRows;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";
              return (
                <tr key={annoucement._id}>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {absoluteIndex}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {annoucement.date}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {annoucement.title}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Edit/View">
                      <IconButton variant="text">
                        {/* <ModalAnnoucementUpdate announcements={annoucement} /> */}
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Delete">
                      <IconButton
                        variant="text"
                        onClick={() => handleDelete(annoucement._id)}
                      >
                        <FaTrashAlt className="h-4 w-4 text-red-500" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page {currentPage} of {totalPages}
        </Typography>
        <div className="flex gap-2">
          <Button
            variant="outlined"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default TableAnnouncement;
