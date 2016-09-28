import React,{Component,PropTypes} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
export default class Confirm extends Component {

    render() {
        const actions = [
            <FlatButton
                label="取消"
                primary={true}
                onTouchTap={() => this.props.cancel() }
                />,
            <FlatButton
                label="确定"
                primary={true}
                onTouchTap={() => this.props.confirm() }
                />,
        ];

        return (
            <Dialog
                title={this.props.title}
                actions={actions}
                modal={this.props.modal}
                open={this.props.open}
                onRequestClose={() => this.props.handleClose() }
                >
                { this.props.content }
            </Dialog>
        );
    }
}


Confirm.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    modal: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
}

Confirm.defaultProps = {
    title: '标题',
    content: '内容',
    modal: false,
    open: false
}