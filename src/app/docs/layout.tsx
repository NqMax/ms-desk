export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex gap-x-10 relative container pt-8 h-[calc(100vh-4.813rem)]">{children}</div>;
}
