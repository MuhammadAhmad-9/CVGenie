const education = [
    {
      name: "degree",
      type: "text",
      text: "Degree or Qualification"
    },
    {
      name: "institution",
      type: "text",
      text: "Name of the Institute"
    },
    {
      name: "location",
      type: "text",
      text: "Location of the Institute"
    },
    {
      name: "startDate",
      type: "date",
      text: "Start Date"
    },
    {
      name: "endDate",
      type: "date",
      text: "End Date"
    },
    {
      name: "grade",
      type: "text",
      text: "Grade or Percentage"
    },
    {
      name: "description",
      type: "textarea",
      text: "Additional Description (optional)"
    }
  ];
  const personalInfo = [
    {
      name: "name",
      type: "text",
      text: "Enter your Full Name",
      required: true
    },
    {
      name: "title",
      type: "text",
      text: "Enter your Job Title",
      required: true
    },
    {
      name: "email",
      type: "text",
      text: "Enter your Email Address",
      required: true
    },
    {
      name: "phoneNum",
      type: "tel",
      text: "Enter your Phone Number",
      pattern: "[0-9]+"
    },
    {
      name: "address",
      type: "text",
      text: "Enter your Full Address"
    },
    {
      name: "linkedin",
      type: "url",
      text: "Enter Your LinkedIn Profile Link"
    },
    {
      name: "github",
      type: "url",
      text: "Enter your GitHub Profile Link"
    }
  ];
  const experience = [
    {
      name: "jobTitle",
      type: "text",
      text: "Enter Your Job Title",
    
    },
    {
      name: "companyName",
      type: "text",
      text: "Enter Company Name",
     
    },
    {
      name: "startDate",
      type: "date",
      text: "Enter Start Date",
     
    },
    {
      name: "endDate",
      type: "date",
      text: "Enter End Date ",
     
    },
    {
      name: "responsibilities",
      type: "textarea",
      text: "Enter Key Responsibilities ",
    
    }
    
  ];
  const skills = [
    {
      name: "technicalSkills",
      type: "text",
      text: "Enter Technical Skills (e.g., JavaScript, Python)",
    
    },
    {
      name: "softSkills",
      type: "text",
      text: "Enter Soft Skills (e.g., Communication, Leadership)",
      
    },
    {
      name: "tools",
      type: "text",
      text: "Enter Tools You Use (e.g., Git, Figma, Excel)",
     
    }
  ];
  const project = [
    {
      name: "name",
      type: "text",
      text: "Enter Project Name"
    },
    {
      name: "techStack",
      type: "text",
      text: "Enter Tech Stack "
    },
    {
      name: "projectDescription",
      type: "textArea",
      text: "Enter Project Description"
    }
  ];
  
  

  
  

  
  
 
  
  
export  {education,personalInfo,experience, skills,project};
  