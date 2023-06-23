// @ts-nocheck 
import { useSelector } from 'react-redux';
import {useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
const Mainc=styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;

`
const AddPh=styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`
const Breaks=  styled.div`
    border: 1px solid black;
    margin: 20px;
    width: 100%;
`

const Resume = () => {    
    const navigate = useNavigate();
   const count = useSelector((state: any) => state); 
   useEffect(()=>{
    if(count.phone.length==0){
      navigate('/')
      navigate(0)
    }
   })
   
  return (
    <Mainc>            
      <h2>
        {count.name}
      </h2>
      <AddPh>
        <div style={{display:'flex'}}>
            Phone : {count.phone}
        </div>
        <div style={{display:'flex'}}>
            Email : {count.email}
        </div>
      </AddPh>
      <Breaks/>
      <h4 style={{alignSelf:'flex-start',marginLeft:'20px'}}>
        Skills
      </h4>
      <ul style={{listStyleType:'circle',alignSelf:'flex-start',marginLeft:'30px'}}>
        {count.skills.map((item:string)=><li>{item.label}</li>)}
      </ul>
      <Breaks/>
      <h4 style={{alignSelf:'flex-start',marginLeft:'20px'}}>
        Study
      </h4>
      <ul style={{listStyleType:'circle',alignSelf:'flex-start',marginLeft:'30px'}}>
        {count.experience?.map((item:any)=> <li>{item.cource + " from "+item.college}</li>)}
      </ul>
      <Breaks/>
      <h4 style={{alignSelf:'flex-start',marginLeft:'20px'}}>
        Experience
      </h4>
      <ul style={{listStyleType:'circle',alignSelf:'flex-start',marginLeft:'30px'}}>
        {count.education?.map((item:any)=> <li>{item.field + " at "+item.company}</li>)}
      </ul>
      <h6 style={{position:'absolute',bottom:'50px'}}>
      <Breaks/>
        {count.address}
      </h6>
    </Mainc>
  );
};

export default Resume;

