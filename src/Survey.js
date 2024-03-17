import { useState } from "react";
import {Link} from 'react-router-dom';

import {addDoc, collection, doc, getDocs} from 'firebase/firestore';
import {db} from './Firebase';


function Survey(){
     //users collection을 불러옴
    const usersCollectionRef=collection(db,'survey');
     //입력함수
    const createUser=async()=>{
         await addDoc(usersCollectionRef, {satisfaction:satisfaction, reason:reason, select:select, idea:idea});
     };

    const [satisfaction, setSatisfaction]=useState('');
    const [reason, setReason]=useState('');
    const [select, setSelect]=useState('');
    const [idea, setIdea]=useState('');

    return(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}>
            <article>
            <p>
            <h3>좋은 서비스를 개발하기 위해 간단한 설문을 진행하고자 합니다.</h3>
            <small>참여를 원하지 않는 분은 바로 제출을 눌러주세요 </small>
            </p>
                <form onSubmit={event=>{
                    event.preventDefault();
                }}>
                   <p>기존의 수기입력방식의 방문일지에 불편함을 느낀 적 있나요? </p>
                    <p><select onChange={(event)=>{
                    setSatisfaction(event.target.value);}}>
                    <option name='sattisfaction' value=''>-</option> 
                    <option name='satisfaction' value='yes' >네</option>
                    <option name='satisfaction' value='no'>아니요</option>                
                    </select></p>
                    <p>
                    <p>그렇게 생각한 이유는 무엇인가요?</p>
                    <textarea onChange={(event)=>{
                    setReason(event.target.value);}} name='reason' type='textarea'></textarea></p>
                    <p>앞으로 메이커스페이스 이용시 어떤 방식을 선호하시나요?</p>
                    <p>
                    <select onChange={(event)=>{
                    setSelect(event.target.value);}}>
                    <option name='select' value=''>-</option>           
                    <option name='select' value='kiosk'>키오스크 이용</option>           
                    <option name='select' value='paper'>기존 수기입력 방식 유지</option>     
                    </select></p>
                    <p>
                    <p>이 서비스에 대한 의견이나 메이커스페이스에 더 필요한 것이 있다면 자유롭게 얘기해주세요 </p>
                    <textarea onChange={(event)=>{
                    setIdea(event.target.value);}} name='reason' type='textarea'></textarea></p>
                </form>
                <Link to='/'><input onClick={()=>{createUser()}} type='submit'></input></Link>
                
            </article>
        </div>
    )
}

export default Survey;