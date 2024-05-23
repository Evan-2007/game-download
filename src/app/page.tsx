import { platform } from "os"

interface Games {
  name: string
  platform: string[]
  links: string[]
}

const games: Games[] = [
  {
    name: 'Game 1',
    platform: ['Windows', 'Mac'],
    links: [ 'Bambu_Studio_win-v01.09.01.66.exe ', 'uploading']
  },
  {
    name: 'Game 2',
    platform: ['Windows', 'Mac'],
    links: [ 'uploading', 'uploading']
  },
  {
    name: 'Game 3',
    platform: ['Windows', 'Mac'],
    links: [ 'uploading']
  },
  {
    name: 'Game 4',
    platform: ['Windows', 'Mac'],
    links: [ 'uploading', 'uploading']
  },
]


export default function page() {
  return (
    <div className="flex justify-center flex-col items-center mb-24">
      <p className="text-4xl mt-3 mr-10">GECS Games</p>
      <div className="flex flex-row flex-wrap justify-center items-center">
        {games.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </div>
  )
}

function GameCard({ game }: { game: Games }) {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-950 w-64 mt-5 h-36 rounded-2xl mr-10">
      <h1 className="text-3xl">{game.name}</h1>
      <h1 className="text-1xl mt-4">Downloads:</h1>
      <div className="flex flex-row items-center justify-between mt-2">
        {game.links.map((link, index) => (
          <>
            <a
              key={index}
              href={link === 'uploading' ? "/uploading" : `https://assets.evanc.dev/games/gecs/${link}`}
              target="_blank"
              className="text-center mr-2 ml-2 hover:underline text-blue-500"
            >
              {game.platform[index]}
            </a>
            {index !== game.links.length - 1 && <h1 className="text-1xl">|</h1>}
          </>
        ))}
      </div>
    </div>
  )
}