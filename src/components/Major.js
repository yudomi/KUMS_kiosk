
function Major(props){
    const Majors=[
        {key:1, value:'공과대학'},
        {key:2, value:'디자인조형학부'},
        {key:3, value:'정보대학'},
        {key:4, value:'이과대학'},
        {key:5, value:'보건과학대학'},
        {key:6, value:'생명과학대학'},
        {key:7, value:'사범대학'},
        {key:8, value:'미디어학부'},
        {key:9, value:'경영대학'},
        {key:10, value:'국제대학'},
        {key:11, value:'정경대학'},
        {key:12, value:'문과대학'},
        {key:13, value:'자유전공학부'},
        {key:14, value:'심리학부'},
        {key:15, value:'사이버국방학과'},
        {key:16, value:'스마트보안학부'},
        {key:17, value:'스마트모빌리티학부'},
        {key:18, value:'세종캠퍼스'},
        {key: 19, value:'기타'}
    ]

    const Engineerings=[
        {key:1, value:'기계공학부'},
        {key:2, value:'건축사회환경공학부'},
        {key:3, value:'건축학과'},
        {key:4, value:'전기전자공학부'},
        {key:5, value:'신소재공학부'},
        {key:6, value:'반도체공학과'},
        {key:7, value:'화공생명공학과'},
        {key:8, value:'산업경영공학부'},
        {key:9, value:'융합에너지공학과'},
        {key:10, value:'차세대통신학과'}
    ]

    const Informations=[
        {key:1, value:'컴퓨터학과'},
        {key:2, value:'데이터과학과'}
    ]

    const Sciences=[
        {key:1, value:'수학과'},
        {key:2, value:'물리학과'},
        {key:3, value:'화학과'},
        {key:4, value:'지구환경과학과'}
    ]

    const Healths=[
        {key:1, value:'바이오의공학부'},
        {key:2, value:'바이오시스템의과학부'},
        {key:3, value:'보건환경융합과학부'},
        {key:4, value:'보건정책관리학부'},
        {key:5, value:'기타'},
    ]

    const Biotechs=[
        {key:1, value:'생명과학부'},
        {key:2, value:'생명공학부'},
        {key:3, value:'식품공학과'},
        {key:4, value:'환경생태공학부'},
        {key:5, value:'식품자원경제학과'}
    ]

    const Educations=[
        {key:1, value:'교육학과'},
        {key:2, value:'가정교육과'},
        {key:3, value:'국어교육과'},
        {key:4, value:'영어교육과'},
        {key:5, value:'지리교육과'},
        {key:6, value:'역사교육과'},
        {key:7, value:'수학교육과'},
        {key:8, value:'체육교육과'}
    ]
    
    const Managements=[
        {key:1, value:'경영학과'}
    ]

    const Internationals=[
        {key:1, value:'국제학부'},
        {key:2, value:'글로벌한국융합학부'}
    ]

    const Economics=[
        {key:1, value:'정치외교학과'},
        {key:2, value:'경제학과'},
        {key:3, value:'통계학과'},
        {key:4, value:'행정학과'}
    ]
    
    const Liberals=[
        {key:1, value:'국어국문학과'},
        {key:2, value:'철학과'},
        {key:3, value:'한국사학과'},
        {key:4, value:'사학과'},
        {key:5, value:'사회학과'},
        {key:6, value:'한문학과'},
        {key:7, value:'영어영문학과'},
        {key:8, value:'독어독문학과'},
        {key:9, value:'불어불문학과'},
        {key:10, value:'중어중문학과'},
        {key:11, value:'노어노문학과'},
        {key:12, value:'일어일문학과'},
        {key:13, value:'서어서문학과'},
        {key:14, value:'언어학과'}
    ]

    const Sejongs=[
        {key:1, value:'과학기술대학'},
        {key:2, value:'글로벌비즈니스대학'},
        {key:3, value:'공공정책대학'},
        {key:4, value:'문화스포츠대학'},
        {key:5, value:'스마트도시학부'}
    ]
    

    let detail =null;
    if (props.major ==='공과대학'){
        detail=
        <p>
 
            <select onChange={props.onChangeHandler2}>
            {Engineerings.map((item, index)=>(<option key ={item.key} name='detail' value={item.value}>
            {item.value}
            </option>))}
            </select>
        </p>
    } else if (props.major==='정보대학'){
        detail=
        <p>
      
            <select onChange={props.onChangeHandler2}>
            {Informations.map((item, index)=>(<option key ={item.key} name='detail' value={item.value}>
            {item.value}
            </option>))}
            </select>
        </p>
    } else if (props.major==='이과대학'){
        detail=
        <p>

            <select onChange={props.onChangeHandler2}>
            {Sciences.map((item, index)=>(<option key ={item.key} name='detail' value={item.value}>
            {item.value}
            </option>))}
            </select>
        </p>
    } else if (props.major==='보건과학대학'){
        detail=
        <p>

            <select onChange={props.onChangeHandler2}>
            {Healths.map((item, index)=>(<option key ={item.key} name='detail' value={item.value}>
            {item.value}
            </option>))}
            </select>
        </p>
    } else if (props.major==='생명과학대학'){
        detail=
        <p>
            <select onChange={props.onChangeHandler2}>
            {Biotechs.map((item, index)=>(<option key ={item.key} name='detail' value={item.value}>
            {item.value}
            </option>))}
            </select>
        </p>
    } else if (props.major==='사범대학'){
        detail=
        <p>
            <select onChange={props.onChangeHandler2}>
            {Educations.map((item, index)=>(<option key ={item.key} name='detail' value={item.value}>
            {item.value}
            </option>))}
            </select>
        </p>
    } else if (props.major==='경영대학'){
        detail=
        <p>
            <select onChange={props.onChangeHandler2}>
            {Managements.map((item, index)=>(<option key ={item.key} name='detail' value={item.value}>
            {item.value}
            </option>))}
            </select>
        </p>
    } else if (props.major==='국제대학'){
        detail=
        <p>
            <select onChange={props.onChangeHandler2}>
            {Internationals.map((item, index)=>(<option key ={item.key} name='detail' value={item.value}>
            {item.value}
            </option>))}
            </select>
        </p>
    } else if (props.major==='정경대학'){
        detail=
        <p>
            <select onChange={props.onChangeHandler2}>
            {Economics.map((item, index)=>(<option key ={item.key}  name='detail' value={item.value}>
            {item.value}
            </option>))}
            </select>
        </p>
    } else if (props.major==='문과대학'){
        detail=
        <p>
            <select onChange={props.onChangeHandler2}>
            {Liberals.map((item, index)=>(<option key ={item.key} name='detail' value={item.value}>
            {item.value}
            </option>))}
            </select>
        </p>
    } else if (props.major==='세종캠퍼스'){
        detail=
        <p>
            <select onChange={props.onChangeHandler2}>
            {Sejongs.map((item, index)=>(<option key ={item.key} name='detail' value={item.value}>
            {item.value}
            </option>))}
            </select>
        </p>
    } else if (props.major ==='기타'){
        detail=
        <p>
            <input type='text' name='detail' onChange={props.onChangeHandler2} placeholder='직접입력'/>
        </p>
    } else{
        props.setDetails('')
    }

    return(
        <p>
        <p>소속</p>
            <select onChange={props.onChangeHandler} value={props.major}>
            {Majors.map((item)=>(<option key ={item.key} name='major' value={item.value}>
            {item.value}
            </option>))}
            </select>
            { detail }
        </p>
    )
}

export default Major;