'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Dropdown from '../ui/Dropdown';
import AnimalOption from '../ui/AnimalOption';

const countries = [
  'Germany',
  'France',
  'Spain',
  'Italy',
  'Netherlands',
  'Belgium',
  'Austria',
  'Sweden',
  'Poland',
  'Portugal'
];

const animals = ['cat', 'dog'];

type Props = {
  onComplete: (data: {
    from: string;
    to: string;
    animal: string;
  }) => void;
};

export default function Wizard({onComplete}: Props) {
  const [step, setStep] = useState(1);
  const [to, setTo] = useState('');
  const [animal, setAnimal] = useState('');

  const t = useTranslations('Wizard');

  const from = 'Morocco';

  return (
    <Card>
    <div className="flex flex-col gap-6">

      {step === 1 && (
        <>
          <h2 className="text-xl font-semibold">
            From country
          </h2>
          <Card>{from}</Card>
          <Button onClick={() => setStep(2)}>
            Next
          </Button>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="text-xl font-semibold">
            Destination country
          </h2>

          <Dropdown
  value={to}
  onChange={setTo}
  placeholder={t('selectCountry')}
  options={countries.map(c => ({
    value: c,
    label: c
  }))}
/>

          <Button
            disabled={!to}
            onClick={() => setStep(3)}
          >
            Next
          </Button>
        </>
      )}

      {step === 3 && (
        <>
          <h2 className="text-xl font-semibold">
            Animal type
          </h2>

          <div className="flex gap-4">
  {animals.map((a) => (
    <AnimalOption
      key={a}
      type={a as 'cat' | 'dog'}
      selected={animal === a}
      onClick={() => setAnimal(a)}
    />
  ))}
</div>

          <Button
            disabled={!animal}
            onClick={() =>
              onComplete({from, to, animal})
            }
          >
            Show checklist
          </Button>
        </>
      )}
    </div>
    </Card>
  );
}