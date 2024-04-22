import {
  MRT_GlobalFilterTextField,
  MRT_TableBodyCellValue,
  MRT_TablePagination,
  MRT_ToolbarAlertBanner,
  flexRender,
  useMaterialReactTable,
} from 'material-react-table';
import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from '@mui/material';
import { data } from './makeData';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

console.log(data)
const columns = [
  {
    accessorKey: 'firstName',
    header: 'Prenom',
  },
  {
    accessorKey: 'lastName',
    header: 'Nom',
  },
  {
    accessorKey: 'email',
    header: 'Poste',
  },
  {
    accessorKey: 'role',
    header: 'City',
  },
];


const Example = () => {
  
  const handleExportRows = (rows) => {
    const rowData = rows.map((row) => row.original);
    if (rowData.length > 10) {
      alert("Vous avez sélectionné trop de joueur")
    }else{
      console.log(rowData)
    }
  };


  const table = useMaterialReactTable({
    columns,
    data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    //MRT display columns can still work, optionally override cell renders with `displayColumnDefOptions`
    enableRowSelection: true,
    initialState: {
      pagination: { pageSize: 5, pageIndex: 0 },
      showGlobalFilter: true,
    },
    //customize the MRT components
    muiPaginationProps: {
      rowsPerPageOptions: [5, 10],
      variant: 'outlined',
    },
    paginationDisplayMode: 'pages',
  });

  return (
    <Stack sx={{ m: '2rem 0' }}>
      <Typography variant="h4">Liste des joueurs</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/**
         * Use MRT components along side your own markup.
         * They just need the `table` instance passed as a prop to work!
         */}
        <MRT_GlobalFilterTextField table={table} />
        <MRT_TablePagination table={table} />
      </Box>
      {/* Using Vanilla Material-UI Table components here */}
      <TableContainer>
        <Table>
          {/* Use your own markup, customize however you want using the power of TanStack Table */}
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell align="center" variant="head" key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.Header ??
                            header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row, rowIndex) => (
              <TableRow key={row.id} selected={row.getIsSelected()}>
                {row.getVisibleCells().map((cell, _columnIndex) => (
                  <TableCell align="center" variant="body" key={cell.id}>
                    {/* Use MRT's cell renderer that provides better logic than flexRender */}
                    <MRT_TableBodyCellValue
                      cell={cell}
                      table={table}
                      staticRowIndex={rowIndex} //just for batch row selection to work
                    />

                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
          //only export selected rows
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          startIcon={<FileDownloadIcon />}
      >
          Appuyer pour confirmer la selection
      </Button>
      <MRT_ToolbarAlertBanner stackAlertBanner table={table} />
    </Stack>
  );
};

export default Example;
