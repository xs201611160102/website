export function Direction({ name, members, papers, downloads }) {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h2 className="text-3xl font-bold">{name}</h2>

      <section>
        <h3 className="text-2xl font-semibold mb-2">成员</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {members.map((m, idx) => (
            <li key={idx} className="border p-4 rounded-xl shadow">
              <h4 className="text-lg font-medium">{m.name}（{m.title}）</h4>
              <p className="text-sm text-gray-600 mt-1">{m.bio}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-2">论文</h3>
        <ul className="list-disc list-inside space-y-2">
          {papers.map((p, idx) => (
            <li key={idx}>
              <strong>{p.title}</strong>，{p.authors}，{p.year}年。
              <a href={p.doi} className="text-blue-600 underline ml-2" target="_blank" rel="noopener noreferrer">查看</a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-2">数据下载</h3>
        <ul className="space-y-2">
          {downloads.map((d, idx) => (
            <li key={idx} className="border rounded-lg p-4 shadow flex justify-between items-center">
              <div>
                <p className="font-medium">{d.name}</p>
                <p className="text-sm text-gray-600">{d.description}</p>
              </div>
              <a href={d.url} download className="text-blue-600 underline">下载</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
