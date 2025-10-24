"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageSquare, ThumbsUp, Eye } from "lucide-react"

interface Question {
  id: string
  title: string
  author: string
  event: string
  answers: number
  views: number
  likes: number
  timestamp: string
}

export default function EventsQAPage() {
  const [questions] = useState<Question[]>([
    {
      id: "1",
      title: "What time does the networking event start?",
      author: "Sarah Chen",
      event: "Tech Networking Night",
      answers: 5,
      views: 124,
      likes: 12,
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      title: "Is there free food at the career fair?",
      author: "Mike Johnson",
      event: "Career Fair 2025",
      answers: 8,
      views: 342,
      likes: 28,
      timestamp: "4 hours ago",
    },
    {
      id: "3",
      title: "Can I bring a friend to the workshop?",
      author: "Emma Davis",
      event: "Web Dev Workshop",
      answers: 3,
      views: 89,
      likes: 7,
      timestamp: "1 day ago",
    },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 p-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
            Events Q&A Forum
          </h1>
          <p className="text-muted-foreground">Ask and answer questions about campus events</p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mb-6 w-full px-4 py-3 bg-gradient-to-r from-accent to-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          Ask a Question
        </motion.button>

        <div className="space-y-4">
          {questions.map((q, idx) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-4 bg-muted/50 border border-border rounded-xl hover:bg-muted/80 cursor-pointer transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{q.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {q.author} • {q.event}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <motion.div className="flex items-center gap-2 hover:text-accent transition-colors">
                  <MessageSquare size={16} />
                  <span>{q.answers} answers</span>
                </motion.div>
                <motion.div className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Eye size={16} />
                  <span>{q.views} views</span>
                </motion.div>
                <motion.div className="flex items-center gap-2 hover:text-secondary transition-colors">
                  <ThumbsUp size={16} />
                  <span>{q.likes}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
