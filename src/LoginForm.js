import { Form, Input, Button, Checkbox , Image } from 'antd';
import "./LoginForm.css"
import 'antd/dist/antd.css';
import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password , setPassword] = useState("")
  const handleSubmit=(e)=>{
    e.preventDefault();
    const data={email , password}
    fetch ("https://reqres.in/api/login", {
      method: 'POST',
      headers:{
        'Content-type':"application/json"
      },
      body:JSON.stringify(data),
 })
   .then((response) => response.json())
   .then((data) => {
     if(data.token){
       console.log("Success" , data)
     }
     else{
       console.log("Error" ,data)
     }
     
   })
   
   
  }


  return (
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      
    
      
    >
      <h2>Welcome Back</h2>
      <h5>Subtitle text goes here</h5>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input type="email" placeholder="Email Address *"
         name='email' value={email} onChange={(e) => setEmail(e.target.value)}  />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required:true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          type="password"
          placeholder="Password *"
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" 
        style={{ background: "navy" , border:"none" }} onClick ={handleSubmit}>
          Log in
        </Button>
        </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle  >
          <Checkbox style={{color:"navy"}}>Remember password</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="!#" style={{color:"navy"}}>
          Forgot password?
        </a>
      </Form.Item>
      
      
    </Form>
    
  );
};

export default LoginForm;