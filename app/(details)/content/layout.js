import Sidebar from '@/components/SidebarComponent';
import '../../globals.css';
// import 'antd/timeline/style/css';
import { Lexend, Roboto } from 'next/font/google';

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

export default function DetailsLayout({ children }) {
  // return <>{children}</>;
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${roboto.variable}  antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
