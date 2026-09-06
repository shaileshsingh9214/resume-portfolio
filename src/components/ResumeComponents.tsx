import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";
import resumeData from "@/data/resume.json";

export const Hero = () => (
  <section className="py-20 px-4 text-center max-w-4xl mx-auto" aria-labelledby="hero-heading">
    <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
      {resumeData.name}
    </h1>
    <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-6 font-medium">
      {resumeData.title}
    </p>
    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
      {resumeData.summary}
    </p>
    <div className="flex flex-wrap justify-center gap-3 mt-8">
      <a href={`mailto:${resumeData.contact.email}`} className="px-6 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-full hover:opacity-90 transition-opacity font-medium" aria-label={`Email ${resumeData.name}`}>
        Contact Me
      </a>
      <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-slate-200 dark:border-slate-800 rounded-full hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors font-medium" aria-label={`LinkedIn profile of ${resumeData.name}`}>
        LinkedIn
      </a>
    </div>
  </section>
);

export const SkillsSection = () => (
  <section className="py-16 px-4 max-w-5xl mx-auto" aria-labelledby="skills-heading">
    <h2 id="skills-heading" className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(resumeData.skills).map(([category, skills]) => (
        <Card key={category} className="border-none shadow-sm bg-slate-50 dark:bg-slate-900/50">
          <CardHeader>
            <CardTitle className="text-lg capitalize font-semibold text-slate-800 dark:text-slate-200">
              {category}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <Badge key={skill} variant="secondary" className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700">
                {skill}
              </Badge>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export const ExperienceSection = () => (
  <section className="py-16 px-4 max-w-4xl mx-auto" aria-labelledby="experience-heading">
    <h2 id="experience-heading" className="text-3xl font-bold text-center mb-12">Professional Journey</h2>
    <div className="space-y-8">
      {resumeData.experience.map((exp, index) => (
        <div key={index} className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 dark:bg-white" />
          <div className="mb-1 flex flex-col md:flex-row md:justify-between md:items-center gap-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {exp.role}
              </h3>
              {exp.companyUrl && (
                <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors" aria-label={`Visit ${exp.company} website`}>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
            <span className="text-sm font-medium text-slate-500">
              {exp.period}
            </span>
          </div>
          <p className="text-md font-semibold text-slate-700 dark:text-slate-300 mb-3">
            {exp.company}
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {exp.description}
          </p>
          {index !== resumeData.experience.length - 1 && <Separator className="mt-8" />}
        </div>
      ))}
    </div>
  </section>
);

export const EducationSection = () => (
  <section className="py-16 px-4 max-w-4xl mx-auto" aria-labelledby="education-heading">
    <h2 id="education-heading" className="text-3xl font-bold text-center mb-12">Education</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {resumeData.education.map((edu, index) => (
        <Card key={index} className="border-none shadow-sm bg-slate-50 dark:bg-slate-900/50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">{edu.degree}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-slate-700 dark:text-slate-300">{edu.institution}</p>
              {edu.institutionUrl && (
                <a href={edu.institutionUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors" aria-label={`Visit ${edu.institution} website`}>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">{edu.period}</p>
            <p className="text-sm mt-2 italic text-slate-600 dark:text-slate-400">{edu.details}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export const AccomplishmentsSection = () => (
  <section className="py-16 px-4 max-w-4xl mx-auto bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-3xl my-10" aria-labelledby="accomplishments-heading">
    <h2 id="accomplishments-heading" className="text-3xl font-bold text-center mb-12">Key Accomplishments</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {resumeData.accomplishments.map((item, index) => (
        <div key={index} className="flex items-start gap-3 p-4 bg-white/10 dark:bg-slate-100 rounded-xl">
          <span className="text-green-400 font-bold" aria-hidden="true">✓</span>
          <p className="text-sm md:text-base leading-relaxed">{item}</p>
        </div>
      ))}
    </div>
  </section>
);
