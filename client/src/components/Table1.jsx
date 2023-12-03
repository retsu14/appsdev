import { useState } from "react";
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { FaTrashAlt } from "react-icons/fa";
import ModalResidentUpdate from "./ModalResidentUpdate";
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
import { GrStatusGoodSmall } from "react-icons/gr";
import ModalResident from "./ModalResident";
import { deleteResident } from "../features/residents/residentSlice";
import Swal from "sweetalert2";

const TABLE_HEAD = ["NO.", "RESIDENT NAME", "NATIONAL ID", "STATUS", "ACTION"];

const rowsPerPageOptions = [3, 5, 10]; // Customize options as needed

function Table1({ title, title2, residents }) {
  const dispatch = useDispatch();
  // const { residents } = useSelector((state) => state.residents);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [searchQuery, setSearchQuery] = useState("");

  const totalRows = residents.length;
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

  const filteredResidents = residents.filter(
    (resident) =>
      resident.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resident.lastname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resident.nationalid.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resident.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visibleResidents = filteredResidents.slice(startIndex, endIndex);

  const handleDelete = (residentid) => {
    Swal.fire({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes!",
      cancelButtonText: "No!",
      reverseButtons: true, // Reverse the order of the confirm and cancel button
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteResident(residentid));
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
              {title}
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <ModalResident name={title2} />
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
            {visibleResidents.map((resident, index) => {
              const absoluteIndex = startIndex + index + 1;
              const isLast = absoluteIndex === totalRows;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={resident._id}>
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
                          {resident.firstname} {resident.lastname}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {resident.email}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {resident.nationalid}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="w-max flex justify-center h-full">
                      {resident.status === "ACTIVE" ? (
                        <div className="flex items-center gap-3 text-sm">
                          <GrStatusGoodSmall className="text-green-500" />
                          ACTIVE
                        </div>
                      ) : (
                        <div className="flex items-center gap-3 text-sm">
                          <GrStatusGoodSmall className="text-red-500" />
                          INACTIVE
                        </div>
                      )}
                    </div>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Edit/View">
                      <IconButton variant="text">
                        <ModalResidentUpdate residents={resident} />
                      </IconButton>
                    </Tooltip>

                    <Tooltip content="Delete">
                      <IconButton
                        variant="text"
                        onClick={() => handleDelete(resident._id)}
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

export default Table1;
