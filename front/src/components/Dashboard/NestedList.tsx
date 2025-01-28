import TrashIcon from "@mui/icons-material/Delete";
import DraftsIcon from "@mui/icons-material/Drafts";
import EmailIcon from "@mui/icons-material/Email";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ForumIcon from "@mui/icons-material/Forum";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import SendIcon from "@mui/icons-material/Send";
import SmsFailedIcon from "@mui/icons-material/SmsFailed";
import { ListItem } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { useState } from "react";
interface NestedListProps {
  title: string;
  items: string[];
}

export default function NestedList({ title, items }: NestedListProps) {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby={`title mailbox ${
        title.toLocaleLowerCase().includes("carpetas")
          ? "folders"
          : "categories"
      }-menu`}
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          onClick={handleClick}
          sx={{ display: "flow", justifyContent: "space-between" }}
        >
          <span>{title}</span>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListSubheader>
      }
    >
      <Collapse in={open} timeout="auto" unmountOnExit>
        {items.map((subItem, pos) => (
          <ListItem disablePadding key={pos}>
            <ListItemButton>
              <ListItemIcon>
                {subItem === "Recibido" ? (
                  <InboxIcon />
                ) : subItem === "Enviado" ? (
                  <SendIcon />
                ) : subItem === "Borradores" ? (
                  <DraftsIcon />
                ) : subItem === "Principal" ? (
                  <EmailIcon />
                ) : subItem === "Promoción" ? (
                  <LocalOfferIcon />
                ) : subItem === "Social" ? (
                  <PersonIcon />
                ) : subItem === "Notificación" ? (
                  <NotificationsIcon />
                ) : subItem === "Foro" ? (
                  <ForumIcon />
                ) : subItem === "Importante" ? (
                  <LabelImportantIcon />
                ) : subItem === "Spam" ? (
                  <SmsFailedIcon />
                ) : subItem === "Papelera" ? (
                  <TrashIcon />
                ) : (
                  <InboxIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={subItem} />
            </ListItemButton>
          </ListItem>
        ))}
      </Collapse>
    </List>
  );
}
