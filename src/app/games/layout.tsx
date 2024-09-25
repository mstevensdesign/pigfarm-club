export default function GamesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="text-3xl font-bold text-green-500">{children}</div>;
}
