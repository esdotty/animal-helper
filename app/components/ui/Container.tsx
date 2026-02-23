export default function Container({
    children
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="bg-gray-100 min-h-screen flex justify-center">
        <div className="w-full max-w-md bg-white min-h-screen p-6">
          {children}
        </div>
      </div>
    );
  }