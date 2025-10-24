"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Users } from "lucide-react"

interface Chat {
  id: string
  year: string
  members: number
  lastMessage: string
  unread: number
}

export default function YearChatPage() {
  const [chats] = useState<Chat[]>([
    { id: "1", year: "First Year", members: 342, lastMessage: "Anyone free for study group?", unread: 3 },
    { id: "2", year: "Second Year", members: 298, lastMessage: "Midterms are coming up!", unread: 0 },
    { id: "3", year: "Third Year", members: 267, lastMessage: "Internship opportunities posted", unread: 5 },
    { id: "4", year: "Fourth Year", members: 189, lastMessage: "Job hunting tips thread", unread: 1 },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5 p-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">
            Year Chats
          </h1>
          <p className="text-muted-foreground">Connect with students from your year</p>
        </motion.div>

        <div className="grid gap-4">
          {chats.map((chat, idx) => (
            <motion.div
              key={chat.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ x: 8 }}
              className="p-4 bg-muted/50 border border-border rounded-xl hover:bg-muted/80 cursor-pointer transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="p-3 bg-gradient-to-br from-secondary to-accent rounded-lg group-hover:scale-110 transition-transform">
                    <Users className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{chat.year}</h3>
                    <p className="text-sm text-muted-foreground">{chat.members} members</p>
                    <p className="text-sm text-foreground/70 mt-1">{chat.lastMessage}</p>
                  </div>
                </div>
                {chat.unread > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="px-3 py-1 bg-accent text-white rounded-full text-sm font-semibold"
                  >
                    {chat.unread}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
