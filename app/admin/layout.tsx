import Navbar from "./components/nav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Navbar />
      {children}
    </div>
  );
}
