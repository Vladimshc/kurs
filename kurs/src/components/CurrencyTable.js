import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import CurrencyTableHead from './CurrencyTableHead'

function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const styles = theme => ({
    root: {
        paddingLeft: theme.spacing.unit * 3,
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 6

    },
    table: {
        minWidth: 800,
    },
    tableWrapper: {
        overflowX: 'auto',
        height: 600,

    },
});

class CurrencyTable extends React.Component {

    state = {
        order: 'asc',
        orderBy: ''
    };

    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'desc';

        if (this.state.orderBy === property && this.state.order === 'desc') {
            order = 'asc';
        }
        this.setState({ order, orderBy });
    };

    render() {
        const { classes } = this.props;
        const { order, orderBy} = this.state;
        const { data } = this.props;

        return (
            <Paper className={classes.root}>
                <div className={classes.tableWrapper}>
                    <Table className={classes.table} aria-labelledby="tableTitle">
                        <CurrencyTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={this.handleRequestSort}
                        />
                        <TableBody>
                            {stableSort(data, getSorting(order, orderBy))
                                .map(n => {
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={n.id}
                                        >
                                            <TableCell component="th" scope="row" padding="none">
                                                {n.date}
                                            </TableCell>
                                            <TableCell align="right">{n.bid}</TableCell>
                                            <TableCell align="right">{n.ask}</TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </div>
            </Paper>
        );
    }
}

CurrencyTable.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired
};

export default withStyles(styles)(CurrencyTable);
