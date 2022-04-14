import React from 'react'
import "./Header.css"
import { PageHeader , Button } from 'antd';
import "antd/dist/antd.css"

 const Header = () => {
  return (
    <PageHeader
    className="site-page-header"
    title="ATools."
    extra={[
        <Button key="1" type='primary' className='btn1' 
         style={{backgroundColor: "navy" , border:"none" , width:"150px"}}
        >
          Start Free Trial
        </Button>,
        <Button key="2" type='primary' className='btn2'
        style={{backgroundColor: "rgb(255, 154, 4)" , border:"none" , width:"150px"}}>
        Login
      </Button>,
      ]}
    
  />
  )
}

export default Header