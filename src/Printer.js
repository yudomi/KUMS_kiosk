import Reset from "./Reset";
import Major from "./components/Major";
import PhoneNum from "./components/PhoneNum";
import Id from "./components/Id";
import Modalalert from "./components/Modal";
import Name from "./components/Name";
import Modal from 'react-bootstrap/Modal';

import { useState,useEffect } from "react";
import {addDoc, collection, doc, getDocs} from 'firebase/firestore';
import {db} from './Firebase';
import { useForm } from 'react-hook-form';


function Printer(props){
    const [datetime, setDatetime]= useState('')
    const [name, setName]= useState('')
    const [studentid, setStudentid]= useState('')
    const [phone, setPhone]= useState('')
    const [printer, setPrinter]= useState('A')
    const [major, setMajor]=useState('공과대학');  
    const [details, setDetails]=useState('기계공학부');
    const [time, setTime]=useState();

    const { register, handleSubmit, formState: {errors} }=useForm(); 
    
    const onSubmit=data=> {console.log(data);}

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

    const [start,setStart]=useState()
    const [end,setEnd]=useState()

    const [users, setUsers]=useState([]);
    const [modal, setModal]=useState(false);

    //users collection을 불러옴
    const usersCollectionRef=collection(db,'3D printer');
    
    //입력함수
    const createUser=async()=>{
        await addDoc(usersCollectionRef, {name: name, studentid:studentid, phone:phone, detail:details, printer:printer,major:major, datetime:datetime, time:time});
    };

    const [alert1,Setalert1]=useState('')
    const [alert2,Setalert2]=useState('')
    const [alert3,Setalert3]=useState('')
    const [alert4,Setalert4]=useState('')

    const setmodal=()=>{
        const date=new Date()
        setModal(true);
        setDatetime(date)
        // setDatetime(new Intl.DateTimeFormat('ko', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(date))

        if (name.length ===0){
            setModal(false);
            Setalert1('이름을 입력해주세요');

        } else {
            Setalert1('');
        }

        const regExp = /^01(?:0|1)-\d{3,4}-\d{4}$/
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
            Setalert3('학번은 20xx으로 시작해야 합니다');
        } else {
            Setalert3('');
        }

        const regExp3=/^([0-9]|[01?][0-9]|2[0-3]):([0-5][0-9])-?([0-9]|[01?][0-9]|2[0-3]):([0-5][0-9])$/
        if (time.length ===0){
            setModal(false);
            Setalert4('제작시간을 입력해주세요');
        }  else if (!regExp3.test(time)){
            setModal(false);
            Setalert4('10:00-17:00 형식으로 입력해주세요');
        } else {
            Setalert4('');
        }
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

        <form onSubmit={handleSubmit(onSubmit)}> 
            <Name name={name} handlePress={handlePress3} setName={setName}/>
            <small>{alert1}</small>
            <PhoneNum phone={phone} handlePress={handlePress} setPhone={setPhone}/>
            <small>{alert2}</small>
            <Id studentid={studentid} handlePress={handlePress2}/>
            <small>{alert3}</small>
            <Major major={major} setDetails={setDetails} onChangeHandler={onChangeHandler} onChangeHandler2={onChangeHandler2} />
            <p>프린터 종류 선택</p>
            <select onChange={(event)=>{
            setPrinter(event.target.value);}}>  
            <option name='printer' value='A' >FDM 3D 프린터 A(ABS)</option>
            <option name='printer' value='B' >FDM 3D 프린터 B(ABS)</option>
            <option name='printer' value='C' >FDM 3D 프린터 C(ABS)</option>
            <option name='printer' value='D' >FDM 3D 프린터 D(ABS)</option>
            <option name='printer' value='E' >FDM 3D 프린터 E(PLA)</option>
            <option name='printer' value='F' >FDM 3D 프린터 F(PLA)</option>
            <option name='printer' value='G' >FDM 3D 프린터 G(PLA)</option>
            <option name='printer' value='Mini' >FDM 미니 3D 프린터(PLA)</option>
            <option name='printer' value='SLA-A' >SLA 3D 프린터 A</option>
            <option name='printer' value='SLA-B' >SLA 3D 프린터 B</option>
            </select>
            <p>제작 시간</p>
            <p><input type='text'  name='time' placeholder='ex) 10:00-17:00'
            onChange={(e)=>{
                setTime(e.target.value)}
            } value={time}></input></p>
            <small>{alert4}</small>

        <p/>
        <input onClick={()=>
        setmodal()} name='submit' type='submit'></input>
        </form>
        </article>
        {
            modal === true ? 
            <Modalalert
            show={modal}
            closeModal={()=>{createUser(); offmodal();}} name={name} phone={phone} studentid={studentid} major={major} detail={details} printer={printer} time={time}/>
            : 
            null
        }
        </div>
    )
  }

  export default Printer;