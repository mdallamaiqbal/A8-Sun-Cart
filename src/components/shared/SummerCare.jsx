"use client";

const summerTips = [
  {
    title: "Skincare Protection 🧴",
    points: [
      "Use SPF 30+ sunscreen daily",
      "Reapply every 2–3 hours",
      "Wear light breathable clothes",
      "Clean face twice daily",
    ],
  },
  {
    title: "Stay Hydrated 💧",
    points: [
      "Drink 2.5–3 liters water daily",
      "Coconut water & lemon water help",
      "Avoid too much soda & caffeine",
    ],
  },
  {
    title: "Keep Body Cool 🧊",
    points: [
      "Take cool showers",
      "Avoid sun 11 AM – 4 PM",
      "Stay in shade or cool place",
    ],
  },
  {
    title: "Healthy Diet 🍉",
    points: [
      "Eat watermelon, mango, cucumber",
      "Avoid oily & spicy foods",
      "Eat light meals",
    ],
  },
  {
    title: "Heat Safety ⚠️",
    points: [
      "Watch for dizziness or headache",
      "Move to cool place if needed",
      "Always carry water bottle",
    ],
  },
];

export default function SummerCare() {
  return (
   <div className="mt-10 flex justify-center items-center p-5">
  <div className="w-full max-w-5xl bg-white/80 shadow-xl rounded-2xl p-6">

    <h1 className="text-3xl font-bold text-center mb-8 text-orange-500">
      🌞 Summer Care Tips
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {summerTips.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100 p-5 rounded-xl"
        >
          <h2 className="font-bold text-lg mb-3 text-orange-600">
            {item.title}
          </h2>

          <ul className="space-y-2 text-gray-700">
            {item.points.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

  </div>
</div>
  );
}