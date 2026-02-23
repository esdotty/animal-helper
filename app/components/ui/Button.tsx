type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
  };
  
  export default function Button({
    children,
    onClick,
    disabled,
    variant = 'primary'
  }: Props) {
    const base =
      'w-full h-12 rounded-2xl font-semibold transition';
  
    const styles =
      variant === 'primary'
        ? 'bg-green-600 text-white'
        : 'bg-gray-200 text-gray-800';
  
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${base} ${styles} ${
          disabled ? 'opacity-40' : ''
        }`}
      >
        {children}
      </button>
    );
  }