"use client"

import { useState, useMemo } from "react"
import { quizData } from "@/lib/quiz-data"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface ReviewScreenProps {
  userAnswers: Record<string, string>
  onRestart: () => void
}

export default function ReviewScreen({ userAnswers, onRestart }: ReviewScreenProps) {
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null)

  const questionsWithAnswers = useMemo(() => {
    return Object.entries(userAnswers)
      .map(([id, answer]) => {
        const question = quizData.find((q) => q.id === id)
        if (!question) return null

        const isCorrect = answer === question.correct
        const selectedOption = question.options.find((opt) => opt.label === answer)
        const correctOption = question.options.find((opt) => opt.label === question.correct)

        return {
          ...question,
          userAnswer: answer,
          selectedOption,
          correctOption,
          isCorrect,
        }
      })
      .filter(Boolean)
  }, [userAnswers])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Válaszok megtekintése</h1>

        <div className="space-y-4 mb-8">
          {questionsWithAnswers.map((item) => (
            <Card
              key={item.id}
              className="p-4 bg-white border-2 cursor-pointer hover:shadow-lg transition-all"
              onClick={() => setExpandedQuestion(expandedQuestion === item.id ? null : item.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                        item.isCorrect ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {item.isCorrect ? "✓" : "✗"}
                    </div>
                    <span className="text-sm font-semibold text-blue-600">Fejezet {item.chapter}</span>
                  </div>
                  <p className="font-semibold text-gray-800">{item.question}</p>
                </div>
              </div>

              {expandedQuestion === item.id && (
                <div className="mt-6 pt-6 border-t-2 border-blue-200">
                  {item.image && (
                    <div className="mb-6 flex justify-center">
                      <div className="relative w-full max-w-sm h-48 bg-gray-100 rounded-lg overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt="Question diagram"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-3 mb-6">
                    <div>
                      <p className="text-sm font-semibold text-blue-700 mb-2">Te válaszoltál:</p>
                      <p className="p-3 bg-blue-100 rounded-lg border-2 border-blue-300 font-semibold">
                        {item.selectedOption?.label}) {item.selectedOption?.text}
                      </p>
                    </div>

                    {!item.isCorrect && (
                      <div>
                        <p className="text-sm font-semibold text-green-700 mb-2">Helyes válasz:</p>
                        <p className="p-3 bg-green-100 rounded-lg border-2 border-green-300 font-semibold">
                          {item.correctOption?.label}) {item.correctOption?.text}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <Button
          onClick={onRestart}
          className="w-full h-12 font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          Újrakezdés
        </Button>
      </div>
    </div>
  )
}
