import React from 'react';
import { EducationItem, ExperienceItem, SkillItem } from '../types';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

interface ResumeProps {
    education: EducationItem[];
    experience: ExperienceItem[];
    skills: SkillItem[];
}

const Resume: React.FC<ResumeProps> = ({ education, experience, skills }) => {
    return (
        // The id="resume" provides the anchor for the "Resume" nav link.
        // It wraps the individual resume sections.
        <div id="resume">
            <Experience data={experience} />
            <Education data={education} />
            <Skills data={skills} />
        </div>
    );
};

export default Resume;
