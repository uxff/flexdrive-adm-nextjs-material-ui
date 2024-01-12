'use client';
import React from 'react';
import { useEffect } from 'react';
import Container from '@mui/material/Container';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavBar from '../src/ResponsiveAppBar';
import routes from '../src/routes';
import ResponsiveAppBar from '../src/ResponsiveAppBar';
import BasicMenu from '../src/BasicMenu';
import theme from '../src/theme';
import { ThemeProvider } from '@mui/material/styles';
// import Breadcrumb from '../src/Breadcrumb';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

// import { DatePicker } from '@orange_digital/chakra-datepicker';

// import { DateTimePicker } from '@mantine/dates';

import Button from '@mui/material/Button';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Intro() {
  // define form values here
  const [lastRegTime, setLastRegTime] = React.useState(-1);

  const handleLastRegTimeChange = (event) => {
    setLastRegTime(event.target.value);
  };

  return (
    <>
    
      <ResponsiveAppBar />
      <Container maxWidth="lg">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
              Home
          </Link>
          <Typography color="text.primary">Cluster</Typography>
          <Typography color="text.primary">Node List</Typography>
        </Breadcrumbs>

        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            // '& > :not(style)': { m: 1, width: '20ch' },
          }}
          noValidate
          autoComplete="off"
        >

          {/* <FormControl > */}
          <div>

            {/* <Typography color="text.primary">Name</Typography> */}
            <TextField id="outlined-search" label="Name" />
            <TextField id="outlined-search2" label="Name2" type="search" />

            {/* <Typography color="text.primary">Time Range</Typography> */}

            {/* <DatePicker initialValue={new Date()} backgroundColor="blue.500" /> */}
            {/* <DateTimePicker valueFormat="DD MM YYYY hh:mm A" label="Pick date and time" placeholder="Pick date and time" /> */}

            <InputLabel id="demo-simple-select-label">Last Registered</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={lastRegTime}
              label="Last Registered"
              onChange={handleLastRegTimeChange}
            >
              <MenuItem value={60}>1 Min</MenuItem>
              <MenuItem value={300}>5 Min</MenuItem>
            </Select>

            <Button variant="contained">Search</Button>

          </div>
          {/* </FormControl> */}
        </Box>


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
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
        Content here.

        {/* Pagination */}
        <Stack spacing={2}>
          <Pagination count={10} color="primary" showFirstButton showLastButton onChange={(event, pageNumber)=>(
            console.log("page number: ", pageNumber)
          )}/>
        </Stack>


      </Container>
    </>
  );
}
