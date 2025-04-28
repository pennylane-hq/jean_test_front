import { tableColumns } from "./structure"

const TableHeader = () => {
  return <thead>
    <tr>
      {tableColumns.map((column) => (
        <th key={column.key}>{column.header}</th>
      ))}
    </tr>
  </thead>
}

export default TableHeader
