import React from 'react';

type TableProps = {
  thead: string[]; // Define thead as an array of strings
  tbody: Record<string, any>[]; // Define tbody as an array of objects (dynamic keys)
};

const Table: React.FC<TableProps> = ({ thead, tbody }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {thead.map((item, index) => {
              return <th key={index}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {tbody.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {thead.map((key, colIndex) => (
                <td key={colIndex}>{row[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
