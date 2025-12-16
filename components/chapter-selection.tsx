"use client"

import { Button } from "@/components/ui/button"

interface ChapterSelectionProps {
  onSelectChapter: (chapter: number) => void
  onSelectAllChapters: () => void
}

export default function ChapterSelection({ onSelectChapter, onSelectAllChapters }: ChapterSelectionProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl font-bold text-blue-900 mb-4">Közgazdaságtan Kvíz</h1>
        <p className="text-xl text-blue-700 mb-12">
          Válassz egy fejezetet vagy kezdd meg az összes kérdésből álló tesztet!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[1, 2, 3, 4, 5, 6, 7].map((chapter) => (
            <Button
              key={chapter}
              onClick={() => onSelectChapter(chapter)}
              className="h-24 text-xl font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition-all hover:shadow-xl"
            >
              Fejezet {chapter}
            </Button>
          ))}
        </div>

        <div className="border-t-2 border-blue-300 pt-8">
          <p className="text-lg text-blue-700 mb-4 font-semibold">Vagy start az összes fejezetből:</p>
          <Button
            onClick={onSelectAllChapters}
            className="h-16 text-lg font-semibold bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg transition-all hover:shadow-xl w-full md:w-80"
          >
            Teljes Kvíz
          </Button>
        </div>
      </div>
    </div>
  )
}
