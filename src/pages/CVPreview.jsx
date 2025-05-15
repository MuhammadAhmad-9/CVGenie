import { useContext, useRef } from "react"
import { CVContext } from "../CVContext"
import './CVPreview.css'
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const CVPreview = () => {
  const { personalData, educationList, skillState, workExp, projectsList, languages, professionalSummary } = useContext(CVContext);
  const cvRef = useRef();

 const handleDownload = () => {
    html2canvas(cvRef.current, {
      scale: 4,
      useCORS: true,
      allowTaint: true
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');

      const imgWidth = 210; 
      const pageHeight = 297;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('My_CV.pdf');
    });
  };


  const isEmpty = (str) => !str || !str.trim();

 
  const formatDateRange = (startDate, endDate) => {
    if (startDate && endDate) {
      return `${startDate} - ${endDate}`;
    } else if (startDate) {
      return `${startDate} - Present`;
    } else if (endDate) {
      return `Until ${endDate}`;
    }
    return '';
  };

  return (
    <div className="cvPreview">
      <div className="cv" ref={cvRef}>
        <div className="personalDetails">
          <div className="Name">
            <h1>{personalData.name || "Your name"}</h1>
            {!isEmpty(personalData.title) && <p>{personalData.title}</p>}
            <div className="contactDetails">
              <div>
                {!isEmpty(personalData.email) && <p><IoMail /> {personalData.email}</p>}
                {!isEmpty(personalData.phoneNum) && <p><FaPhone /> {personalData.phoneNum}</p>}
                {!isEmpty(personalData.address) && <p><FaLocationDot /> {personalData.address}</p>}
              </div>
              <div>
                {!isEmpty(personalData.linkedin) && <p><FaLinkedin /> {personalData.linkedin}</p>}
                {!isEmpty(personalData.github) && <p><FaSquareGithub /> {personalData.github}</p>}
              </div>
            </div>
          </div>
        </div>

        {!isEmpty(professionalSummary) && (
          <div className="professionalSum">
            <h2>Professional Summary</h2>
            <div className="border"></div>
            <p className="sum">{professionalSummary}</p>
          </div>
        )}

        {educationList.length > 0 && (
          <div className="educationDetails">
            <h2>Education</h2>
            <div className="border"></div>
            {educationList.map((edu, index) => {
              const { degree, institution, location, startDate, endDate, grade, description } = edu;
              return (
                <div className="eduData" key={index}>
                  <div>
                    <div><p>{degree}{institution && `, ${institution}`}</p></div>
                    {(startDate || endDate) && <div><p>{formatDateRange(startDate, endDate)}</p></div>}
                  </div>
                  <div>
                    {!isEmpty(grade) && <div><p>Grade: {grade}</p></div>}
                    {!isEmpty(location) && <div><p>{location}</p></div>}
                  </div>
                  {!isEmpty(description) && <div><p>{description}</p></div>}
                </div>
              )
            })}
          </div>
        )}

        {(!isEmpty(skillState.technicalSkills) || !isEmpty(skillState.tools) || !isEmpty(skillState.softSkills)) && (
          <div className="skillsDetails">
            <h2>Skills</h2>
            <div className="border"></div>
            <div className="skillData col-2-grid">
              {!isEmpty(skillState.technicalSkills) && (
                <div className="Technical Skills">
                  <h4>Programming Languages</h4>
                  {skillState.technicalSkills.split(',').filter(lang => !isEmpty(lang)).map((lang, index) => (
                    <p key={index}>{lang.trim()}</p>
                  ))}
                </div>
              )}

              {!isEmpty(skillState.tools) && (
                <div className="tools">
                  <h4>Tools</h4>
                  {skillState.tools.split(',').filter(tool => !isEmpty(tool)).map((tool, index) => (
                    <p key={index}>{tool.trim()}</p>
                  ))}
                </div>
              )}

              {!isEmpty(skillState.softSkills) && (
                <div className="softSkills">
                  <h4>Soft Skills</h4>
                  {skillState.softSkills.split(',').filter(skill => !isEmpty(skill)).map((skill, index) => (
                    <p key={index}>{skill.trim()}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {workExp.length > 0 && (
          <div className="experienceDetails">
            <h2>Experience</h2>
            <div className="border"></div>
            <div className="expData">
              {workExp.map((exp, index) => {
                const { jobTitle, companyName, startDate, endDate, responsibilities } = exp;
                return (
                  <div className="expData" key={index}>
                    {!isEmpty(jobTitle) && <p><strong>{jobTitle}</strong></p>}
                    {!isEmpty(companyName) && <p>{companyName}</p>}
                    {(startDate || endDate) && <p>{formatDateRange(startDate, endDate)}</p>}
                    {!isEmpty(responsibilities) && <p>{responsibilities}</p>}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {projectsList.length > 0 && (
          <div className="projectDetails">
            <h2>Projects</h2>
            <div className="border"></div>
            {projectsList.map((project, index) => {
              const { name, techStack, projectDescription } = project;
              return (
                <div className="projectData" key={index}>
                  {!isEmpty(name) && <p><strong>{name}</strong></p>}
                  {!isEmpty(techStack) && <p>TechStack: {techStack}</p>}
                  {!isEmpty(projectDescription) && <p>{projectDescription}</p>}
                </div>
              )
            })}
          </div>
        )}

        {!isEmpty(languages) && (
          <div className="langDetails">
            <h2>Languages</h2>
            <div className="border"></div>
            <div className="langData">
              {languages.split(",").filter(lang => !isEmpty(lang)).map((lang, index) => (
                <p key={index}>{lang.trim()}</p>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="buttons">
        <div className="Edit"><NavLink to='/cvmaker'><button>Edit CV</button></NavLink></div>
        <div className="download"> <button onClick={handleDownload}>Download CV</button></div>
        
      </div>
    </div>
  )
}

export default CVPreview;