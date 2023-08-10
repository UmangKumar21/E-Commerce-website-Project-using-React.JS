
import '../App.css';
import './Header.css';

function Header(props) {
  return (
    <div className='flex-shopping-cart'>
        <div className='shop' onClick={()=> props.handleShow(false)}>Shopping cart</div>
        
        <div className='navi'>
          
          <ul>
          <li>
            <div className='cart' onClick={()=> props.handleShow(true)}>Cart
              <sup>{props.count}</sup>
            </div>
            </li>
            
          </ul>
          
         
         
        </div>
        
        
    </div>
  );
}

export default Header;
