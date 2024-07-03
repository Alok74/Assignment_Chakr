import React from 'react';
import MUIDataTable from "mui-datatables";
import { Avatar, Link, Typography } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    padding: '16px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    borderBottom: '1px solid #ddd',
  },
  titleIcon: {
    marginRight: '8px',
  },
});

const columns = [
  {
    name: "Avatar",
    label: "",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value) => (
        <Avatar src={value} />
      ),
    },
  },
  {
    name: "name",
    label: "Name",
  },
  {
    name: "domain",
    label: "Domain Name",
    options: {
      customBodyRender: (value) => (
        <Link href={`https://${value}`} target="_blank" rel="noopener">
          {value}
        </Link>
      ),
    },
  },
  {
    name: "owner",
    label: "Account Owner",
  },
  {
    name: "creationDate",
    label: "Creation date",
  },
  {
    name: "employees",
    label: "Employees",
  },
  {
    name: "linkedin",
    label: "LinkedIn",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value) => (
        <Link href={value} target="_blank" rel="noopener">
          <LinkedInIcon />
        </Link>
      ),
    },
  },
  {
    name: "address",
    label: "Address",
  },
];

const data = [
  { id: 1, avatar: 'airbnb-logo-url', name: 'Airbnb', domain: 'airbnb.com', owner: '', creationDate: '1 Jul 2024 - 20:33', employees: 5000, linkedin: '', address: 'San Francisco' },
  { id: 2, avatar: 'qonto-logo-url', name: 'Qonto', domain: 'qonto.com', owner: '', creationDate: '1 Jul 2024 - 20:33', employees: 800, linkedin: '', address: 'San Francisco' },
  { id: 3, avatar: 'stripe-logo-url', name: 'Stripe', domain: 'stripe.com', owner: '', creationDate: '1 Jul 2024 - 20:33', employees: 8000, linkedin: '', address: 'San Francisco' },
  { id: 4, avatar: 'figma-logo-url', name: 'Figma', domain: 'figma.com', owner: '', creationDate: '1 Jul 2024 - 20:33', employees: 800, linkedin: '', address: 'San Francisco' },
  { id: 5, avatar: 'notion-logo-url', name: 'Notion', domain: 'notion.com', owner: '', creationDate: '1 Jul 2024 - 20:33', employees: 400, linkedin: '', address: 'San Francisco' },
];

const options = {
  filterType: 'checkbox',
  selectableRows: 'multiple',
  responsive: 'standard',
  download: false,
  print: false,
  viewColumns: false,
  selectableRowsHeader: true,
  selectableRowsHideCheckboxes: false,
  elevation: 0, // removes the card background shadow
};

const DataTable = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <BusinessIcon className={classes.titleIcon} />
        <Typography variant="h6">All Companies · 5</Typography>
      </div>
      <MUIDataTable
        // title={"All Companies"}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
}

export default DataTable;
