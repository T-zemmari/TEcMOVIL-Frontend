  
import Header from '../components/Header/Header';
import {connect} from 'react-redux';


const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)