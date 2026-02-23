type Props = {
    value: string;
    onChange: (value: string) => void;
    options: string[];
    placeholder?: string;
  };
  
  export default function Select({
    value,
    onChange,
    options,
    placeholder
  }: Props) {
    return (
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 border rounded-2xl px-3"
      >
        <option value="">
          {placeholder ?? 'Select'}
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    );
  }