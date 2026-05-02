"use client";

const brands = [
  {
    name: "HydroPeak",
    desc: "Hydration & Water Care",
    color: "from-[#34B0BD] to-[#5ad1dc]",
  },
  {
    name: "GlowGuard",
    desc: "Skincare Protection",
    color: "from-[#F09633] to-orange-400",
  },
  {
    name: "AquaSoft",
    desc: "Soft & Gentle Skin Care",
    color: "from-[#34B0BD] to-[#F09633]",
  },
  {
    name: "SunShade",
    desc: "Sun Protection Solutions",
    color: "from-[#F09633] to-yellow-400",
  },
];

export default function TopBrands() {
  return (
    <div className="mt-10 flex justify-center items-center p-5">
      <div className="w-full max-w-5xl">

        <h1 className="text-3xl font-bold text-center mb-10 text-[#34B0BD]">
          🏷️ Top Brands
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {brands.map((brand, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl text-white bg-linear-to-r ${brand.color} shadow-lg hover:scale-105 transition-all duration-300`}
            >
              <h2 className="text-xl font-bold">{brand.name}</h2>
              <p className="text-sm mt-2 opacity-90">{brand.desc}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}