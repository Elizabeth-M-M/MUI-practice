import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import WidgetsIcon from "@mui/icons-material/Widgets";
import MessageIcon from "@mui/icons-material/Message";
import DescriptionIcon from "@mui/icons-material/Description";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import StarIcon from "@mui/icons-material/Star";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import {
  CalendarViewDayRounded,
  Camera,
  Image,
  People,
  Search,
  Settings,
} from "@mui/icons-material";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { DataGrid } from "@mui/x-data-grid";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  InputBase,
  Link,
  Stack,
  TextField,
} from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

// not data grid
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const styles = {
  textField: {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused": {
        border: "none", // Remove the border on focus
        boxShadow: "none", // Remove the box shadow on focus
      },
      "&:hover fieldset": {
        border: "none", // Remove the border on hover
      },
      "& fieldset": {
        border: "none !important", // Remove the default border
      },
    },
  },
};

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box
      sx={{ display: "flex", bgcolor: "#F7F7F5", minHeight: "100vh" }}
      padding={3}
    >
      <CssBaseline />
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, pl: 3 }}>
        {/* datagrid*/}
        {/* <Box
          sx={{ height: 400, width: "calc(100vw - 312px)" }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box> */}

        <Box sx={{ height: 400, width: "calc(100vw - 312px)" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}
const links = [
  {
    linkName: "Dashboard",
    icon: <WidgetsIcon />,
  },
  {
    linkName: "My Courses",
    icon: <DescriptionIcon />,
  },
  {
    linkName: "My Classes",
    icon: <FolderCopyIcon />,
  },
  {
    linkName: "Messages",
    icon: <MessageIcon />,
  },
  {
    linkName: "Notifications",
    icon: <NotificationsActiveIcon />,
  },
  {
    linkName: "Calenders",
    icon: <CalendarViewDayRounded />,
  },
  {
    linkName: "Community",
    icon: <People />,
  },
  {
    linkName: "Settings",
    icon: <Settings />,
  },
];

const Navbar = () => {
  const [selected, setSelected] = React.useState(0);
  return (
    <Drawer
      sx={{
        // m:3,
        width: drawerWidth,
        flexShrink: 0,
        // m:0,
        // fontSize: "10px",
        "& .MuiDrawer-paper": {
          m: 3,
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#1F1E30",
          borderRadius: 2,
          color: "white",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ width: "90%", mx: "auto" }} component="div">
        <Box sx={{ mt: 3, mb: 6, pl: "16px" }} component="div">
          <Stack direction="row" spacing={2} alignItems="center">
            <DeviceHubIcon />
            <Typography variant="h4" gutterBottom>
              Eduplex
            </Typography>
          </Stack>
        </Box>

        {/* <Toolbar /> */}

        {/* <Divider /> */}
        <List>
          {links.map((link, index) => (
            <ListItem
              key={link.linkName}
              disablePadding
              sx={{
                backgroundColor: index === selected ? "#D8F275" : "",
                borderRadius: index === selected ? 8 : "",
                color: index === selected ? "#1F1E30" : "",
              }}
              onClick={() => setSelected(index)}
            >
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    color: index === selected ? "#1F1E30" : "#fff",
                  }}
                >
                  {link.icon}
                </ListItemIcon>
                <ListItemText primary={link.linkName} sx={{ fontSize: 14 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
