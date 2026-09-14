import AboutSection from '@/components/AboutSection';
import ContactCallout from '@/components/ContactCallout';
import DemoGallery from '@/components/DemoGallery';
import EvidenceChecklist from '@/components/EvidenceChecklist';
import GovernancePrinciples from '@/components/GovernancePrinciples';
import Hero from '@/components/Hero';
import PeopleReviews from '@/components/PeopleReviews';
import ProjectSnapshot from '@/components/ProjectSnapshot';

export default function Home() {
  return (
    <>
      <Hero />
      <DemoGallery />
      <AboutSection />
      <ProjectSnapshot />
      <EvidenceChecklist />
      <PeopleReviews />
      {/* <GovernancePrinciples /> */}
      {/* <ContactCallout /> */}
    </>
  );
}
