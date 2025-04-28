import { ITEMS_PER_PAGE } from "./constants"

const TableLoadingBody = (): React.ReactElement => {
  return (
    <tbody>
      {[...Array(ITEMS_PER_PAGE)].map((_, i) => (
        <tr key={i}>
          <td><div className="placeholder col-12 bg-secondary"></div></td>
        </tr>
      ))}
    </tbody>
  )
}

export default TableLoadingBody