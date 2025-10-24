"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, BookOpen, Clock } from "lucide-react"

interface Question {
  id: string
  question: string
  teacher: string
  subject: string
  status: "answered" | "pending"
  timestamp: string
}

export default function AskTeachersPage() {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: "1",
      question: "Can you explain the concept of derivatives in more detail?",
      teacher: "Prof. Anderson",
      subject: "Calculus II",
      status: "answered",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      question: "What will be covered in the midterm exam?",
      teacher: "Prof. Martinez",
      subject: "Biology",
      status: "pending",
      timestamp: "1 day ago",
    },
    {
      id: "3",
      question: "How do I approach this problem set?",
      teacher: "Prof. Chen",
      subject: "Physics",
      status: "answered",
      timestamp: "3 days ago",
    },
  ])

  const [newQuestion, setNewQuestion] = useState("")

  const handleAsk = () => {
    if (!newQuestion.trim()) return
    setNewQuestion("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5 p-4">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-2">
            Ask Teachers
          </h1>
          <p className="text-muted-foreground">Get direct answers from your instructors</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-muted/50 border border-border rounded-xl mb-8"
        >
          <label className="block text-sm font-semibold mb-3">Ask a Question</label>
          <textarea
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Type your question here..."
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all resize-none"
            rows={4}
          />
          <motion.button
            onClick={handleAsk}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-3 px-4 py-2 bg-gradient-to-r from-secondary to-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2"
          >
            <Send size={16} />
            Submit Question
          </motion.button>
        </motion.div>

        <div className="space-y-4">
          {questions.map((q, idx) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ x: 8 }}
              className="p-4 bg-muted/50 border border-border rounded-xl hover:bg-muted/80 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <p className="font-semibold text-lg group-hover:text-secondary transition-colors">{q.question}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <BookOpen size={14} />
                      {q.teacher}
                    </span>
                    <span>{q.subject}</span>
                  </div>
                </div>
                <motion.div
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    q.status === "answered" ? "bg-green-500/20 text-green-600" : "bg-yellow-500/20 text-yellow-600"
                  }`}
                >
                  {q.status === "answered" ? "Answered" : "Pending"}
                </motion.div>
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock size={12} />
                {q.timestamp}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
