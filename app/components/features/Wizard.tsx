'use client';

import {useState} from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Select from '../ui/Select';

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

  const from = 'Morocco';

  return (
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

          <Select
            value={to}
            onChange={setTo}
            options={countries}
            placeholder="Select country"
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
              <button
                key={a}
                onClick={() => setAnimal(a)}
                className={`flex-1 h-12 rounded-2xl border ${
                  animal === a
                    ? 'bg-green-600 text-white'
                    : ''
                }`}
              >
                {a}
              </button>
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
  );
}