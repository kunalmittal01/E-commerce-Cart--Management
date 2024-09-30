import {useState} from 'react';

const Gadget = (props) => {
    const [itemFreq, setItemFreq] = useState(1);

    const Increment = ()=> {
        setItemFreq(itemFreq + 1);
        props.inc(props.id);    
    }

    const Decrement = ()=> {
        if(itemFreq > 1) {
            setItemFreq(itemFreq - 1);
        }
        else {
            props.remove(props.id);
        }
        props.dec(props.id);
    }

    const deleteItem = ()=> {
        props.remove(props.id);
        props.dec(props.id);
    }
    return (
    <div className="gadget w-2/3 mb-10 flex justify-between gap-5 items-center">
        <div className="flex gap-6 md:w-1/2 md:gap-16">
            <img className="w-16" src= {props.img} alt="" />
            <div className="gadget-cont">
                <p className="md:text-xl text-gray-800">{props.mobile}</p>
                <p className="text-gray-500">${props.price}</p>
                <p onClick={deleteItem} className="text-blue-600 hover:cursor-pointer">remove</p>
            </div>
        </div>
        <div className="gadget-btn flex flex-col items-center">
            <button onClick={Increment} className="text-xl"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg></button>
            <p className="text-xl">{itemFreq}</p>
            <button onClick={Decrement}  className="text-xl"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg></button>
        </div>
    </div>
    )
}

export default Gadget;