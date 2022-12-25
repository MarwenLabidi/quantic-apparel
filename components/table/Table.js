import React from "react";
import { useTable, useSortBy, useGlobalFilter, useFilters,usePagination } from "react-table";
import { COLUMNN } from "./column";
import GlobalFiltering from "./GlobalFiltering";
import { table, td, th, tr,checkboxHideColumn,footer,button,note,buttonLeft } from "./table.module.css";
const Table = ({ data }) => {
        const columns = React.useMemo(() => COLUMNN, []);
        const datas = React.useMemo(() => data, []);
        const tableInstance = useTable(
                { columns, data: datas,initialState: {  pageSize: 15 }},
                useFilters,
                useGlobalFilter,
                useSortBy,
                usePagination,
        );
        const {
                getTableProps,
                getTableBodyProps,
                headerGroups,
                page,
                nextPage,
                previousPage,
                canNextPage,
                canPreviousPage,
                prepareRow,
                state,
                setGlobalFilter,
                allColumns,
                getToggleHideAllColumnsProps,
                state: {  pageSize },
                pageOptions
        } = tableInstance;
        const { globalFilter,pageIndex } = state;
        return (
                <>
                        <GlobalFiltering
                                filter={globalFilter}
                                setFilter={setGlobalFilter}
                        />
                        <div>
                                <div className={checkboxHideColumn} >
                                        {allColumns.map((column,index) => (
                                                <div  key={`first4${index}`}>
                                                        <label  key={`firsdfsfsdt4${index}`}>
                                                                <input key={`inputcheckbox${index}`}
                                                                        type='checkbox'
                                                                        {...column.getToggleHiddenProps()}
                                                                />
                                                                {column.Header}
                                                        </label>
                                                </div>
                                        ))}
                                </div>
                        </div>
                        <table className={table} {...getTableProps()}>
                                <thead className={th}>
                                        {headerGroups.map((headerGroup,index) => (
                                                <tr key={`tr1${index}`}
                                                        className={tr}
                                                        {...headerGroup.getHeaderGroupProps()}>
                                                        {headerGroup.headers.map(
                                                                (column,index) => (
                                                                       
                                                                                <th key={`th1${index}`}
                                                                                        {...column.getHeaderProps(
                                                                                                column.getSortByToggleProps()
                                                                                        )}>

                                                                                        {column.render(
                                                                                                "Header"
                                                                                        )}
                                                                                        <div>
                                                                                                {column.canFilter
                                                                                                        ? column.render(
                                                                                                                  "Filter"
                                                                                                          )
                                                                                                        : null}
                                                                                        </div>
                                                                                        <span>
                                                                                                {column.isSorted
                                                                                                        ? column.isSortedDesc
                                                                                                                ? "🔽"
                                                                                                                : "🔼"
                                                                                                        : ""}
                                                                                        </span>
                                                                                </th>
                                                                        
                                                                )
                                                        )}
                                                </tr>
                                        ))}
                                </thead>
                                <tbody className={td} {...getTableBodyProps()}>
                                        {page.map((row,index) => {
                                                prepareRow(row);
                                                return (
                                                        <tr
                                                        key={`tr2${index}`}
                                                                className={tr}
                                                                {...row.getRowProps()}>
                                                                {row.cells.map(
                                                                        (
                                                                                cell,index
                                                                        ) => {
                                                                                return (
                                                                                        <td key={`tdd1${index}`}
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
                        <div className={footer}>
        <p className={note}>Nt: you can sort the column by clicking on the header</p>
                        <div>
                                <span>
                                        Page{' '}
                                        <strong>
                                                {pageIndex+1} of {pageOptions.length}


                                         </strong>{' '}
                                </span>
                                <button onClick={()=>previousPage()} disabled={!canPreviousPage} className={button}>Previous</button>
                                <button onClick={()=>nextPage()} disabled={!canNextPage} className={buttonLeft}>Next</button>
                        </div>
      </div>
                </>
        );
};

export default Table;
