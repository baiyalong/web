import React, {Component, PropTypes} from 'react';
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
                onTouchTap={() => this.props.callback() }
                />,
            <FlatButton
                label="确定"
                primary={true}
                keyboardFocused={true}
                onTouchTap={() => this.props.callback(true) }
                />,
        ];

        const dialog = {
            title: this.props.title,
            actions: actions,
            modal: this.props.modal,
            open: this.props.open,
            onRequestClose: () => this.props.callback()
        }

        return (
            <Dialog {...dialog} >
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
    callback: PropTypes.func.isRequired,
}

Confirm.defaultProps = {
    title: '标题',
    content: '内容',
    modal: false,
    open: false,
    callback: () => {
        console.log('props handleClose function required !')
    }
}