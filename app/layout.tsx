// app/layout.tsx
import './globals.css';
import FigoAIChatWidget from '@/src/components/FigoAIChatWidget'

export const metadata = {
  title: 'Figo Events',
  description: 'Your Description',
  icons: {
    icon: 'https://res.cloudinary.com/cyclops-information-systems/image/upload/v1712187396/FigoEvents/evbanner_dwwtmk.webp',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      

          {children}
          <FigoAIChatWidget/>
        
      </body>
    </html>
  );
}
