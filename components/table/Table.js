import React from "react";
import { useTable, useSortBy } from "react-table";
import { COLUMNN } from "./column";
import { table, td, th, tr } from "./table.module.css";
const Table = ({ data }) => {
        const columns = React.useMemo(() => COLUMNN, []);
        const datas = React.useMemo(() => data, []);
        const tableInstance = useTable({ columns, data: datas }, useSortBy);
        const {
                getTableProps,
                getTableBodyProps,
                headerGroups,
                rows,
                prepareRow,
        } = tableInstance;
        return (
                <table className={table} {...getTableProps()}>
                        <thead className={th}>
                                {headerGroups.map((headerGroup) => (
                                        <tr
                                                className={tr}
                                                {...headerGroup.getHeaderGroupProps()}>
                                                {headerGroup.headers.map(
                                                        (column) => (
                                                                <>
									<th
										{...column.getHeaderProps(
											column.getSortByToggleProps()
										)}>
										{column.render(
											"Header"
										)}
									</th>
																	<span>
																	{column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
																</span>
								</>
                                                        )
                                                )}
                                        </tr>
                                ))}
                        </thead>
                        <tbody className={td} {...getTableBodyProps()}>
                                {rows.map((row) => {
                                        prepareRow(row);
                                        return (
                                                <tr
                                                        className={tr}
                                                        {...row.getRowProps()}>
                                                        {row.cells.map(
                                                                (cell) => {
                                                                        return (
                                                                                <td
                                                                                        {...cell.getCellProps()}>
                                                                                        {cell.render(
                                                                                                "Cell"
                                                                                        )}
                                                                                </td>
                                                                        );
                                                                }
                                                        )}
                                                </tr>
                                        );
                                })}
                        </tbody>
                </table>
        );
};

export default Table;
