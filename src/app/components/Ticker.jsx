import {
  FaCoffee,
  FaCut,
  FaDumbbell,
  FaShopify,
  FaStore,
  FaUtensils,
} from "react-icons/fa";

const items = [
  { name: "Coffee shops", icon: <FaCoffee /> },
  { name: "Retail stores", icon: <FaStore /> },
  { name: "Restaurants", icon: <FaUtensils /> },
  { name: "Gyms", icon: <FaDumbbell /> },
  { name: "Salons", icon: <FaCut /> },
  { name: "Markets", icon: <FaShopify /> },
];

export default function Ticker() {
  return (
    <section className="w-full overflow-hidden border-y border-[#e5e5e5] bg-[#ECEAEA] py-5">
      <div className="ticker-wrapper">
        <div className="ticker-track">
          {[...items, ...items].map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="ticker-item flex cursor-default items-center gap-3 px-10 whitespace-nowrap"
            >
              <span className="text-sm text-[#1E40AF]">{item.icon}</span>
              <p className="text-[18px] font-medium text-black">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
