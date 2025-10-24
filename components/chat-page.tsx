"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

interface Chat {
  id: number
  name: string
  avatar: string
  lastMessage: string
  unread: boolean
}

interface Message {
  id: number
  sender: "user" | "other"
  content: string
  timestamp: string
}

export default function ChatPage() {
  const [chats] = useState<Chat[]>([
    {
      id: 1,
      name: "Study Group",
      avatar: "/diverse-avatars.png",
      lastMessage: "See you at the library!",
      unread: true,
    },
    {
      id: 2,
      name: "Alex Chen",
      avatar: "/diverse-avatars.png",
      lastMessage: "That sounds great!",
      unread: false,
    },
    {
      id: 3,
      name: "Campus Events",
      avatar: "/diverse-avatars.png",
      lastMessage: "New event posted",
      unread: true,
    },
  ])

  const [selectedChat, setSelectedChat] = useState(1)
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "other", content: "Hey! How are you?", timestamp: "10:30 AM" },
    { id: 2, sender: "user", content: "I'm doing great! Just finished class", timestamp: "10:32 AM" },
    { id: 3, sender: "other", content: "Nice! Want to grab lunch?", timestamp: "10:35 AM" },
  ])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: "user", content: newMessage, timestamp: "now" }])
      setNewMessage("")
    }
  }

  return (
    <div className="flex h-[calc(100vh-80px)] bg-background">
      {/* Sidebar */}
      <motion.div
        className="w-80 border-r border-border bg-card overflow-y-auto"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <div className="p-4 space-y-2">
          {chats.map((chat) => (
            <motion.button
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`w-full p-3 rounded-lg text-left transition-all ${
                selectedChat === chat.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <img src={chat.avatar || "/placeholder.svg"} alt={chat.name} className="w-10 h-10 rounded-full" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate">{chat.name}</p>
                  <p className="text-sm truncate opacity-75">{chat.lastMessage}</p>
                </div>
                {chat.unread && (
                  <motion.div
                    className="w-3 h-3 rounded-full bg-accent"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Chat Area */}
      <motion.div className="flex-1 flex flex-col" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {/* Header */}
        <div className="border-b border-border p-4 bg-card">
          <h2 className="text-xl font-bold">{chats.find((c) => c.id === selectedChat)?.name}</h2>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <motion.div
              key={msg.id}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <motion.div
                className={`max-w-xs px-4 py-2 rounded-2xl ${
                  msg.sender === "user"
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <p>{msg.content}</p>
                <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Input */}
        <div className="border-t border-border p-4 bg-card">
          <div className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 rounded-full bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <motion.button
              onClick={handleSendMessage}
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={20} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
