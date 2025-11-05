"use client"

import { useState, useMemo } from "react"
import { quizData } from "@/lib/quiz-data"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import QuestionCard from "./question-card"

interface QuizComponentProps {
  selectedChapter: number | null
  onComplete: (answers: Record<string, string>, score: number, total: number) => void
}

export default function QuizComponent({ selectedChapter, onComplete }: QuizComponentProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({})
  const [showFeedback, setShowFeedback] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showFinishConfirm, setShowFinishConfirm] = useState(false)

  const questions = useMemo(() => {
    const filtered = selectedChapter ? quizData.filter((q) => q.chapter === selectedChapter) : quizData

    // Shuffle questions
    const shuffled = [...filtered].sort(() => Math.random() - 0.5)

    return shuffled.map((q) => ({
      ...q,
      options: [...q.options].sort(() => Math.random() - 0.5),
    }))
  }, [selectedChapter])

  const currentQuestion = questions[currentQuestionIndex]
  const isAnswered = currentQuestion?.id in userAnswers
  const isCorrect = userAnswers[currentQuestion?.id] === currentQuestion?.correct

  const handleAnswerClick = (optionLabel: string) => {
    if (!isAnswered) {
      setSelectedAnswer(optionLabel)
      setUserAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: optionLabel,
      }))
      setShowFeedback(true)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setShowFeedback(false)
      setSelectedAnswer(null)
    } else {
      // Quiz complete
      const score = Object.entries(userAnswers).filter(([id, answer]) => {
        const question = questions.find((q) => q.id === id)
        return question && answer === question.correct
      }).length

      onComplete(userAnswers, score, questions.length)
    }
  }

  const handleEarlyFinish = () => {
    const score = Object.entries(userAnswers).filter(([id, answer]) => {
      const question = questions.find((q) => q.id === id)
      return question && answer === question.correct
    }).length

    onComplete(userAnswers, score, questions.length)
  }

  if (!currentQuestion) return null

  const correctOption = currentQuestion.options.find((opt) => opt.label === currentQuestion.correct)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 md:py-8 lg:py-12 px-3 md:px-4 lg:px-6">
      <div className="w-full max-w-xl md:max-w-2xl">
        {/* Progress bar */}
        <div className="mb-6 md:mb-8">
          <div className="flex justify-between items-center mb-2 gap-2">
            <span className="text-xs md:text-sm font-semibold text-blue-700 break-words">
              Kérdés {currentQuestionIndex + 1} / {questions.length}
            </span>
            <span className="text-xs md:text-sm font-semibold text-blue-700 flex-shrink-0">
              {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-blue-200 rounded-full h-2 md:h-3 overflow-hidden">
            <div
              className="bg-blue-600 h-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <QuestionCard
          question={currentQuestion}
          onAnswerClick={handleAnswerClick}
          isAnswered={isAnswered}
          selectedAnswer={selectedAnswer}
        />

        {showFeedback && (
          <Card className="p-4 md:p-6 mb-6 md:mb-8 mt-4 md:mt-6 bg-white border-2">
            {isCorrect ? (
              <div className="text-green-600 font-bold text-base md:text-lg break-words">✓ Helyes válasz!</div>
            ) : (
              <div>
                <div className="text-red-600 font-bold text-base md:text-lg mb-2 break-words">✗ Rossz válasz!</div>
                <div className="text-blue-700 text-sm md:text-base break-words">
                  A helyes válasz: <span className="font-bold">{correctOption?.text}</span>
                </div>
              </div>
            )}
          </Card>
        )}

        <div className="flex flex-col md:flex-row gap-2 md:gap-3">
          <Button
            onClick={handleNextQuestion}
            disabled={!isAnswered}
            className="flex-1 h-10 md:h-12 font-semibold text-sm md:text-base bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg"
          >
            {currentQuestionIndex === questions.length - 1 ? "Befejezés" : "Következő"}
          </Button>
          <Button
            onClick={() => setShowFinishConfirm(true)}
            className="flex-1 h-10 md:h-12 font-semibold text-sm md:text-base bg-red-500 hover:bg-red-600 text-white rounded-lg"
          >
            Befejezés
          </Button>
        </div>

        {showFinishConfirm && (
          <Card className="p-4 md:p-6 mt-4 md:mt-6 bg-yellow-50 border-2 border-yellow-400">
            <div className="mb-4">
              <p className="text-yellow-800 font-semibold mb-2 text-sm md:text-base break-words">
                Biztosan szeretne befejezni? {questions.length - currentQuestionIndex - 1} megválaszolatlan kérdés
                marad.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-3">
              <Button
                onClick={handleEarlyFinish}
                className="flex-1 h-10 font-semibold text-sm md:text-base bg-red-500 hover:bg-red-600 text-white rounded-lg"
              >
                Igen, befejezem
              </Button>
              <Button
                onClick={() => setShowFinishConfirm(false)}
                className="flex-1 h-10 font-semibold text-sm md:text-base bg-gray-400 hover:bg-gray-500 text-white rounded-lg"
              >
                Nem, folytatom
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
