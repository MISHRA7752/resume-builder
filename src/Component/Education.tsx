import React, { useRef } from "react";
import styled from "styled-components";

const EduCon=styled.div`
    border: 2px solid;
    padding: 8px 8px;
    border-radius: 4px;
    gap: 5px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
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
    getEdu: (colValue: any, curValue: any) => void;
}

const Education = (props:Props) => {
    const colRef=useRef<HTMLInputElement>(null)
    const curRef=useRef<HTMLInputElement>(null)
    const handleAdd=()=>{
        props.getEdu(colRef.current?.value,curRef.current?.value)
        if (colRef.current) {
            colRef.current.value = "";
          }
        if (curRef.current) {
            curRef.current.value = "";
        }

    }
  return (
    <EduCon>
        <Sing>
            College:
        <input style={{border:'1px solid'}}
            ref={colRef}
            type="text"
        />
        </Sing>
        <Sing>
            Cource:
        <input style={{border:'1px solid'}}
            ref={curRef}
            type="text"
        />
        </Sing>
        <Btn onClick={handleAdd}> Add  Education</Btn>
    </EduCon>
  );
};

export default Education;
