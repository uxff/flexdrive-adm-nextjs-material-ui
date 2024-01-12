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
import nodelistdata from '../data/nodelist.json'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function Nodelist() {
  // define form values here
  const [lastRegTime, setLastRegTime] = React.useState(-1);

  const handleLastRegTimeChange = (event) => {
    setLastRegTime(event.target.value);
  };

  const queryResult = nodelistdata;//JSON.parse(nodelistdata);
  // console.log(queryResult);

  const perPage = 10;
  const [pageNumber, setPageNumber] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(queryResult?Math.ceil(queryResult.result.total/perPage):0);

  const fetchPage = async (pageNumber) => {
    const url = `http://192.168.164.129:10010/admapi/fileindex/list?page=${pageNumber}&pagesize=${perPage}`;
    const res = await fetch('http://localhost:3000/api/nodelist?page='+pageNumber, {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'API-Token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJncGEiOiIxLjAuMTcwNDUwMzEwMCJ9.bUXrqlMau9-bWPjYZiiTsBttca8cPWX4seAhC5Ac69A',
        // Cookie:'gpa=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJncGEiOiIxLjAuMTcwNDAyNzQzMSJ9.KTDDriAR0RnscDyM0WCgiHIvnrcNScxS_ZCKGjh3FoI' // does not work
      }
    });
    const data = await res.json();
    console.log(data);
    return data;
    // setTotalPage(data.result.total / perPage);
  }

  // const queryClient = new QueryClient();
  // const queryClientProvider = new QueryClientProvider({client: queryClient});

  // const {
  //   isLoading,
  //   isError,
  //   queryResult,
  //   isFetching,
  // } = useQuery({
  //   // queryClient,
  //   // QueryClientProvider: queryClientProvider,
  //   queryKey: ['page', pageNumber],
  //   queryFn: () => fetchPage(pageNumber),
  //   keepPreviousData : true
  // });


  return (
    <>
    
    {/* <QueryClientProvider client={queryClient}> */}
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
            // '& .MuiTextField-root': { m: 1, width: '25ch' },
            '& > :not(style)': { m: 1, width: '20ch' },
          }}
          noValidate
          autoComplete="off"
        >

          {/* <FormControl > */}
          {/* <Stack spacing={2}> */}

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
              <MenuItem value={-1}>Not Selected</MenuItem>
              <MenuItem value={60}>1 Min</MenuItem>
              <MenuItem value={300}>5 Min</MenuItem>
            </Select>

            <Button variant="contained">Search</Button>

          {/* </Stack> */}
          {/* </FormControl> */}
        </Box>


        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name(&ClusterId)</TableCell>
                <TableCell align="right">NodeAddr</TableCell>
                <TableCell align="right">TotalSpace&nbsp;(kB)</TableCell>
                <TableCell align="right">UsedSpace&nbsp;(kB)</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">LastRegistered</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {queryResult && console.log(queryResult)} */}
              {queryResult ? queryResult.result.list.map((row) => (
                <TableRow
                  key={row.Id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.NodeName}({row.ClusterId})
                  </TableCell>
                  <TableCell align="right">{row.NodeAddr}</TableCell>
                  <TableCell align="right">{row.TotalSpace}</TableCell>
                  <TableCell align="right">{row.UsedSpace}</TableCell>
                  <TableCell align="right">{row.Status}</TableCell>
                  <TableCell align="right">{row.LastRegistered}</TableCell>
                </TableRow>
              )):(
                <TableRow
                  key={'empty-row'}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" colSpan={10}>
                    No result found.
                  </TableCell>
                </TableRow>

              )}
            </TableBody>
          </Table>
        </TableContainer>
        Content here.

        {/* Pagination */}
        {totalPage && 
          <Stack spacing={2}>
            <Pagination count={totalPage} color="primary" showFirstButton showLastButton onChange={(event, pageNumber)=>(
              setPageNumber(pageNumber)
            )}/>
          </Stack>
        }


      </Container>
      {/* </QueryClientProvider> */}
    </>
  );
}
