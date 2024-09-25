export default function GamesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="text-5xl font-bold text-green-500">{children}</div>;
}
