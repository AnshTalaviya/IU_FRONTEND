"use client"

import { useState } from "react"
import { Card, CardContent } from "../../ui/card"
import { Button } from "../../ui/button"
import { Badge } from "../../ui/badge"
import { Play, Star, Download, Clock, Trophy, Brain, Zap } from "lucide-react"
// import Image from "next/image"

const games = [
  {
    id: "subway-surfers",
    title: "Subway Surfers",
    description: "Endless running adventure through subway tracks",
    image: "https://images.hindustantimes.com/img/2022/09/09/1600x900/Subway_Surfers_1662720383211_1662720383417_1662720383417.png",
    rating: 4.5,
    downloads: "1B+",
    category: "Action",
    playTime: "Quick Sessions",
    benefits: [
      "Improves reaction time for better driving reflexes",
      "Enhances hand-eye coordination",
      "Reduces stress during break times",
      "Sharpens focus and concentration",
    ],
    features: ["Endless Running", "Power-ups", "Character Collection", "Daily Challenges"],
  },
  {
    id: "temple-run-2",
    title: "Temple Run 2",
    description: "Navigate perilous cliffs, zip lines, mines and forests",
    image: "https://i.ytimg.com/vi/tRjQpbB_-FI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBhMjDmNpH7e1XPzsNG61WpMlDohA",
    rating: 4.3,
    downloads: "500M+",
    category: "Adventure",
    playTime: "Quick Sessions",
    benefits: [
      "Develops quick decision-making skills",
      "Improves spatial awareness for navigation",
      "Enhances multitasking abilities",
      "Provides mental relaxation between rides",
    ],
    features: ["Stunning Graphics", "New Obstacles", "Power System", "Achievements"],
  },
]

export default function GamesPage() {
  const [selectedGame, setSelectedGame] = useState(null)

  const handlePlayNow = (gameTitle) => {
    const playStoreUrls = {
      "Subway Surfers": "https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf",
      "Temple Run 2": "https://play.google.com/store/apps/details?id=com.imangi.templerun2",
    }

    const url = playStoreUrls[gameTitle]
    if (url) {
      window.open(url, "_blank")
    }
  }

  const handleGameClick = (gameId) => {
    setSelectedGame(gameId)
  }

  const handleBackToGames = () => {
    setSelectedGame(null)
  }

  if (selectedGame) {
    const game = games.find((g) => g.id === selectedGame)
    if (!game) return null

    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 py-8">
          <Button
            onClick={handleBackToGames}
            variant="outline"
            className="mb-6 bg-green-600/20 border-green-500/30 text-green-400 hover:bg-green-600/30"
          >
            ← Back to Games
          </Button>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  width={500}
                  height={300}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h1 className="text-3xl font-bold text-white mb-2">{game.title}</h1>
                  <p className="text-white/80">{game.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{game.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Download className="w-5 h-5" />
                  <span>{game.downloads}</span>
                </div>
                <Badge variant="secondary" className="bg-green-600 text-black font-semibold">
                  {game.category}
                </Badge>
              </div>

              <Button
                onClick={() => handlePlayNow(game.title)}
                size="lg"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black font-semibold py-4 text-lg"
              >
                <Play className="w-6 h-6 mr-2" />
                Play Now on Google Play
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="bg-black/60 border-green-500/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Brain className="w-6 h-6 text-green-400" />
                    Driver Benefits
                  </h3>
                  <ul className="space-y-3">
                    {game.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3 text-white/90">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/60 border-green-500/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-green-400" />
                    Game Features
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {game.features.map((feature, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-green-500/50 text-green-400 justify-center py-2"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/60 border-green-500/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Clock className="w-6 h-6 text-green-400" />
                    Perfect for Drivers
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    This game is designed for quick gaming sessions, perfect for drivers during break times. Play for
                    5-10 minutes between rides to refresh your mind and improve your reflexes, making you a better and
                    more alert driver.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Driver Games Zone</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Enhance your driving skills while having fun! Play these games during breaks to improve reflexes and stay
            sharp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {games.map((game) => (
            <Card
              key={game.id}
              className="group cursor-pointer bg-black/60 border-green-500/30 backdrop-blur-sm hover:bg-green-900/30 transition-all duration-300 hover:scale-102 hover:shadow-2xl hover:shadow-green-500/20"
              onClick={() => handleGameClick(game.id)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={game.image || "/placeholder.svg"}
                    alt={game.title}
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-green-600 text-black font-semibold">
                    {game.category}
                  </Badge>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{game.title}</h3>
                    <p className="text-white/70">{game.description}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-white/80">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{game.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        <span>{game.downloads}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-green-400 text-green-400">
                      <Clock className="w-3 h-3 mr-1" />
                      {game.playTime}
                    </Badge>
                  </div>

                  <div className="pt-2">
                    <Button
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-black font-semibold"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleGameClick(game.id)
                      }}
                    >
                      <Trophy className="w-4 h-4 mr-2" />
                      View Details & Play
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-black/60 border-green-500/30 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Why Gaming Benefits Drivers?</h2>
              <div className="grid md:grid-cols-3 gap-6 text-white/90">
                <div className="text-center">
                  <Brain className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Mental Agility</h3>
                  <p className="text-sm">Improves quick thinking and decision-making skills</p>
                </div>
                <div className="text-center">
                  <Zap className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Faster Reflexes</h3>
                  <p className="text-sm">Enhances reaction time for safer driving</p>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Stress Relief</h3>
                  <p className="text-sm">Provides relaxation during break times</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
