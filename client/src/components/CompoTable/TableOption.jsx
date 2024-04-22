import { useMaterialReactTable } from "material-react-table";

const table = useMaterialReactTable({
    columns,
    data,
    initialState: {
      density: 'xs', //set default density to compact
      expanded: true, //expand all rows by default
      pagination: { pageIndex: 0, pageSize: 15 }, //set different default page size
      showColumnFilters: true, //show filters by default
      sorting: [{ id: 'name', desc: false }], //sort by name ascending by default
    },
  });
  
export default useMaterialReactTable