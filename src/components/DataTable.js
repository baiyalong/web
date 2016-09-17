import React, {Component, PropTypes} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';



class DataTable extends Component {
    render() {
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        {
                            this.props.colNames.map(e => {
                                return <TableHeaderColumn key={e.code}>{e.name}</TableHeaderColumn>
                            })
                        }
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        this.props.rowValues.map(e => {
                            return <TableRow key={e['_id'] || e['id']}>
                                {
                                    this.props.colNames.map(el => {
                                        return <TableRowColumn key={el.code}>{e[el.code]}</TableRowColumn>
                                    })
                                }
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        )
    }
}

DataTable.propTypes = {
    // colNames: PropTypes.arry.isRequired,
    // rowValues: PropTypes.arry.isRequired,
}

DataTable.defaultProps = {
    colNames: [
        { code: 'col1', name: '第一列' },
        { code: 'col2', name: '第二列' },
        { code: 'col3', name: '第三列' }
    ],
    rowValues: [
        { _id: '1', col1: 1, col2: 2, col3: 3 },
        { _id: '2', col1: 2, col2: 2, col3: 3 },
        { _id: '3', col1: 3, col2: 2, col3: 3 },
        { _id: '4', col1: 4, col2: 2, col3: 3 },
        { _id: '5', col1: 5, col2: 2, col3: 3 },
        { _id: '6', col1: 6, col2: 2, col3: 3 },
        { _id: '7', col1: 7, col2: 2, col3: 3 },
        { _id: '8', col1: 8, col2: 2, col3: 3 },
        { _id: '9', col1: 9, col2: 2, col3: 3 },
    ],
}


export default DataTable;