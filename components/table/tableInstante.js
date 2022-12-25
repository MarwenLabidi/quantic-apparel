import React from 'react'
import {useTable} from 'react-table'
import {COLUMNN} from './column'

const TableInstante = ({data}) => {
  const columns = React.useMemo(() => COLUMNN, [])
  const datas = React.useMemo(() => data, [])
  const tableInstance = useTable({columns, data:datas})
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        }
        )}
      </tbody>
    </table>
  )
}

export default TableInstante