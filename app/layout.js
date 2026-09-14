import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'SAP Project Accountability – FCI',
    template: '%s | SAP Project Accountability – FCI',
  },
  description: 'An evidence-based record of implementation outcomes, governance decisions, business alignment and Phase 2 readiness.',
  keywords: ['SAP', 'project accountability', 'governance', 'Phase 2', 'transparency', 'FCI'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_BD',
    title: 'SAP Project Accountability – FCI',
    description: 'An evidence-based record of implementation outcomes, governance decisions, business alignment and Phase 2 readiness.',
    siteName: 'SAP Project Accountability – FCI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAP Project Accountability – FCI',
    description: 'An evidence-based record of implementation outcomes, governance decisions, business alignment and Phase 2 readiness.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteHeader />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
