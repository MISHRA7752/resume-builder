import React, { useRef, useState } from "react";
import styled from "styled-components";

const EduCon=styled.div`
    border: 2px solid;
    padding: 8px 8px;
    border-radius: 4px;
    gap: 5px;
    display: flex;
    flex-direction: column;
`

const Btn = styled.button`
    background-color: #8f6196!important;
    border-radius: 5px;
    font-size: 17px;
    font-family: 'Source Sans Pro', sans-serif;
    padding: 6px 18px;
    border: none;

`;
const Sing = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;
interface Props {
    getExp: (colValue: any, curValue: any) => void;
}

const Experience = (props:Props) => {    
    const comRef=useRef<HTMLInputElement>(null)
    const firRef=useRef<HTMLInputElement>(null)
    function handleAddcd(){
        props.getExp(comRef.current?.value,firRef.current?.value);
        if (comRef.current) {
            comRef.current.value = "";
          }
        if (firRef.current) {
            firRef.current.value = "";
        }

    }
    
  return (
    <EduCon>
        <Sing>
        Experience Field:
        <input style={{border:'1px solid'}}
            type="text"
            ref={firRef}
        />
        </Sing>
        <Sing>
            Company:
        <input style={{border:'1px solid'}}
            type="text"
            ref={comRef}
        />
        </Sing>
        <Btn onClick={handleAddcd}> Add Experience</Btn>
    </EduCon>
  );
};

export default Experience;
