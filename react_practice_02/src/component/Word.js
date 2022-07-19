import React, { useState } from 'react'
export default function Word({word}) {
    const [isShow, setIsShow] = useState(false)
    const [isDone, setIsDone] = useState(word.isDone)
    function toggleShow (){
    setIsShow(!isShow)
}
    function toggleDone (){
    // // setIsDone(!isDone)
    // fetch(`http://localhost:3001/words?id=${word.id}`,{
    //     method : "PUT",
    //     headers:{
    //         content-type: "application/json",
    //     },
    //     body : JSON.stringify({
    //         ...word,
    //         isDone:!isDone
    //     })
    // .then(res=>{
    //     if(res.ok){
    //         setIsDone(!isDone)
    //     }
    // }

    // })
}
console.log(word)
return (
    <tr className={isDone ? "off" : ""} >
    <td><input type="checkBox" checked={isDone} onChange={toggleDone}/></td>
    <td >{word.eng}</td>
    <td >{isShow && word.kor}</td>
    <td><button onClick={toggleShow}>
        뜻 {isShow ? "숨기기" : "보기"}</button></td>
    <td><button className='btn_del'>삭제</button></td>
</tr>
  );
}
