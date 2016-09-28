import React, {Component, PropTypes} from 'react';
import SubHeader from './SubHeader';
import DataTable from './DataTable';
import Comfirm from './Confirm';
import Alert from './Alert';
import Modal from './Modal';

class Content extends Component {

  render() {
    const header = {
      title: '用户管理',
      create: () => this.props.create(),
      delete: () => this.props.remove(),
      update: () => this.props.update(),
      retrieve: (s) => this.props.retrieve(s),
    }

    const table = {
      colNames: this.props.colNames,
      rowValues: this.props.rowValues,
      create: () => this.props.create(),
      delete: () => this.props.remove(),
      update: () => this.props.update(),
      retrieve: (s) => this.props.retrieve(s),
    }

    return (
      <div style={{ height: '100%' }}>
        <SubHeader {...header} />
        <DataTable {...table} />
        <Comfirm />
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


