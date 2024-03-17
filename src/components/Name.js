
function Name(props){
    return(<p><input type='text'  name='name' placeholder='이름'
    onChange={props.handlePress} value={props.name}></input></p>)
}

export default Name;

        