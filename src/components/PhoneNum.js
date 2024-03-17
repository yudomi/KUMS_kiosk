import { useEffect, useState } from "react";


function PhoneNum(props){
    useEffect(()=>{
    if (props.phone.length ===11){
        props.setPhone(props.phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    } else if (props.phone.length===12){
        props.setPhone(props.phone.replace(/-/g,'').replace(/(\d{3})(\d{3})(\d{4})/,'$1-$2-$3'))
    } else if (props.phone.length===13){
        props.setPhone(props.phone.replace(/-/g,'').replace(/(\d{3})(\d{4})(\d{4})/,'$1-$2-$3'))
    }
    },[props.phone]);

    return(
        <p>
        <input type='text' name='phone' placeholder='전화번호' onChange={props.handlePress} value={props.phone}/></p>
    )
}

export default PhoneNum;