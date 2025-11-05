"use client"

import { useState } from "react"
import ChapterSelection from "@/components/chapter-selection"
import QuizComponent from "@/components/quiz-component"
import ResultsScreen from "@/components/results-screen"
import ReviewScreen from "@/components/review-screen"

type Screen = "chapters" | "quiz" | "results" | "review"

export default function Home() {
  const [screen, setScreen] = useState<Screen>("chapters")
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null)
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({})
  const [score, setScore] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)

  const handleChapterSelect = (chapter: number) => {
    setSelectedChapter(chapter)
    setUserAnswers({})
    setScore(0)
    setTotalQuestions(0)
    setScreen("quiz")
  }

  const handleAllChaptersStart = () => {
    setSelectedChapter(null)
    setUserAnswers({})
    setScore(0)
    setTotalQuestions(0)
    setScreen("quiz")
  }

  const handleQuizComplete = (answers: Record<string, string>, finalScore: number, total: number) => {
    setUserAnswers(answers)
    setScore(finalScore)
    setTotalQuestions(total)
    setScreen("results")
  }

  const handleViewAnswers = () => {
    setScreen("review")
  }

  const handleRestart = () => {
    setScreen("chapters")
    setSelectedChapter(null)
    setUserAnswers({})
    setScore(0)
    setTotalQuestions(0)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      {screen === "chapters" && (
        <ChapterSelection onSelectChapter={handleChapterSelect} onSelectAllChapters={handleAllChaptersStart} />
      )}
      {screen === "quiz" && <QuizComponent selectedChapter={selectedChapter} onComplete={handleQuizComplete} />}
      {screen === "results" && (
        <ResultsScreen
          score={score}
          total={totalQuestions}
          onViewAnswers={handleViewAnswers}
          onRestart={handleRestart}
        />
      )}
      {screen === "review" && <ReviewScreen userAnswers={userAnswers} onRestart={handleRestart} />}
    </main>
  )
}
