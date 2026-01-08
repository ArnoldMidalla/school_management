import Navbar from "./components/nav";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* left Sidebar */}
      {/* <aside className="w-80 border-l"> */}
        <Navbar />
      {/* </aside> */}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
