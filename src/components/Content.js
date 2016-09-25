import React, {Component, PropTypes} from 'react';
import SubHeader from './SubHeader';
import DataTable from './DataTable';
import Comfirm from './Confirm';
import Alert from './Alert';
import Modal from './Modal';

class Content extends Component {

  constructor() {
    super()
    this.state = { confirm: false, deleteArr: null }
  }
  deleteComfirm(a) {
    this.setState({ confirm: true, deleteArr: a })
  }
  delete(b) {
    if (b) this.props.delete(this.state.deleteArr)
    this.setState({ confirm: false, deleteArr: null })
  }


  render() {
    const content = {
      header: {
        title: this.props.title,
        create: () => this.props.create(),
        delete: (a) => this.props.remove(a),
        update: () => this.props.update(),
        retrieve: (s) => this.props.retrieve(s),
      },
      table: {
        colNames: this.props.colNames,
        rowValues: this.props.rowValues,
        create: () => this.props.create(),
        delete: (a) => this.deleteComfirm(a),
        update: () => this.props.update(),
        retrieve: (s) => this.props.retrieve(s),
      },
      confirm: {
        open: this.state.confirm,
        title: this.props.title + '  删除',
        content: '确认要删除吗？',
        callback: (b) => this.delete(b)
      }
    }

    return (
      <div style={{ height: '100%' }}>
        <SubHeader {...content.header} />
        <DataTable {...content.table} />
        <Comfirm {...content.confirm} />
        <Alert error={this.props.error} />
        <Modal />
      </div>
    )
  }
}


// Content.propTypes = {
//   children: React.PropTypes.element.isRequired
// }

export default Content


