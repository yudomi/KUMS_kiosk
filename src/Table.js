import Reset from "./Reset";
import Major from "./components/Major";
import PhoneNum from "./components/PhoneNum";
import Id from "./components/Id";
import Modalalert from "./components/Modal";
import Name from "./components/Name";

import { useState } from "react";
import {addDoc, collection, doc, getDocs} from 'firebase/firestore';
import {db} from './Firebase';

function Table(props){
    const [datetime, setDatetime]=useState('')
    const [name, setName]= useState('')
    const [studentid, setStudentid]= useState('')
    const [phone, setPhone]= useState('')
    const [major, setMajor]=useState('공과대학');  
    const [details, setDetails]=useState('기계공학부'); 
    const [leader, setLeader]=useState(''); 
    const [time, setTime]= useState('30분')

    //전공
    const onChangeHandler=(event)=>{
        setMajor(event.currentTarget.value);
    }

    const onChangeHandler2=(event)=>{
        setDetails(event.currentTarget.value);
    }

    //리더
    const onChangeHandler3=(e)=>{
        const regex=/^[ㄱ-ㅎ|가-힣]{0,5}$/;
        const regex2=/^[a-zA-Z\s]{0,20}$/;
        if (regex.test(e.target.value)){
            setLeader(e.target.value);
        }
        else if (regex2.test(e.target.value)){
            setLeader(e.target.value);
        } 
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

    const [modal, setModal]=useState(false);

    //users collection을 불러옴
    const usersCollectionRef=collection(db,'table');

    //입력함수
    const createUser=async()=>{
        await addDoc(usersCollectionRef, {name: name, studentid:studentid, phone:phone, detail:details, major:major, leader:leader, datetime:datetime, purpose:'테이블 이용', state:true, time:time});
    };

    const [alert1,Setalert1]=useState('')
    const [alert2,Setalert2]=useState('')
    const [alert3,Setalert3]=useState('')
    const [alert4,Setalert4]=useState('')

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
        
        const regExp = /^01(?:0|1|)-\d{3,4}-\d{4}$/;

        if (phone.length !==13){
            setModal(false);
            Setalert2('전화번호를 정확히 입력해주세요');
        } else if (!regExp.test(phone)){
            setModal(false);
            Setalert2('010으로 시작하는 번호를 입력해주세요');
        }
        else {
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
        if (leader===''){
            setModal(false);
            Setalert4('대표자(1인 이용시 본인) 이름을 입력해주세요');
        }
        else {
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
            
            <p>
            대표자 이름 (학생증을 맡길 대표자 1인, 혼자 이용시 본인 이름)</p>
            <small>함께 이용하는 유저들은 모두 동일한 대표자 이름을 입력 바람</small>
            <p>
            <input type='text'  name='leader' placeholder='대표자 이름'
            onChange={onChangeHandler3} value={leader}></input></p>
            <small>{alert4}</small>
            <p>이용 시간</p>
            <select onChange={(events)=>{
            setTime(events.target.value);}}>  
            <option name='time' value= '30분' >30분</option>
            <option name='time' value= '1시간' >1시간</option>
            <option name='time' value='1시간 30분' >1시간 30분</option>
            <option name='time' value='2시간' >2시간</option>
            <option name='time' value='2시간 30분' >2시간 30분</option>
            <option name='time' value='3시간' >3시간</option>
            <option name='time' value='3시간 30분' >3시간 30분</option>
            <option name='time' value='4시간' >4시간</option>
            <option name='time' value='4시간 30분' >4시간 30분</option>
            <option name='time' value='5시간' >5시간</option>
            <option name='time' value='5시간 30분' >5시간 30분</option>
            <option name='time' value='6시간' >6시간</option>
            <option name='time' value='6시간 30분' >6시간 30분</option>
            <option name='time' value='7시간' >7시간</option>
            </select>
        </form>
        <input onClick={()=>
        setmodal()} type='submit'></input>
        </article>
        {
            modal === true ? 
            <Modalalert closeModal={()=> {createUser(); offmodal() }} name={name} phone={phone} studentid={studentid} major={major} detail={details} leader={leader} time={time}/>
            : null
        }
        </div>
    )
  
}

export default Table;
  
