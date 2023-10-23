// ResumeForm.js

import React, { useState } from 'react';
import ResumePDF from './resumePDF';
import { PDFViewer } from '@react-pdf/renderer';


export default function ResumeForm() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [education, setEducation] = useState({
    schoolName: '',
    degree: '',
    graduationYear: '',
  });

  const [workExperience, setWorkExperience] = useState({
    company: '',
    position: '',
    startYear: '',
    endYear: '',
  });

  const [skills, setSkills] = useState('');
  const [pdfVisible, setPdfVisible] = useState(false);

  // Define functions to handle form input changes

  const handlePersonalInfoChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleEducationChange = (e) => {
    setEducation({
      ...education,
      [e.target.name]: e.target.value,
    });
  };

  const handleWorkExperienceChange = (e) => {
    setWorkExperience({
      ...workExperience,
      [e.target.name]: e.target.value,
    });
  };

  const handleSkillsChange = (e) => {
    console.log(e.target.value)
    setSkills(e.target.value);
  };

  // Handle form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process and save the form data to the database or perform other actions
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <div>
          <h2>Personal Information</h2>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={personalInfo.firstName}
            onChange={handlePersonalInfoChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={personalInfo.lastName}
            onChange={handlePersonalInfoChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={personalInfo.email}
            onChange={handlePersonalInfoChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={personalInfo.phone}
            onChange={handlePersonalInfoChange}
          />
        </div>

        {/* Education Section */}
        <div>
          <h2>Education</h2>
          <input
            type="text"
            name="schoolName"
            placeholder="School Name"
            value={education.schoolName}
            onChange={handleEducationChange}
          />
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={education.degree}
            onChange={handleEducationChange}
          />
          <input
            type="text"
            name="graduationYear"
            placeholder="Graduation Year"
            value={education.graduationYear}
            onChange={handleEducationChange}
          />
        </div>

        {/* Work Experience Section */}
        <div>
          <h2>Work Experience</h2>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={workExperience.company}
            onChange={handleWorkExperienceChange}
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={workExperience.position}
            onChange={handleWorkExperienceChange}
          />
          <input
            type="text"
            name="startYear"
            placeholder="Start Year"
            value={workExperience.startYear}
            onChange={handleWorkExperienceChange}
          />
          <input
            type="text"
            name="endYear"
            placeholder="End Year"
            value={workExperience.endYear}
            onChange={handleWorkExperienceChange}
          />
        </div>

        {/* Skills Section */}
        <div>
          <h2>Skills</h2>
          <textarea
            name="skills"
            placeholder="List your skills (comma-separated)"
            value={skills}
            onChange={handleSkillsChange}
          />
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" onClick={() => { setPdfVisible(true) }}>Save Resume</button>

        </div>
      </form>
      {pdfVisible && (
        <PDFViewer width={600} height={400}>
          <ResumePDF data={{...personalInfo,...education,...workExperience,...skills}} />
        </PDFViewer>
      )}
    </>
  );
}
