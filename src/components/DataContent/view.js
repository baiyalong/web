import React, {Component, PropTypes} from 'react';
import SubHeader from '../SubHeader';
import DataTable from '../DataTable';
import Comfirm from '../Confirm';
import Alert from '../Alert';
import Modal from '../Modal';

class Content extends Component {

  constructor() {
    super()
    this.state = { modal: false, action: null, item: null }
  }

  delete() { }
  update() { }
  retrieve() { }

  callback(values) {
    this.setState({ modal: false })
    if (values) {
      this.state.action == 'delete'
        ?
        this.props.remove(this.state.item)
        :
        this.props[this.state.action](values)
    }
  }


  render() {
    const content = {
      header: {
        title: this.props.title,
        retrieve: (e) => this.props.retrieve(e),
      },
      table: {
        dict: this.props.dict,
        data: this.props.data,
        create: () => this.setState({ modal: true, action: 'create' }),
        delete: (e) => this.setState({ modal: true, action: 'delete', item: e }),
        update: (e) => this.props.update(e),
        retrieve: (e) => this.props.retrieve(e),
      },
      confirm: {
        open: this.state.confirm,
        title: this.props.title + '  删除',
        content: '确认要删除吗？',
        callback: (b) => this.delete(b)
      },
      modal: {
        open: this.state.modal,
        action: this.state.action,
        item: this.state.item,
        title: this.props.title,
        dict: this.props.dict,
        callback: (v) => this.callback(v)
      }
    }

    return (
      <div style={{ height: '100%' }}>
        <SubHeader {...content.header} />
        <DataTable {...content.table} />
        <Comfirm {...content.confirm} />
        <Alert error={this.props.error} />
        <Modal {...content.modal} />
      </div>
    )
  }
}


// Content.propTypes = {
//   children: React.PropTypes.element.isRequired
// }

export default Content


