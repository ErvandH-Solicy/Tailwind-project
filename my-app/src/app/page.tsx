import { cardData } from "./utils/constants/cards";

export default function Home() {
  return (
      <div className="flex gap-2 flex-wrap xl:justify-between mx-3 justify-center">
        {
          cardData.map((card, index: number) => (
            <div className="max-w-sm rounded overflow-hidden shadow-lg" key={index}>
              <img className="w-full" src={card.img} alt="Sunset in the mountains" />
              <div className="md:px-6 py-4 px-2 py-4">
                <div className="font-bold text-xl mb-2">{card.title}</div>
                <p className="text-gray-700 text-base">
                  {card.desc}
                </p>
              </div>
              <div className="md:px-6 pt-4 pb-2 px-2">
                {card.hashtag.map((item, index: number) => (
                  <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.title}</span>
                ))}
              </div>
            </div>
          ))
        }
      </div>
  );
}
