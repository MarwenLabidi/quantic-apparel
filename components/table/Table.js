import React from "react";
import { useTable, useSortBy,useGlobalFilter,useFilters } from "react-table";
import { COLUMNN } from "./column";
import GlobalFiltering from "./GlobalFiltering";
import { table, td, th, tr } from "./table.module.css";
const Table = ({ data }) => {
        const columns = React.useMemo(() => COLUMNN, []);
        const datas = React.useMemo(() => data, []);
        const tableInstance = useTable({ columns, data: datas },useFilters,useGlobalFilter, useSortBy);
        const {
                getTableProps,
                getTableBodyProps,
                headerGroups,
                rows,
                prepareRow,
                state,
                setGlobalFilter
        } = tableInstance;
        const {globalFilter}=state
        return (
                <>
                <GlobalFiltering filter={globalFilter} setFilter={setGlobalFilter}/>
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
                                                                                                        <div>{column.canFilter?column.render('Filter'):null}</div>
                                                                                                </th>
                                                                                                                                                                <div>
                                                                                                                                                                {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                                                                                                                                                        </div>
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
                </>
        );
};

export default Table;
