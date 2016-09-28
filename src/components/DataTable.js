import React, {Component, PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableFooter, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/content/remove';
import Update from 'material-ui/svg-icons/content/create';
import Details from 'material-ui/svg-icons/navigation/more-horiz';
import Pagination from './Pagination';


class DataTable extends Component {

    componentDidMount() {
        this.props.retrieve()
    }

    render() {
        const table = {
            table: {
                // height:'600px'
                fixedHeader: true,
                fixedFooter: true,
                selectable: true,
                multiSelectable: true,
            },
            header: {
                displaySelectAll: true,
                adjustForCheckbox: true,
                enableSelectAll: true,
            },
            body: {
                displayRowCheckbox: true,
                deselectOnClickaway: false,
                showRowHover: true,
                stripedRows: true,
            },
            footer: {
                adjustForCheckbox: true,
            }
        }
        return (
            <Paper style={{ height: '100%' }}>
                <Table style={{ height: '100%' }} {...table.table} >
                    <TableHeader {...table.header} >
                        <TableRow>
                            {
                                this.props.colNames.map(e => {
                                    return <TableHeaderColumn key={e.code}>{e.name}</TableHeaderColumn>
                                })
                            }
                            <TableHeaderColumn>操作</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody {...table.body} >
                        {
                            this.props.rowValues.map(e => {
                                return <TableRow key={e['_id'] || e['id']}>
                                    {
                                        this.props.colNames.map(el => {
                                            return <TableRowColumn key={el.code}>{e[el.code]}</TableRowColumn>
                                        })
                                    }
                                    <TableRowColumn>
                                        <IconButton><Delete /></IconButton>
                                        <IconButton><Update /></IconButton>
                                        <IconButton><Details /></IconButton>
                                    </TableRowColumn>
                                </TableRow>
                            })
                        }
                    </TableBody>
                    <TableFooter {...table.footer} >
                        <TableRow>
                            <TableRowColumn colSpan="3" style={{ textAlign: 'right' }}>
                                <Pagination />
                            </TableRowColumn>
                        </TableRow>
                    </TableFooter>
                </Table>
            </Paper>
        )
    }
}

DataTable.propTypes = {
    // colNames: PropTypes.arry.isRequired,
    // rowValues: PropTypes.arry.isRequired,
}

DataTable.defaultProps = {
    colNames: [
        // { code: 'col1', name: '第一列' },
        // { code: 'col2', name: '第二列' },
        // { code: 'col3', name: '第三列' }
    ],
    rowValues: [
        // { _id: '1', col1: 1, col2: 2, col3: 3 },
        // { _id: '2', col1: 2, col2: 2, col3: 3 },
        // { _id: '3', col1: 3, col2: 2, col3: 3 },
        // { _id: '4', col1: 4, col2: 2, col3: 3 },
        // { _id: '5', col1: 5, col2: 2, col3: 3 },
        // { _id: '6', col1: 6, col2: 2, col3: 3 },
        // { _id: '7', col1: 7, col2: 2, col3: 3 },
        // { _id: '8', col1: 8, col2: 2, col3: 3 },
        // { _id: '9', col1: 9, col2: 2, col3: 3 },
        // { _id: '10', col1: 9, col2: 2, col3: 3 },
        // { _id: '91', col1: 9, col2: 2, col3: 3 },
        // { _id: '92', col1: 9, col2: 2, col3: 3 },
        // { _id: '93', col1: 9, col2: 2, col3: 3 },
        // { _id: '94', col1: 9, col2: 2, col3: 3 },
        // { _id: '95', col1: 9, col2: 2, col3: 3 },
        // { _id: '96', col1: 9, col2: 2, col3: 3 },
        // { _id: '97', col1: 9, col2: 2, col3: 3 },
        // { _id: '98', col1: 9, col2: 2, col3: 3 },
        // { _id: '99', col1: 9, col2: 2, col3: 3 },
        // { _id: '900', col1: 9, col2: 2, col3: 3 },
        // { _id: '911', col1: 9, col2: 2, col3: 3 },
        // { _id: '922', col1: 9, col2: 2, col3: 3 },
        // { _id: '933', col1: 9, col2: 2, col3: 3 },
        // { _id: '94431', col1: 9, col2: 2, col3: 3 },
    ],
}


export default DataTable;