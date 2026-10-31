import { Metadata } from 'next';
import { 
  Hero, 
  SkillsSection, 
  ExperienceSection, 
  EducationSection, 
  AccomplishmentsSection 
} from '@/components/ResumeComponents';
import { ThemeToggle } from '@/components/ThemeToggle';

export const metadata: Metadata = {
  title: 'Shailesh Singh | Technology Lead Portfolio',
  description: 'Expert Fullstack Developer and Technology Lead with 11+ years of experience in Java, Node.js, and distributed microservices. Specialist in BFSI, Telecom, and Education domains.',
  keywords: ['Shailesh Singh', 'Technology Lead', 'Fullstack Developer', 'Java Expert', 'Node.js Expert', 'Microservices Architect', 'Dubai UAE Software Engineer'],
  openGraph: {
    title: 'Shailesh Singh | Technology Lead',
    description: 'Fullstack Expert & Technology Lead Portfolio',
    type: 'website',
    url: 'https://shailesh-portfolio.vercel.app', // Replace with actual domain
  },
  other: {
    'commit-id': 'fa0a592b6e0b2a039ef71931bf2af3b9affb730f'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shailesh Singh | Technology Lead',
    description: 'Expert Fullstack Developer with 11+ years of experience.',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <ThemeToggle />
      <Hero />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <AccomplishmentsSection />
      
      <footer className="py-12 text-center text-slate-500 dark:text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} Shailesh Singh. Built with Next.js, Tailwind & shadcn/ui.</p>
      </footer>
    </main>
  );
}
