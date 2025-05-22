import { platform } from "os"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"


interface Games {
  name: string
  platform: string[]
  links: string[]
}

interface Years {
  year: string
  games: Games[]
}

const games: Years[] = [
  {
    year: "2025",
    games: [
      {
        name: 'Elemental Amulet',
        platform: ['Windows'],
        links: [ '2025/Elemental Amulet.zip']
      },
      {
        name: 'Incognito',
        platform: ['Windows'],
        links: [ '2025/Incognito-Windows.zip']
      },
      {
        name: 'Ossify',
        platform: ['Windows'],
        links: [ '2025/OssifyGame.zip']
      },
      {
        name: 'Zoomies',
        platform: ['Windows'],
        links: [ '2025/Zoomies.zip']
      },
    ]
  },
  {
    year: "2024", 
    games:[
        {
          name: 'Escape',
          platform: ['Windows'],
          links: [ 'escape.zip']
        },
        {
          name: 'Eye Spy',
          platform: ['Windows'],
          links: [ 'Eye Spy.zip']
        },
        {
          name: 'Dungeon Delve',
          platform: ['Windows'],
          links: [ 'DungeonDelve.zip']
        },
        {
          name: 'Race Rave Ice Edition',
          platform: ['Windows'],
          links: [ 'RaceRaveIceEdition.zip']
        },
        {
          name: 'Root Beer Runner',
          platform: ['Windows'],
          links: [ 'RootBeerRunner.zip']
        },]
      }
    ]


export default function page() {
  return (
    <div className="flex justify-center flex-col items-center mb-24 bg-background">
      {
        games.map((year, index) => (
          <div key={index} className="mt-10">
            <h1 className="text-3xl text-center text-white">{year.year}</h1>
            <div className="flex flex-wrap justify-center mt-5 space-x-5">
              {year.games.map((game, index) => (
                <GameCard key={index} game={game} />
              ))}
            </div>
          </div>
        ))
      }
    </div>
  )
}

function GameCard({ game }: { game: Games }) {
  return (
    <Card className="w-64 bg-card text-card-foreground">
      <CardHeader>
        <CardTitle>{game.name}</CardTitle>
        <CardDescription>
          {game.platform.map((platform, index) => (
            <span key={index}>{platform}{index < game.platform.length - 1 ? ', ' : ''}</span>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Separator />
        <div className="flex flex-col items-center">
          {game.links.map((link, index) => (
            <Button key={index} variant="outline" className="mt-2">
              <a href={`https://assets.evanc.dev/games/gecs/${link}`} download>{game.platform[index]}</a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}