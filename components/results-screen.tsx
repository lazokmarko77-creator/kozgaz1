"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ResultsScreenProps {
  score: number
  total: number
  onViewAnswers: () => void
  onRestart: () => void
}

export default function ResultsScreen({ score, total, onViewAnswers, onRestart }: ResultsScreenProps) {
  const percentage = Math.round((score / total) * 100)
  let resultMessage = ""
  let resultColor = ""

  if (percentage >= 80) {
    resultMessage = "Kiváló teljesítmény!"
    resultColor = "text-green-600"
  } else if (percentage >= 60) {
    resultMessage = "Jó teljesítmény!"
    resultColor = "text-blue-600"
  } else if (percentage >= 40) {
    resultMessage = "Megfelelő teljesítmény."
    resultColor = "text-yellow-600"
  } else {
    resultMessage = "Ajánlott több gyakorlás."
    resultColor = "text-red-600"
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4">
      <Card className="max-w-md w-full p-12 bg-white shadow-2xl border-2 border-blue-200 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Eredmény</h1>

        <div className="mb-8">
          <div className="text-6xl font-bold text-blue-600 mb-4">
            {score}/{total}
          </div>
          <div className="text-3xl font-bold mb-4">{percentage}%</div>
          <div className={`text-2xl font-bold ${resultColor}`}>{resultMessage}</div>
        </div>

        <div className="space-y-4">
          <Button
            onClick={onViewAnswers}
            className="w-full h-12 font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            Válaszaim megtekintése
          </Button>
          <Button
            onClick={onRestart}
            className="w-full h-12 font-semibold bg-green-600 hover:bg-green-700 text-white rounded-lg"
          >
            Újrakezdés
          </Button>
        </div>
      </Card>
    </div>
  )
}
