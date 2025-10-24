"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"

interface Conversation {
  id: string
  name: string
  avatar: string
  lastMessage: string
  timestamp: string
  unread: number
}

export default function MyMessagesPage() {
  const [conversations] = useState<Conversation[]>([
    {
      id: "1",
      name: "Alex Thompson",
      avatar: "AT",
      lastMessage: "Hey! Did you finish the assignment?",
      timestamp: "5 min ago",
      unread: 2,
    },
    {
      id: "2",
      name: "Jordan Lee",
      avatar: "JL",
      lastMessage: "Let's meet up for coffee tomorrow",
      timestamp: "1 hour ago",
      unread: 0,
    },
    {
      id: "3",
      name: "Casey Williams",
      avatar: "CW",
      lastMessage: "Thanks for the notes!",
      timestamp: "3 hours ago",
      unread: 1,
    },
    {
      id: "4",
      name: "Morgan Davis",
      avatar: "MD",
      lastMessage: "See you at the event!",
      timestamp: "1 day ago",
      unread: 0,
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            My Messages
          </h1>
          <div className="relative">
            <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
        </motion.div>

        <div className="space-y-2">
          {conversations.map((conv, idx) => (
            <motion.div
              key={conv.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ x: 8 }}
              className="p-4 bg-muted/50 border border-border rounded-xl hover:bg-muted/80 cursor-pointer transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold group-hover:scale-110 transition-transform">
                  {conv.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">{conv.name}</h3>
                  <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{conv.timestamp}</p>
                  {conv.unread > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="mt-1 px-2 py-1 bg-accent text-white rounded-full text-xs font-semibold"
                    >
                      {conv.unread}
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
