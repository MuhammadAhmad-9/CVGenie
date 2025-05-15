import React, { useEffect, useState } from 'react';
import './cvmaker.css';
import { education, personalInfo, experience, skills, project } from './data';
import { useContext } from 'react';
import { CVContext } from '../CVContext';
import { NavLink } from 'react-router-dom';

const CVMaker = () => {
  const {
    personalData, setPersonalData,
    educationList, setEducationList,
    skillState, setSkillsstate,
    workExp, setWorkExp,
    projectsList, setProjectList,
    languages, setLanguages,
    professionalSummary,setProfessionalSummary
  } = useContext(CVContext);
  const [educationFields, setEducationFields] = useState({});
  const [workExpFields, setWorkExpFields] = useState({});
  const [projectFields, setProjectFields] = useState({});


  const handleProjectFieldChange = (e, name) => {
    const data = e.target.value;
    setProjectFields((pro) => ({ ...pro, [name]: data }));
  };

  const handleProjectInput = () => {
    const isEmpty = Object.entries(projectFields).every(([, ele]) => ele.trim() === "");
    if (isEmpty) return;
    const projectArray = [...projectsList];
    projectArray.push(projectFields);
    setProjectList([...projectArray]);
    setProjectFields({});
  };

  const handleRemoveProject = () => {
    const projectArray = [...projectsList];
    projectArray.pop();
    setProjectList([...projectArray]);
  };

  const handleWorkExpFields = (e, name) => {
    const data = e.target.value;
    setWorkExpFields((exp) => ({ ...exp, [name]: data }));
  };

  const handleWorkExpInput = () => {
    const isEmpty = Object.entries(workExpFields).every(([, ele]) => ele.trim() === "");
    if (isEmpty) {
      return;
    }
    const workArray = [...workExp];
    workArray.push({ ...workExpFields });
    setWorkExp([...workArray]);
    setWorkExpFields({});
  };

  const handleRemoveExperience = () => {
    if (workExp.length === 0) return;
    const updatedExperience = [...workExp];
    updatedExperience.pop();
    setWorkExp(updatedExperience);
  };

  const handlePersonalInfo = (event, name) => {
    const data = event.target.value;
    setPersonalData((person) => ({ ...person, [name]: data }));
   
  };

  const handleEducationFields = (e, name) => {
    const data = e.target.value;
    setEducationFields((ed) => ({ ...ed, [name]: data }));
  };

  const handleEducationInput = () => {
    const isEmpty = Object.entries(educationFields).every(([, ele]) => ele.trim() === "");
    if (isEmpty) {
      return;
    }
    const eduArray = [...educationList];
    eduArray.push({ ...educationFields });
    setEducationList([...eduArray]);
    setEducationFields({});
  };

  const handleRemoveEducation = () => {
    if (educationList.length === 0) return;
    const updatedEducation = [...educationList];
    updatedEducation.pop();
    setEducationList(updatedEducation);
  };

  const handleSkillfields = (e, name) => {
    const data = e.target.value;
    setSkillsstate((sk) => ({ ...sk, [name]: data }));
  };
  const handleLanguageChange=(e)=>{
    const data=e.target.value;
    setLanguages(data);
   
  }
  const handleSummary=(e)=>{
    const data=e.target.value;
    setProfessionalSummary(data)

  }

  return (
    <div className="inputFields">
      <h2>Let's Get Started with Your CV</h2>
      <p>Please enter your personal details to begin building your professional resume.</p>

      <div className="personalInfo">
        <h3>Personal Information</h3>
        <div className="input col-2-grid sm">
          {personalInfo.map((person) => {
            const { name, type, text, required, pattern } = person;
            return (
              <div key={name}>
                <label htmlFor={name}>{text}</label>
                <input
                  type={type}
                  name={name}
                  id={name}
                 
                  pattern={pattern}
                  autoComplete="off"
                  value={personalData[name]||""}
                  onChange={(e) => handlePersonalInfo(e, name)}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="summary">
        <h3>Professional Summary</h3>
       <div>
         <label htmlFor="summary">Enter your Professoional Summary</label>
        <textarea name="summary" id="summary" value={professionalSummary||""} onChange={handleSummary}></textarea>
       </div>
      </div>

      <div className="education">
        <h3>Education Details</h3>
        <div className="col-3-grid sm">
          {education.map((ele) => {
            const { name, type, text } = ele;
            return (
              <div key={name} className={name}>
                <label htmlFor={name}>{text}</label>
                <input
                  type={type}
                  id={name}
                  name={name}
                  autoComplete="off"
                  value={educationFields[name] || ''}
                  onChange={(e) => handleEducationFields(e, name)}
                />
              </div>
            );
          })}
        </div>
        <div className="btn">
          <button type="button" className="add" onClick={handleEducationInput}>
            Add Education
          </button>
          <button type="button" className="remove" onClick={handleRemoveEducation}>
            Remove Education
          </button>
        </div>

        <div className="displayEducation">
          {educationList.length === 0 ? null : <h3>Education</h3>}
          {educationList.map((edu, index) => {
            const { degree, institution, location, startDate, endDate, grade, description } = edu;
            return (
              <div className="displayEduDetails" key={index}>
                <div>
                  {institution || degree ? (
                    <p>
                      {degree}, {institution}
                    </p>
                  ) : null}
                  {startDate ? (
                    <p>
                      {startDate} - {endDate ? endDate : 'Present'}
                    </p>
                  ) : null}
                </div>
                <div>
                  {grade ? <p>Grade: {grade}</p> : null}
                  <p>{location}</p>
                </div>
                <div>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="skills">
        <h3>Skills</h3>
        <div className="col-2-grid sm">
          {skills.map((element) => {
            const { name, type, text } = element;
            return (
              <div key={name}>
                <label htmlFor={name}>{text}</label>
                <input
                  type={type}
                  id={name}
                  name={name}
                  value={skillState[name] || ''}
                  autoComplete="off"
                  onChange={(e) => handleSkillfields(e, name)}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="workExperience">
        <h3>Work Experience</h3>
        <div className="col-2-grid sm">
          {experience.map((element) => {
            const { name, type, text } = element;
            return (
              <div key={name} className={name}>
                <label htmlFor={name}>{text}</label>
                {name === 'responsibilities' ? (
                  <textarea
                    id={name}
                    name={name}
                    value={workExpFields[name] || ''}
                    onChange={(e) => handleWorkExpFields(e, name)}
                  
                  />
                ) : (
                  <input
                    type={type}
                    id={name}
                    name={name}
                    value={workExpFields[name] || ''}
                    onChange={(e) => handleWorkExpFields(e, name)}
                    autoComplete="off"
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="btn">
          <button type="button" className="add" onClick={handleWorkExpInput}>
            Add Experience
          </button>
          <button type="button" className="remove" onClick={handleRemoveExperience}>
            Remove Experience
          </button>
        </div>

        <div className="displayExpDetails">
          {workExp.length === 0 ? null : <h3>Work Experience Details</h3>}
          {workExp.map((exp, index) => {
            const { jobTitle, companyName, startDate, endDate, responsibilities } = exp;
            return (
              <div key={index} className='expItems'>
                {companyName && <p>{companyName}</p>}
                {jobTitle && <p>{jobTitle}</p>}
                {(startDate || endDate) && <p>{startDate} - {endDate || 'Present'}</p>}
                {responsibilities && <p>{responsibilities}</p>}
              </div>
            );
          })}
        </div>
      </div>

      <div className="projects">
        <h3>Projects</h3>
        <div className="col-2-grid sm">
          {project.map((item) => {
            const { name, type, text } = item;
            return (
              <div key={name} className={name}>
                <label htmlFor={name}>{text}</label>
                {name === 'projectDescription' ? (
                  <textarea
                    id={name}
                    name={name}
                    value={projectFields[name] || ''}
                    onChange={(e) => handleProjectFieldChange(e, name)}
                 
                  />
                ) : (
                  <input
                    type={type}
                    id={name}
                    name={name}
                    value={projectFields[name] || ''}
                    onChange={(e) => handleProjectFieldChange(e, name)}
                    autoComplete="off"
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="btn">
          <button type="button" className="add" onClick={handleProjectInput}>
            Add Project
          </button>
          <button type="button" className="remove" onClick={handleRemoveProject}>
            Remove Project
          </button>
        </div>
        <div className="displayProjects">
          {projectsList.length > 0 && <h3>Project List</h3>}
          {projectsList.map((proj, index) => {
            const { name, techStack, projectDescription } = proj;
            return (
              <div key={index} className="projectItem">
                {name && <p><strong>{name}</strong></p>}
                {techStack && <p>Tech Stack: {techStack}</p>}
                {projectDescription && <p>Description: {projectDescription}</p>}
              </div>
            );
          })}
        </div>
      </div>
      <div className="language">
                <h3>Languages</h3>

        <label htmlFor="language">Enter Languages</label>
        <input type="text" id='language' name='language'value={languages||""} autoComplete='off' onChange={handleLanguageChange} />
      </div>
      <div className="previewBtn">
       <NavLink to="/cvpreview"><button>Cv Preview</button></NavLink>
      </div>

    </div>
  );
};

export default CVMaker;