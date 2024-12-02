import Navbar from '@/components/homepage/Navbar';
import '../globals.css';
import { Lexend, Roboto } from 'next/font/google';
import Footer from '@/components/homepage/Footer';

// Define font configurations for Google fonts
const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-lexend',
});

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'Playbook Library',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${roboto.variable}  antialiased`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
