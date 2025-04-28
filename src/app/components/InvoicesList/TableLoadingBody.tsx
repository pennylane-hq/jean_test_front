import { ITEMS_PER_PAGE } from './constants'
import { tableColumns } from './structure'

const TableLoadingBody = (): React.ReactElement => {
  return (
    <tbody>
      {[...Array(ITEMS_PER_PAGE)].map((_, i) => (
        <tr key={i}>
          {tableColumns.map((column) => (
            <td key={column.key}>
              <div className="placeholder col-12 bg-secondary"></div>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

export default TableLoadingBody
