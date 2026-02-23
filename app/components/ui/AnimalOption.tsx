'use client';

type Props = {
  type: 'cat' | 'dog';
  selected: boolean;
  onClick: () => void;
};

const emojiMap = {
  cat: '🐱',
  dog: '🐶'
};

export default function AnimalOption({
  type,
  selected,
  onClick
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        flex flex-col items-center justify-center
        flex-1 p-4 rounded-2xl border
        transition-all
        ${
          selected
            ? 'border-green-600 bg-green-50 shadow-md'
            : 'border-gray-300 bg-white'
        }
        focus:outline-none focus:ring-2 focus:ring-blue-400
      `}
    >
      <span className="text-5xl">
        {emojiMap[type]}
      </span>

      <span className="mt-2 font-medium capitalize">
        {type}
      </span>
    </button>
  );
}