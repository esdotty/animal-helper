import './globals.css';

export const metadata = {
  title: 'Animal Export Helper',
  description: 'Volunteer animal export guide'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-gray-100 flex justify-center">
  <main className="w-full max-w-md min-h-screen bg-white shadow-lg p-6">
    {children}
  </main>
</body>
    </html>
  );
}

