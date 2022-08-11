import {useRef} from 'react'
import { Input, Button} from "antd";
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import useFetch from '../hooks/useFetch';

export default function Login() {

  const idRef = useRef(null)
  const pwdRef = useRef(null)

  function login(e){
   e.preventDefault();
    fetch(`http://localhost:3003/users/`,{
        method : "POST",
        headers:{
            "content-type": "application/json",
        },
        body : JSON.stringify({
            id : idRef.current.value,
            pwd : pwdRef.current.val
        }),
    })
    .then(res=>{
        if(res.ok){
            navigate(`/main/${idRef.current.value}`)
        }
        alert('아이디 혹은 비밀번호가 틀렸습니다.')
    })
}


  return (
    <div>
       <div class='login-container' style={{width:400, height:300,textAlign:'center'}}>
        <h1 style={{textAlign: 'center', marginBottom:32, fontSize:30}} className='centerName'>더큰내일 회의실 예약 시스템</h1>
        <Input size='large' type='text'placeholder='Account ID' prefix={<UserOutlined/>} style={{marginBottom:16}}ref={idRef}/>
        <Input size='large' type='password'placeholder='Password' prefix={<LockOutlined/>} ref={pwdRef}/>
        <Button style={{width:200, marginTop:32}} size='large' type="primary">
          Login</Button>
       </div>
    </div>

    
   
  )
}
