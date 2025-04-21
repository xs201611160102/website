export function Home({ directions }) {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">研究方向</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {directions.map((dir) => (
          <a
            key={dir.path}
            href={`/${dir.path}`}
            className="border rounded-2xl shadow p-4 hover:bg-blue-50 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{dir.name}</h3>
            <p>{dir.members[0]?.bio || "点击查看详情"}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
