import React from "react";

import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

interface ExpandOptionsProps {
  title: string;
  icon: React.ReactElement;
  items: Array<string>;
  setSelected: Function;
  selectedItems: Array<string>;
}

function ExpandOptions(props: ExpandOptionsProps) {
  const { title, icon, items, setSelected, selectedItems }: ExpandOptionsProps =
    props;
  const [open, setOpen] = React.useState<boolean>(false);

  const handleToggle = (value: string) => () => {
    const currentIndex = selectedItems.indexOf(value);
    const newChecked = [...selectedItems];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setSelected(newChecked);
  };

  return (
    <>
      <ListItemButton className="option_header" onClick={() => setOpen(!open)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
        {open ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {items?.map((value) => (
            <ListItem key={value} disablePadding>
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={selectedItems.includes(value)}
                  />
                </ListItemIcon>
                <ListItemText primary={`${value}`} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
}

export default ExpandOptions;
