import {useEffect, useState} from 'react';
import '../App.css';
function MartList({ cart }){
    const [CART,setCART]=useState([])
    useEffect(()=>{
        setCART(cart)
    },[cart])

    return(
        <>
            <h2> Here is your Cart Items </h2>
        <div className='carttt'>
            {
                
                CART?.map((cartItem,cartindex)=>{
                    return(
                        <div className='cart_box'>
                            <img src={cartItem.url} width={80}/>
                            <span> {cartItem.name}</span>
                            <button
                                onClick={()=> {
                                    const _CART=CART.map((item, index)=> {
                                        return cartindex === index ? {...item,quantity: item.quantity>0 ? item.quantity-1:0} :item

                                    })
                                    setCART(_CART)
                                }}>-</button>
                            <span> {cartItem.quantity}</span>
                            <button 
                                onClick={()=>{
                                    const _CART=CART.map((item,index)=>{
                                        return cartindex === index ? {...item,quantity: item.quantity+1 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >+</button>
                            <span> {cartItem.price * cartItem.quantity}</span>
                            
                        </div>
                    )
                })
            }
            <div className='Total'>
             <span>Total price of your Cart Items : </span>
             <span>Rs =  
                {
                    CART.map(item=> item.price * item.quantity).reduce((total,value)=> total+value,0)
                }
                </span>
            </div>
        </div>
        </>
    )
}

export default MartList
