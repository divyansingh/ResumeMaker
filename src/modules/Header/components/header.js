import React from 'react'
import ResumeForm from '../../ResumeForm/components/resumeForm'

export default function Header() {
  return (
    <header>
    <div className="logo">Your Logo</div>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/create-resume">Create Resume</a></li>
        <li><a href="/view-resumes">View Resumes</a></li>
      </ul>
    </nav>
    <ResumeForm/>
  </header>
  )
}
