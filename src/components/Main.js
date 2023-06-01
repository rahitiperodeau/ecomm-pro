import { EmptyCart, addToCart, removeFromCart } from "../redux/action";
import { useDispatch } from 'react-redux';

function Main() {
  const dispatch = useDispatch();
  const product = {
    name:'Iphone',
    category:'mobile',
    price:'1000',
    color:'black'
  };
  return (
    <div className="App">
      <div className="m-1 flex justify-center content-center">
        <button 
          className='m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={()=> {dispatch(addToCart(product))}}
        >Add to cart      
        </button>   
        <button 
          className='m-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          onClick={()=> {dispatch(removeFromCart(product))}}
        >Remove from cart 
        </button>   
        <button 
          className='m-1 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
          onClick={()=> {dispatch(EmptyCart())}}
        >Empty from cart 
        </button>     
      </div>      
    </div>
  );
}

export default Main;
