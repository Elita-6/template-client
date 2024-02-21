import React from 'react';
interface Props{
    color:string
}
const RoundedIndicator = (props:Props) => {
    const color = `bg-[${props.color}]`
    console.log(color)
    return (
        <div className='h-3 w-3 rounded-full' style={{backgroundColor:props.color}} />
    );
};

export default RoundedIndicator;