import { useEffect, useState } from "react";

function Equip(props){
    
    const [mode,setMode]=useState(false)
    const Equips=[
        {key:1, value:'예약자 동행'},
        {key:2, value:'인두기 이용'},
        {key:3, value:'직접입력'}
    ]

    let select=null;
    
    useEffect(()=>{
        if (props.purpose==='직접입력'){
            setMode(true)
            props.setPurpose('')
        }
    })

    if (mode){
        select= <input type='text' onChange={(e)=> props.setPurpose(e.currentTarget.value)} value={props.purpose} name='purpose' placeholder='직접입력'></input>;
    }

    return(
        <div>
        <p>방문 목적</p>
            {(select === null)?
            <select onChange={props.onChangeHandler} value={props.purpose}>
            {Equips.map((item)=>(<option key ={item.key} name='purpose' value={item.value}>
            {item.value}
            </option>))}
            </select>
            : select
            }
        </div>
    )
}

export default Equip;