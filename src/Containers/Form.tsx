// @ts-nocheck 
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setData } from "./action";
import Education from "../Component/Education";
import Experience from "../Component/Experience";
import { Typeahead } from 'react-bootstrap-typeahead';
const pattern = /^\+?[1-9]\d{1,14}$/;

const FormCont = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
`;
const Sing = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;
const Breaks = styled.div`
  margin: 10px;
  width: 100%;
`;
const Btn = styled.button`
background-color: #04AA6D!important;
    border-radius: 5px;
    font-size: 17px;
    font-family: 'Source Sans Pro', sans-serif;
    padding: 6px 18px;
    border: none;
    margin-bottom: 10px;

`;
const Form = () => {
  const dispatch = useDispatch();
  const [msg, setMsg] = useState('')
  const [skillsAdded, setskillsAdded] = useState<string[]>([]);
  const [exp, setExp] = useState([]);
  const [edu, setEdu] = useState([]);
  const [addMoreExp,setAddMoreExp]=useState(false);  
  const [addMoreEdu,setAddMoreEdu]=useState(false);
  const [inputVal,setInputVal]=useState('+91')
  const typeaheadRef = useRef();
  const [skillsYetToAdd, setskillsYetToAdd] = useState([
    { id: 1, label: 'React' },
    { id: 2, label: 'Java' },
    { id: 3, label: 'TypeScript' },
    { id: 4, label: 'Redux' },
    { id: 5, label: 'React Query' },
    { id: 6, label: 'Javascript' },
    { id: 7, label: 'C++' }
  ]);
  function getEdu(college:any,cource:any){
    if(college.length==0 || cource.length==0){
        setMsg("entre all values");
        setTimeout(()=>{
            setMsg('');
        },5000)
        return;
    }
    setExp(prev=>[...prev,{college:college,cource:cource}]);    
    setAddMoreEdu(true);
    setMsg('Entry added');
        setTimeout(()=>{
            setMsg('');
        },5000)
    
  }
  function getExp(company:any,field:any){
    if(company.length==0 || field.length==0){
        setMsg("entre all values");
        setTimeout(()=>{
            setMsg('');
        },5000)
        return;
    }
    setEdu(prev=>[...prev,{company:company,field:field}]);
    setAddMoreExp(true)
    setMsg('Entry added');
        setTimeout(()=>{
            setMsg('');
        },5000)     
  }
  
  const nav = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (e: any) => {
    e.preventDefault();
    const obj = {
      name: nameRef.current?.value,
      address: addressRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
      skills: skillsAdded,
      experience:exp,
      education:edu,
    };
    if(obj.name?.length==0 || obj.email?.length==0 || obj.phone?.length==0 || obj.address?.length==0  )
    {
        setMsg("Entre  All Values");
        setTimeout(()=>{
            setMsg('');
        },5000)
        return;        
    }
    if(obj.experience[0]===undefined){
      setMsg("Fill and add Education");
        setTimeout(()=>{
            setMsg('');
        },5000)
        return; 
    }
    if(obj.education[0]===undefined){
      setMsg("Fill and add Experience");
        setTimeout(()=>{
            setMsg('');
        },5000)
        return; 
    }
    if(skillsAdded.length==0){
      setMsg("Add Skils");
        setTimeout(()=>{
            setMsg('');
        },5000)
        return; 
    }
    dispatch(setData(obj));
    nav("/Resume");
  };
  function handlephchange(e){
    if (pattern.test(e.target.value)) {
      setInputVal(e.target.value);
    }
  }
  const handleToogleClicker = (selected) => {
    const selectedSkill = selected[0];
    if (selectedSkill && selectedSkill.label) {
      const skillsAvailable = skillsYetToAdd.filter(
        (element) => element.label !== selectedSkill.label
      );
      setskillsYetToAdd(skillsAvailable);
      setskillsAdded((prev) => [...prev, selectedSkill]);
      if (typeaheadRef.current) {
        typeaheadRef.current.clear();
      }
    }
  };
  const handleDeleteSkill = (skill) => {
    const skillsAvailable = skillsAdded.filter(
      (element) => element.label !== skill.label
    );
    setskillsAdded(skillsAvailable);
    setskillsYetToAdd((prev) => [...prev, skill]);
  };

  return (
    <div>
      <h1>Resume Builder</h1>
      {msg && <h4 style={{backgroundColor:'red',justifyContent:'center'}}>{msg} </h4>}
      <FormCont onSubmit={handleSubmit}>
        <Sing>
          <label htmlFor="name">Name:</label>
          <input ref={nameRef} style={{border:'1px solid'}} type="text" required />
        </Sing>
        <Breaks />
        <Sing>
          <label htmlFor="email">Email:</label>
          <input ref={emailRef} style={{border:'1px solid'}} type="email" required />
        </Sing>

        <Breaks />
        <Sing>
          <label htmlFor="phone">Phone:</label>
          <input 
          value={inputVal}
          onChange={handlephchange}
          style={{border:'1px solid'}}
          type="tel" required
          />
        </Sing>
        <Breaks />
        <Sing>
          <label htmlFor="Address">Address:</label>
          <input ref={addressRef} style={{border:'1px solid'}} type="text" required />
        </Sing>

        <Breaks />
        {addMoreEdu ? <Btn onClick={()=>setAddMoreEdu(false)}> Add More Edu </Btn>: <Education getEdu={getEdu}/> }
        {addMoreExp ? <Btn onClick={()=>setAddMoreExp(false)}> Add More Exp </Btn>: <Experience getExp={getExp}/> }
        <div>
          
          {skillsAdded.length===0 ? <div>No  Skills Selectd</div>:<div>Skills you have</div>}
          {skillsAdded.map((item, index) => (
            <div
              style={{ cursor: "pointer" }}
              key={index}
              onClick={() => handleDeleteSkill(item)}
            >
              {item.label} ❌
            </div>
          ))}
        </div>
        <Breaks />
        <Typeahead
          id="searchBox"
          options={skillsYetToAdd}
          labelKey="label"
          placeholder="Add Skill..."
          onChange={handleToogleClicker}
          ref={typeaheadRef}
        />
        <Breaks />
        <Btn type="submit" onClick={handleSubmit}>
          Build Resume »
        </Btn>
      </FormCont>
    </div>
  );
};

export default Form;
