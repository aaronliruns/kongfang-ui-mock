import ReactDataGrid from 'react-data-grid';
import React from 'react';
import update from 'immutability-helper';
import './Paytable.css';


class Paytable extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._columns = [
          {
            key: 'id',
            name: 'ID',
            width: 80,
            locked: true
          },
          {
            key: 'name',
            name: 'Name',
            editable: false,
            sortable: true
          },
          {
            key: 'login',
            name: 'Login',
            editable: false,
            sortable: true
          },
          {
            key: 'gender',
            name: 'Gender',
            editable: false,
            sortable: true
          },
          {
            key: 'cny',
            name: 'CNY',
            editable: true,
            sortable: true
          },
          {
            key: 'php',
            name: 'PHP',
            editable: true,
            sortable: true
          },
          {
            key: 'usd',
            name: 'USD',
            editable: true,
            sortable: true
          }
        ];
    
        let originalRows = this.createRows(50);
        let rows = originalRows.slice(0);
        this.state = { originalRows, rows };


      }
    
      createRows = (numberOfRows) => {
        let rows = [];
        for (let i = 1; i <= numberOfRows; i++) {
          rows.push({
            id: i,
            name: 'Name ' + i,
            login: Math.min(100, Math.round(Math.random() * 110)),
            gender: ['Male', 'Female'][Math.floor((Math.random() * 2) + 0)],
            cny: 0.0,
            php: 0.0,
            usd: 0.0
          });
        }
        return rows;
      };
    
      rowGetter = (i) => {
        return this.state.rows[i];
      };
    
      handleGridRowsUpdated = ({ fromRow, toRow, updated }) => {
        let rows = this.state.rows.slice();
    
        for (let i = fromRow; i <= toRow; i++) {
          let rowToUpdate = rows[i];
          let updatedRow = update(rowToUpdate, {$merge: updated});
          rows[i] = updatedRow;
        }
    
        this.setState({ rows });
      };

      handleGridSort = (sortColumn, sortDirection) => {
        const comparer = (a, b) => {
          if (sortDirection === 'ASC') {
            return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
          } else if (sortDirection === 'DESC') {
            return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
          }
        };
    
        const rows = sortDirection === 'NONE' ? this.state.originalRows.slice(0) : this.state.rows.sort(comparer);
    
        this.setState({ rows });
      };
    
    
      render() {
        return  (
          <ReactDataGrid className='ui celled table' 
            onGridSort={this.handleGridSort}
            enableCellSelect={true}
            columns={this._columns}
            rowGetter={this.rowGetter}
            rowsCount={this.state.rows.length}
            minHeight={1000}
            onGridRowsUpdated={this.handleGridRowsUpdated} />);
      }
}

export default Paytable;