import { useState,useRef,useEffect } from 'react'
import Navbar from './components/navbar';
import Gadget from './components/gadget';
import './App.css'

function App() {
  const [load, setLoad] = useState(true);
  const appRef = useRef(null);

  useEffect(()=>{
    setTimeout(()=>{
        setLoad(false);
      }, 1000);
  },[])

  const [gadget,setGadget] = useState([
    {
      img: 'https://www.course-api.com/images/cart/phone-1.png',
      mobile: 'Samsung Galaxy S8',
      price: '399.99',
      itemFreq: 1
    },
    {
      img: 'https://www.course-api.com/images/cart/phone-2.png',
      mobile: 'Google Pixel',
      price: '499.99',
      itemFreq: 1
    },
    {
      img: 'https://www.course-api.com/images/cart/phone-3.png',
      mobile: 'Xiaomi Redmi Note 2',
      price: '699.99' ,
      itemFreq: 1
    },
    {
      img: 'https://www.course-api.com/images/cart/phone-4.png',
      mobile: 'Samsung Galaxy S7',
      price: '599.99',
      itemFreq: 1
    }
  ]);

  let [totalAmount, setTotalAmount] = useState(2199.96)
  let [cartFreq,setCartFerq] = useState(4);

  const IncreaseCartFreq = (id)=>{
    setCartFerq(cartFreq + 1);
    setTotalAmount(totalAmount + parseFloat(gadget[id].price));
  }

  const decreaseCartFreq = (id)=>{
      setCartFerq(cartFreq - 1);
      setTotalAmount(totalAmount - parseFloat(gadget[id].price));
  }

  const removeItem = (id)=>{
    setGadget(gadget.filter((_,idx) => idx != id)) 
    setCartFerq(cartFreq - gadget[id].itemFreq)
    setTotalAmount(totalAmount - parseFloat(gadget[id].price)*gadget[id].itemFreq);
  }

  const handlefreq = (id,fun) => {
    setGadget(gadget.map((item,idx)=>{
      if(id == idx) {
        if(fun == 'increment') {
          return {...item, itemFreq: item.itemFreq + 1}
        }
        else if(fun == 'decrement' && item.itemFreq > 1) {
          return {...item, itemFreq: item.itemFreq - 1}
        }
      }
      else {
       return item; 
      }
    }))
  }

  const clearAllItems = ()=> {
    setGadget([]);
    setTotalAmount(0);
    setCartFerq(0);
  }
  return (
    <>
    { load?<div className="h-screen w-screen flex justify-center items-center">
       <div className="loading"></div>
    </div>:(
    <div ref={appRef} className="App">
      
      <Navbar cartItems={cartFreq}/>
      {
        (gadget.length > 0)?(
      <div className="wrapper">
        <div className="gadget-container mt-20 flex flex-col items-center w-full">
          <p className="text-center mb-10 text-xl md:text-4xl">YOUR BAG</p>
          {
            gadget.map((item,idx) => {
              return <Gadget key={'gadget'+ idx} handlefreq={handlefreq} {...item} id={idx} inc={IncreaseCartFreq} dec={decreaseCartFreq} remove={removeItem} cartItems={cartFreq} />
            })
          }
        </div>
        <div className="total mt-9 mb-7 w-2/3 flex flex-col mx-auto">
          <div className="divider h-1 bg-gray-300"></div>
          <div className="bill flex mt-7 justify-between items-center">
            <p>Total</p>
            <p className="total-price p-2 rounded-md text-white">${Math.round(totalAmount*100)/100}</p>
          </div>
          <button onClick={clearAllItems} className="inline-block text-center bg-gray-400 mt-4 text-blue-700 px-4 rounded-lg mx-auto">Clear Cart</button>
        </div>
      </div>  
    ): <div className="message mt-20">
          <p className="text-center mb-10 text-xl md:text-4xl">YOUR BAG</p>
          <p className="text-center text-gray-600 text-xl md:text-4xl">is currently empty</p>
      </div>
      }
    </div>)}
    </>
  )
}

export default App
