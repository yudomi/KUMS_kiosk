import { useEffect, useState } from "react";

function Tool(props){

    const [mode,setMode]=useState(false)
    const Tools=[
        {key:1, value:'usb-1'},
        {key:2, value:'usb-2'},
        {key:3, value:'usb-3'},
        {key:4, value:'usb-4'},
        {key:5, value:'usb-5'},
        {key:6, value:'줄자'},
        {key:7, value:'자'},
        {key:8, value:'본드'},
        {key:9, value:'칼'},
        {key:10, value:'가위'},
        {key:11, value:'펜치'},
        {key:12, value:'롱노즈'},
        {key:13, value:'직접입력'}
    ]

    let select=null;
    useEffect(()=>{
        if (props.tool==='직접입력'){
            setMode(true)
            props.setTool('')
        }
    })

    if (mode){
        select= <input type='text' onChange={(e)=> props.setTool(e.currentTarget.value)} value={props.tool} name='tool' placeholder='직접입력'></input>;
    }

    // let selectnum=null;
    // if (props.tool ==='usb'){
    //     selectnum= <input type='text' onChange={props.onChangeInfo} value={props.inputNum} name='number' placeholder='번호'></input>;
    // }

    return(
        <div>
        <p>대여 수공구</p><small>여러개 대여시 직접입력 해주세요!</small>
        <p>
            {(select === null)?
            <select onChange={props.onChangeHandler} value={props.tool}>
            {Tools.map((item)=>(<option key ={item.key} name='tool' value={item.value}>
            {item.value}
            </option>))}
            </select>
            : select
            }
            {/* {selectnum} */}
        </p>
        </div>
    )
}

export default Tool;