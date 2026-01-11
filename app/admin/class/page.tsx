export default function Class() {
  return (
    <main className="flex-1 p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">All Classes</h1>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <span className="text-muted-foreground">Home</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-primary">Class</span>
          </div>
        </div>
      </div>
    </main>
  );
}
