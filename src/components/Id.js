import { useEffect, useState } from "react";

function Id(props){

    return(<p><input type='text'  name='studentid' placeholder='학번'
    onChange={props.handlePress} value={props.studentid}></input>
    </p>)
}

export default Id;