import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Gatsby", pages: 192, fill: "#3b82f6" },
  { name: "Mockingbird", pages: 281, fill: "#14b8a6" },
  { name: "1984", pages: 328, fill: "#facc15" },
  { name: "Alchemist", pages: 177, fill: "#fb923c" },
  { name: "Pride", pages: 279, fill: "#ef4444" },
];


// 🔥 Custom Shape (Building Style)
const TriangleBar = (props) => {
  const { x, y, width, height, fill } = props;

  return (
    <path
      d={`
        M${x},${y + height} 
        L${x + width},${y + height} 
        L${x + width / 2},${y} 
        Z
      `}
      fill={fill}
    />
  );
};

const PageToRead = () => {
  return (
    <div className="container mx-auto px-4 py-10">

      <div className="card bg-base-100 shadow-xl p-6">
        <div className="w-full h-[400px]">
          
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              {/* 👇 custom shape applied */}
              <Bar dataKey="pages" shape={<TriangleBar />}>
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.fill} />
                ))}
              </Bar>

            </BarChart>
          </ResponsiveContainer>

        </div>
      </div>
    </div>
  );
};

export default PageToRead;