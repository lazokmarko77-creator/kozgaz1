"use client"

import type { Question } from "@/lib/quiz-data"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface QuestionCardProps {
  question: Question
  onAnswerClick: (optionLabel: string) => void
  isAnswered: boolean
  selectedAnswer: string | null
}

export default function QuestionCard({ question, onAnswerClick, isAnswered, selectedAnswer }: QuestionCardProps) {
  return (
    <Card className="p-4 md:p-6 lg:p-8 mb-6 md:mb-8 bg-white shadow-lg border-2 border-blue-200">
      {/* Image */}
      {question.image && (
        <div className="mb-6 md:mb-8 flex justify-center">
          <div className="relative w-full max-w-xs md:max-w-md h-48 md:h-64 bg-gray-100 rounded-lg overflow-hidden">
            <Image src={question.image || "/placeholder.svg"} alt="Question diagram" fill className="object-contain" />
          </div>
        </div>
      )}

      {/* Question text */}
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-blue-900 mb-6 md:mb-8 break-words">
        {question.question}
      </h2>

      {/* Options */}
      <div className="space-y-2 md:space-y-3">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option.label
          const isCorrectOption = option.label === question.correct
          let bgColor = "bg-white hover:bg-blue-50 border-2 border-blue-200"
          let textColor = "text-gray-900"

          if (isAnswered) {
            if (isCorrectOption) {
              bgColor = "bg-green-100 border-2 border-green-500"
              textColor = "text-green-900"
            } else if (isSelected && !isCorrectOption) {
              bgColor = "bg-red-100 border-2 border-red-500"
              textColor = "text-red-900"
            } else {
              bgColor = "bg-gray-100 border-2 border-gray-300"
              textColor = "text-gray-700"
            }
          } else if (isSelected) {
            bgColor = "bg-blue-100 border-2 border-blue-500"
            textColor = "text-blue-900"
          }

          return (
            <Button
              key={option.label}
              onClick={() => onAnswerClick(option.label)}
              disabled={isAnswered}
              className={`w-full p-3 md:p-4 lg:p-6 h-auto justify-start text-left font-semibold transition-all rounded-lg text-sm md:text-base flex items-center ${bgColor} ${textColor}`}
            >
              <span className="font-bold mr-2 md:mr-4 text-base md:text-lg flex-shrink-0">{option.label})</span>
              <span className="break-words whitespace-normal">{option.text}</span>
            </Button>
          )
        })}
      </div>
    </Card>
  )
}
