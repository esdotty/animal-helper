'use client';

import Card from '../ui/Card';
import Button from '../ui/Button';

type Props = {
  data: {
    from: string;
    to: string;
    animal: string;
  };
  onReset: () => void;
};

const defaultChecklist = [
  'ISO microchip',
  'Rabies vaccination',
  'Antibody test',
  'EU health certificate'
];

export default function Checklist({data, onReset}: Props) {
  const handleDownload = () => {
    window.print(); // временно
  };

  return (
    <div className="flex flex-col gap-6">

      <h2 className="text-xl font-semibold">
        {data.animal} from {data.from} → {data.to}
      </h2>

      {defaultChecklist.map((item, i) => (
        <Card key={i}>☐ {item}</Card>
      ))}

      <Button variant="secondary" onClick={onReset}>
        Back to start
      </Button>

      <Button onClick={handleDownload}>
        Download PDF
      </Button>
    </div>
  );
}