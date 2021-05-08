import ProductProfile from './Product-Profile/Product-Profile';
import {connect} from 'react-redux';
import {addToCart} from '../components/Accion/actions';

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(ProductProfile)
// export default Home;