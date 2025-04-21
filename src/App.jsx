import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Direction } from "./pages/Direction";

const directions = [
  {
    path: "photometric-metallicity",
    name: "测光金属丰度",
    members: [
      { name: "张三", title: "博士后", bio: "研究测光金属丰度的算法模型" },
      { name: "李四", title: "博士生", bio: "专注于星系光度特征分析" }
    ],
    papers: [
      { title: "A Study on Photometric Metallicity", authors: "Zhang et al.", year: 2023, doi: "https://doi.org/10.1234/metallicity.2023" }
    ],
    downloads: [
      { name: "金属丰度样本数据.zip", description: "包含光度金属丰度样本数据", url: "/downloads/metallicity.zip" }
    ]
  },
  {
    path: "extinction",
    name: "消光",
    members: [
      { name: "王五", title: "研究员", bio: "研究星际尘埃与消光效应" },
      { name: "赵六", title: "硕士生", bio: "关注不同波段的消光特性" }
    ],
    papers: [
      { title: "Interstellar Extinction Models", authors: "Wang et al.", year: 2022, doi: "https://doi.org/10.1234/extinction.2022" }
    ],
    downloads: [
      { name: "消光数据集.csv", description: "多波段消光数据样本", url: "/downloads/extinction.csv" }
    ]
  },
  {
    path: "milky-way",
    name: "银河系",
    members: [
      { name: "钱七", title: "副研究员", bio: "分析银河系结构与动力学" },
      { name: "孙八", title: "博士生", bio: "专注银河系盘的演化历史" }
    ],
    papers: [
      { title: "Structure of the Milky Way", authors: "Qian et al.", year: 2024, doi: "https://doi.org/10.1234/milkyway.2024" }
    ],
    downloads: [
      { name: "银河系动力学模型.txt", description: "模拟银河系结构的输入文件", url: "/downloads/milkyway.txt" }
    ]
  },
  {
    path: "calibration",
    name: "定标",
    members: [
      { name: "周九", title: "助理研究员", bio: "研究仪器与观测数据的定标问题" },
      { name: "吴十", title: "博士生", bio: "开发自动定标算法" }
    ],
    papers: [
      { title: "Calibration Methods for Large Surveys", authors: "Zhou et al.", year: 2021, doi: "https://doi.org/10.1234/calibration.2021" }
    ],
    downloads: [
      { name: "定标工具包.zip", description: "包含自动定标Python脚本", url: "/downloads/calibration.zip" }
    ]
  }
];

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <nav className="bg-blue-600 text-white p-4 shadow">
          <div className="container mx-auto flex justify-between">
            <h1 className="text-xl font-bold">研究组主页</h1>
            <div className="space-x-4">
              <Link to="/" className="hover:underline">首页</Link>
              {directions.map((dir) => (
                <Link key={dir.path} to={`/${dir.path}`} className="hover:underline">{dir.name}</Link>
              ))}
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home directions={directions} />} />
          {directions.map((dir) => (
            <Route
              key={dir.path}
              path={`/${dir.path}`}
              element={<Direction {...dir} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}
