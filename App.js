import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import MartList from './components/MartList';
import { useState } from 'react';



function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      name: 'Red Shoes',
      category: 'Shoes',
      seller: 'Seller : Dhanapathi',
      price: 1000
    },
    {
      url: 'https://www.smartprix.com/bytes/wp-content/uploads/2022/06/photo-1491472253230-a044054ca35f.jpeg',
      name: 'Apple Macbook silver',
      category: 'Laptop',
      seller: 'Seller : Umang',
      price: 250000
    },
    {
      url: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJlc3MlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      name: 'White Shirt',
      category: 'Shirt',
      seller: 'Seller : Kasirajan',
      price: 500
    },
    {
      url: 'https://media.istockphoto.com/id/96826250/photo/digital-camera-with-clipping-path.jpg?s=612x612&w=0&k=20&c=ceAF827zi_UfczajJAWkXowWxdu5tfisZHRoCiSq94w=',
      name: 'DSLR Camera',
      category: 'Camera',
      seller: 'Seller : Anklesh',
      price: 5000
    },
    {
      url: 'https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZSUyMDE0JTIwcHJvfGVufDB8fDB8fHww&w=1000&q=80',      
      name: 'Iphone 14 pro',
      category: 'Camera',
      seller: 'Seller : Sanjay',
      price: 150000
    },
    {
      url: 'https://www.custommacbd.com/cdn/shop/products/MTP72_VW_34FR_watch-40-alum-gold-nc-6s_VW_34FR_WF_CO_f39b4359-5203-46bc-9287-4b038ffd1f1a.jpg?v=1628272490',
      name: 'Apple Watch',
      category: 'Watch',
      seller: 'Seller : Nithish Sankar',
      price: 5000
    },
    {
      url: 'https://images.unsplash.com/photo-1593442607435-e4e34991b210?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWlycG9kcyUyMHByb3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      name: 'Apple Airpods',
      category: 'Airpods',
      seller: 'Seller : Janath',
      price: 15000
    },
    {
      url: 'https://media.wired.com/photos/64810f543d9e6b1cb17a892b/16:9/w_2399,h_1349,c_limit/Apple-Vision-Pro-Might-Flop-Culture-1258467546.jpg',
      name: 'Apple Vision Pro',
      category: 'Glasses',
      seller: 'Seller : Akash',
      price: 25000
    },
    {
      url: 'https://etimg.etb2bimg.com/photo/81479123.cms',
      name: 'Apple Home Pod',
      category: 'Speaker',
      seller: 'Seller : Leyo',
      price: 75000
    },
    {
      url: 'https://jmdcommunication.com/cdn/shop/products/BOAT518-1.jpg?v=1652082974',
      name: 'Boat Headset',
      category: 'Headsets',
      seller: 'Seller : Ajay',
      price: 1500
    },
    {
      url: 'https://media.istockphoto.com/id/1400155112/photo/yellow-suitcase-flying-on-white-background.jpg?s=612x612&w=0&k=20&c=U5x1IIaOXIDZ-Q59mvDD4V-I8bWnFWZ7flh03Up3sZ4=',
      name: 'Luggage Bag',
      category: 'Bag',
      seller: 'Seller : Sundram',
      price: 7500
    },
    {
      url: 'https://img.freepik.com/free-vector/minimalist-book-cover-template_23-2148899519.jpg?w=2000',
      name: 'Reading Books',
      category: 'Books',
      seller: 'Seller : Aswin',
      price: 750
    },
    {
      url: 'https://static8.depositphotos.com/1354142/995/i/600/depositphotos_9952253-stock-photo-an-open-jar-of-peanut.jpg',
      name: 'Peanut Butter',
      category: 'Food',
      seller: 'Seller : SRaj',
      price: 350
    },
    {
      url: 'https://img.freepik.com/premium-photo/single-plastic-bucket-isolated-white-background_93675-121532.jpg',
      name: 'Home Bucket',
      category: 'Things',
      seller: 'Seller : Santhosh',
      price: 200
    },
    {
      url: 'https://images.unsplash.com/photo-1555447014-7ead71574544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVhJTIwY3VwfGVufDB8fDB8fHww&w=1000&q=80',
      name: 'Tea Cup',
      category: 'Things',
      seller: 'Seller : Muthu Swami',
      price: 1500000000
    },
  ])
  

  const [cart, setCart] =useState([])
  const [showCart,setShowCart]=useState(false)

  const addToCart=(data)=>{
    setCart([...cart, {...data,quantity : 1}])

  }
  const handleShow=(value)=>{
    setShowCart(value)
  }
  return (
    <div>
      <Header count={cart.length} 
      handleShow={handleShow}></Header>

      {
        showCart ?
          <MartList cart={cart}></MartList> :
          <ProductList product={product} addToCart={addToCart}></ProductList>
      }
      
    </div>
  );
}

export default App;
