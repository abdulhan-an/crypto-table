import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';

const CryptoTable = ({ data }) => {
  const columns = useMemo(() => [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Rank', accessor: 'rank' },
    { Header: 'Symbol', accessor: 'symbol' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Website', accessor: 'website', Cell: ({ cell: { value } }) => <a href={value} target="_blank" rel="noopener noreferrer">Link</a> },
    { Header: 'Price (USD)', accessor: 'priceUsd' },
    { Header: 'Price (GBP)', accessor: 'priceGbp' },
    { Header: 'Price (EUR)', accessor: 'priceEur' },
    { Header: 'Price (AED)', accessor: 'priceAed' },
  ], []);

  const tableInstance = useTable({ columns, data }, useSortBy);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())} style={{ borderBottom: 'solid 3px red', background: 'aliceblue', color: 'black', fontWeight: 'bold' }}>
                {column.render('Header')}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()} style={{ padding: '10px', border: 'solid 1px gray' }}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CryptoTable;
