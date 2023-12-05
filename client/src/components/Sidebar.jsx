import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdFeedback } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { PresentationChartBarIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function Sidebar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="hidden sm:hidden md:hidden lg:block h-screen w-full max-w-[20rem] z-[999] rounded-none fixed">
      <div className="mb-2 p-4 flex items-center gap-5">
        <div className="">
          <img src="ibabao2.png" alt="" className="w-[50px]" />
        </div>
        <Typography variant="h5" color="blue-gray">
          BIUMS
        </Typography>
      </div>
      <List>
        <Link to="/dashboard">
          <Accordion>
            <ListItem className="p-0">
              <AccordionHeader className="border-b-0 p-3">
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto fontnioy">
                  Dashboard
                </Typography>
              </AccordionHeader>
            </ListItem>
          </Accordion>
        </Link>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <Link to="/barangayinformation">
            <ListItem className="p-0" selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <IoMdInformationCircleOutline />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto fontnioy">
                  Barangay Information
                </Typography>
              </AccordionHeader>
            </ListItem>
          </Link>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link to="/barangayofficials">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Barangay Officials
                </ListItem>
              </Link>
              <Link to="/skmembers">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  SK Members
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />
        <Link to="householdrecords">
          <ListItem>
            <ListItemPrefix>
              <FaHouseChimneyUser />
            </ListItemPrefix>
            Household Records
          </ListItem>
        </Link>
        <Link to="residentslist">
          <ListItem>
            <ListItemPrefix>
              <FaPeopleGroup />
            </ListItemPrefix>
            Residents List
          </ListItem>
        </Link>
        <Link to="/announcements">
          <ListItem>
            <ListItemPrefix>
              <MdFeedback />
            </ListItemPrefix>
            Announcement
          </ListItem>
        </Link>
        <Link to="/feedback">
          <ListItem>
            <ListItemPrefix>
              <VscFeedback />
            </ListItemPrefix>
            Feedback
          </ListItem>
        </Link>
      </List>
    </Card>
  );
}
