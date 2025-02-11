import { useEffect } from 'react';
import { useToggle } from '@mantine/hooks';
import MainApp from '@/components/MainApp/MainApp';

export default function HomePage() {
  // Active Sections State
  const [activeSection, toggleSection] = useToggle(['Home', 'About', 'Works', 'Contact']);

  // Fisrt Render
  useEffect(() => {
    toggleSection('Home');
  }, []);
  return (
    <>
      <MainApp activeSection={activeSection} toggleSection={toggleSection} />
    </>
  );
}
