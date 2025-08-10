// app/layout.tsx
import './globals.css';
import FigoAIChatWidget from '@/src/components/FigoAIChatWidget'

export const metadata = {
  title: 'Figo Events',
  description: 'Your Description',
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
