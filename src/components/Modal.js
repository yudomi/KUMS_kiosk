import { useState } from 'react';
import {Link} from 'react-router-dom';
import './Modal.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modalalert(props){
    return (
        <div className='Modal' onClick={props.closeModal}>
        <div className='modalBody' onClick={(e)=> e.stopPropagation()}>
        <Button id='modalClose' onClick={props.closeModal} variant="secondary">
                다시 입력하기
                </Button>
                <p>
                <p>
                이름 : {props.name}
                </p><p>
                학번 : {props.studentid}
                </p><p>
                전화번호 : {props.phone}
                </p><p>
                전공 : {props.major}
                </p>
                { 
                    (props.detail==='')?
                    null
                    :
                    <p>
                    세부전공 : {props.detail}
                    </p>
                }

                {
                    typeof (props.purpose) === 'undefined' ? 
                    null
                    : <p>
                    방문 목적 : {props.purpose}
                    </p>
                }

                {
                    typeof (props.printer) === 'undefined' ? 
                    null
                    : <p>
                    예약 장비 : 3D 프린터 {props.printer}
                    </p>
                }

                {
                    typeof (props.leader) === 'undefined' ? 
                    null
                    : <p>
                    대표자 이름 : {props.leader}
                    </p>
                }

                {
                    typeof (props.tool) === 'undefined' ? 
                    null
                    : (typeof (props.inputNum) === 'undefined'  ? 
                        <p> 대여 수공구 : {props.tool}</p>
                        : <p> 대여 수공구 : {props.tool} {props.inputNum}</p>
                        )
                }
                {
                    typeof (props.time) === 'undefined' ? 
                    null
                    : <p>
                    이용 시간 : {props.time}
                    </p>
                }
                
                <Link to='/survey'>
                <Button onClick={props.closeModal} variant="success">확인</Button></Link>
                </p>
        </div></div>
    )
}

export default Modalalert;