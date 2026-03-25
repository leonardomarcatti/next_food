import './globals.css';
import Header from './components/Header';
import Background from './components/Background';
export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header />
        <Background />
        {children}
      </body>
    </html>
  );
}
