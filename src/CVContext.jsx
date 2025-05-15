import { createContext,useState } from "react";



export const CVContext=createContext();
export const CVProvider=({children})=>{
     const [personalData, setPersonalData] = useState({});
      const [educationList, setEducationList] = useState([]);
      const [skillState, setSkillsstate] = useState({});
      const [workExp, setWorkExp] = useState([]);
      const [projectsList, setProjectList] = useState([]);
      const [languages, setLanguages] = useState();
      const[professionalSummary,setProfessionalSummary]=useState();
 
  return(
   <CVContext.Provider value={{personalData, setPersonalData,educationList, setEducationList,skillState, setSkillsstate,workExp, setWorkExp,projectsList, setProjectList,languages, setLanguages,professionalSummary,setProfessionalSummary}}>
    {children}

   </CVContext.Provider>
  )
}