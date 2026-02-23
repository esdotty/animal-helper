'use client';

import {useState} from 'react';
import Container from '../components/ui/Container';
import Wizard from '../components/features/Wizard';
import Checklist from '../components/features/Checklist';


export default function Page() {
  const [data, setData] = useState<any>(null);

  const handleReset = () => {
    setData(null);
  };

  return (
    <Container>
      {data ? (
        <Checklist data={data} onReset={handleReset} />
      ) : (
        <Wizard onComplete={setData} />
      )}
    </Container>
  );
}