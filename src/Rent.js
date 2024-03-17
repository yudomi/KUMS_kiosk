import Reset from "./Reset";
import Major from "./components/Major";
import PhoneNum from "./components/PhoneNum";
import Id from "./components/Id";
import Tool from "./components/Tool";
import Modalalert from "./components/Modal";
import Name from "./components/Name";

import { useState,useEffect } from "react";
import {addDoc, collection, doc, getDocs} from 'firebase/firestore';
import {db} from './Firebase';

function Rent(props){
    const [datetime, setDatetime]=useState('')
    const [name, setName]= useState('')
    const [studentid, setStudentid]= useState('')
    const [phone, setPhone]= useState('')
    const [major, setMajor]=useState('공과대학');  
    const [details, setDetails]=useState('기계공학부'); 
    const [tool, setTool]=useState('usb-1'); 
    // const [inputNum,setInputNum]=useState('');

    const onChangeHandler=(event)=>{
        setMajor(event.currentTarget.value);
    }

    const onChangeHandler2=(event)=>{
        setDetails(event.currentTarget.value);
    }
    //전화번호
    const handlePress=(e)=>{
        const regex=/^[0-9\b -]{0,13}$/;
        if (regex.test(e.target.value)){
            setPhone(e.target.value);
        };
    }
    //학번
    const handlePress2=(e)=>{
        const regex=/^[0-9\b ]{0,10}$/;
        if (regex.test(e.target.value)){
            setStudentid(e.target.value);
        }
    }
    //수공구
    const onChangeHandler3=(event)=>{
        setTool(event.currentTarget.value);
    }

    // //수공구 번호
    // const onChangeInfo=(e)=>{
    //     const regex=/^[1-9]{0,1}$/;
    //     if (regex.test(e.target.value)){
    //         setInputNum(e.target.value)
    //     }
    // }  

    //이름
    const handlePress3=(e)=>{
        const regex=/^[ㄱ-ㅎ|가-힣]{0,5}$/;
        const regex2=/^[a-zA-Z\s]{0,20}$/;
        if (regex.test(e.target.value)){
            setName(e.target.value);
        }
        else if (regex2.test(e.target.value)){
            setName(e.target.value);
        }    
    }

    const [users, setUsers]=useState([]);
    const [modal, setModal]=useState(false);

    //users collection을 불러옴
    const usersCollectionRef=collection(db,'rent');
    //입력함수
    const createUser=async()=>{
        await addDoc(usersCollectionRef, {name: name, studentid:studentid, phone:phone, detail:details, major:major, tool: tool, datetime:datetime, state:true, manager: null, returntime:null});
    };

    const [alert1,Setalert1]=useState('')
    const [alert2,Setalert2]=useState('')
    const [alert3,Setalert3]=useState('')
    // const [alert4,Setalert4]=useState('')

    const setmodal=()=>{
        const date=new Date()
        setModal(true);
        setDatetime(date)
        if (name.length ===0){
            setModal(false);
            Setalert1('이름을 입력해주세요');

        } else {
            Setalert1('');
        }
        
        const regExp = /^01(?:0|1)-\d{3,4}-\d{4}$/;
    
        if (phone.length !==13){
            setModal(false);
            Setalert2('전화번호를 정확히 입력해주세요');
        } else if (!regExp.test(phone)){
            setModal(false);
            Setalert2('010으로 시작하는 번호를 입력해주세요');
        } else {
            Setalert2('');
        }

        const regExp2 = /^20(?:0|1|2)\d{7}$/
        if (studentid.length !==10){
            setModal(false);
            Setalert3('학번(10자리)를 정확히 입력해주세요');
        } else if (!regExp2.test(studentid)){
            setModal(false);
            Setalert3('학번을 정확히 입력해주세요');
        } else {
            Setalert3('');
        }
        // if ((tool ==='usb')&&(inputNum==='')){
        //     setModal(false);
        //     Setalert4('대여 수공구 번호를 입력해주세요');
        // }
        // else {
        //     Setalert4('');
        // }
    };

    const offmodal=()=>{
        setModal(false);
    };


    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}>
        <article>
        <p><Reset/></p>
        <h2> 정보 입력 </h2>   
        <form onSubmit={event=>{
            event.preventDefault();
        }}> 
            <Name name={name} handlePress={handlePress3} setName={setName}/>
            <small>{alert1}</small>
            <PhoneNum phone={phone} handlePress={handlePress} setPhone={setPhone}/>
            <small>{alert2}</small>
            <Id studentid={studentid} handlePress={handlePress2}/>
            <small>{alert3}</small>
            <Major major={major} setDetails={setDetails} onChangeHandler={onChangeHandler} onChangeHandler2={onChangeHandler2} />
            <Tool tool={tool} setTool={setTool} onChangeHandler={onChangeHandler3}/>
            {/* <small>{alert4}</small> */}
        </form>
        <input onClick={()=>
        setmodal()} type='submit'></input>
        </article>
        {
            modal === true ? 
            <Modalalert closeModal={()=> {createUser(); offmodal() }} name={name} phone={phone} studentid={studentid} major={major} detail={details} tool={tool} />
            : null
        }
        </div>
    )
  }
  
export default Rent;