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
import { Link } from "react-router-dom";

function SidebarAdmin() {
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
        <Link to="/adduser">
          <ListItem>
            <ListItemPrefix>
              <FaPeopleGroup />
            </ListItemPrefix>
            Add User
          </ListItem>
        </Link>
      </List>
    </Card>
  );
}

export default SidebarAdmin;
