import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar} from '@mui/material';

const columns = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar>{params.value.charAt(0)}</Avatar>
        <span style={{ marginLeft: 8 }}>{params.value}</span>
      </div>
    ),
  },
  { field: 'email', headerName: 'Email', flex: 1 },
  { field: 'company', headerName: 'Company', flex: 1 },
  { field: 'phone', headerName: 'Phone', flex: 1 },
  { field: 'creationDate', headerName: 'Creation date', flex: 1 },
  { field: 'city', headerName: 'City', flex: 1 },
  { field: 'jobTitle', headerName: 'Job Title', flex: 1 },
];

const rows = [
  { id: 1, name: 'Brian Chesky', email: 'ches@airbnb.com', company: 'Airbnb', phone: '', creationDate: '1 Jul 2024 - 20:33', city: 'San Francisco', jobTitle: '' },
  { id: 2, name: 'Alex Prot', email: 'ales@qonto.com', company: 'Qonto', phone: '', creationDate: '1 Jul 2024 - 20:33', city: 'Paris', jobTitle: '' },
  { id: 3, name: 'Pat Collison', email: 'collison@stripe.com', company: 'Stripe', phone: '', creationDate: '1 Jul 2024 - 20:33', city: 'San Francisco', jobTitle: '' },
  { id: 4, name: 'Dylan Filed', email: 'field@figma.com', company: 'Figma', phone: '', creationDate: '1 Jul 2024 - 20:33', city: 'San Francisco', jobTitle: '' },
  { id: 5, name: 'Ivan Zhao', email: 'zhao@notion.com', company: 'Notion', phone: '', creationDate: '1 Jul 2024 - 20:33', city: 'San Francisco', jobTitle: '' },
];

const PeopleTable = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
};

export default PeopleTable;
