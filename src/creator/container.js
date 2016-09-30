import { connect } from 'react-redux';


const mapStateToProps = module => state => state[module].toJS()

const mapDispatchToProps = actions => {
    var res = {}
    for (let prop in actions) {
        res[prop] = (e) => actions[prop](e)
    }
    return res;
}


export default (module, view, actions) => connect(
    mapStateToProps(module),
    mapDispatchToProps(actions)
)(view);