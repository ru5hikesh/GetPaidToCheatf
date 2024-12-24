import IMAGES from "@/assets/images";

const games = [
  {
    title: "FORTNITE",
    image: IMAGES.fornite,
  },
  {
    title: "CS:GO",
    image: IMAGES.c5,
  },
  {
    title: "VALORANT",
    image: IMAGES.volarant,
  },
];

function AvailableGame() {
  return (
    <div className="relative bg-[#0f0f0f] text-white px-4 py-16 md:p-20">
      <div className="absolute -top-2 md:-top-5 left-3/4 ">
        <img src={IMAGES.hook} alt="Bitcoin" className="w-56" />
      </div>
      <div className="text-7xl md:text-8xl font-american ">
        Available Games.
      </div>
      <div className="text-xl mb-12 opacity-70">
        Available MODS and cheats for the following games
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {games.map((game) => (
          <div
            key={game.title}
            className="border border-yellow-300 rounded-lg w-full"
          >
            <div className="text-5xl py-8 mb-8 tracking-wide font-american font-bold text-white text-center">
              {game.title}
            </div>
            <img
              src={game.image}
              alt={`Image of ${game.title}`}
              width={300}
              height={200}
              className="object-cover w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvailableGame;
