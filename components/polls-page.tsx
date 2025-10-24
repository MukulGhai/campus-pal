"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BarChart3, Plus } from "lucide-react"

interface Poll {
  id: string
  question: string
  options: { text: string; votes: number }[]
  totalVotes: number
  author: string
  timeLeft: string
}

export default function PollsPage() {
  const [polls] = useState<Poll[]>([
    {
      id: "1",
      question: "What's your favorite study location?",
      options: [
        { text: "Library", votes: 45 },
        { text: "Coffee Shop", votes: 32 },
        { text: "Dorm Room", votes: 28 },
        { text: "Outdoor", votes: 15 },
      ],
      totalVotes: 120,
      author: "Sarah Chen",
      timeLeft: "2 days",
    },
    {
      id: "2",
      question: "Should we have more campus events?",
      options: [
        { text: "Yes, definitely!", votes: 87 },
        { text: "Maybe, depends on type", votes: 34 },
        { text: "No, too many already", votes: 12 },
      ],
      totalVotes: 133,
      author: "Mike Johnson",
      timeLeft: "1 day",
    },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 p-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-2">
              Campus Polls
            </h1>
            <p className="text-muted-foreground">Vote on what matters to our community</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-gradient-to-r from-accent to-secondary text-white rounded-lg hover:shadow-lg transition-all"
          >
            <Plus size={24} />
          </motion.button>
        </motion.div>

        <div className="space-y-6">
          {polls.map((poll, idx) => (
            <motion.div
              key={poll.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-muted/50 border border-border rounded-xl hover:bg-muted/80 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-accent to-secondary rounded-lg">
                  <BarChart3 className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{poll.question}</h3>
                  <p className="text-sm text-muted-foreground">
                    by {poll.author} • {poll.timeLeft} left
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {poll.options.map((option, optIdx) => {
                  const percentage = (option.votes / poll.totalVotes) * 100
                  return (
                    <motion.div
                      key={optIdx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: optIdx * 0.05 }}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium group-hover:text-primary transition-colors">
                          {option.text}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {option.votes} ({percentage.toFixed(0)}%)
                        </span>
                      </div>
                      <motion.div className="h-2 bg-muted rounded-full overflow-hidden" whileHover={{ height: 8 }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ duration: 0.8, delay: optIdx * 0.1 }}
                          className="h-full bg-gradient-to-r from-accent to-secondary rounded-full"
                        />
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>

              <p className="text-xs text-muted-foreground mt-4">{poll.totalVotes} total votes</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
