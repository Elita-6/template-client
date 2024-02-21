import React from 'react';
interface Props{
    color:string
}
const LineIndicator = (props:Props) => {
    const color = `bg-[${props.color}]`
    console.log(color)
    return (
        <div className='h-1 w-14' style={{backgroundColor:props.color}} />
    );
};

export default LineIndicator;