"use client"

import { motion } from "framer-motion"
import {
  Moon,
  Sun,
  Home,
  MessageCircle,
  Calendar,
  User,
  Sparkles,
  Users,
  MessageSquare,
  FileText,
  BookOpen,
  Mail,
  BarChart3,
  Search,
} from "lucide-react"

interface NavbarProps {
  currentPage: string
  onPageChange: (page: string) => void
  isDark: boolean
  onThemeToggle: () => void
}

export default function Navbar({ currentPage, onPageChange, isDark, onThemeToggle }: NavbarProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "chat", label: "Chat", icon: MessageCircle },
    { id: "events", label: "Events", icon: Calendar },
    { id: "profile", label: "Profile", icon: User },
    { id: "ai-chat", label: "AI Chat", icon: Sparkles },
    { id: "year-chat", label: "Year Chat", icon: Users },
    { id: "events-qa", label: "Q&A", icon: MessageSquare },
    { id: "notes", label: "Notes", icon: FileText },
    { id: "ask-teachers", label: "Ask Teachers", icon: BookOpen },
    { id: "my-messages", label: "Messages", icon: Mail },
    { id: "polls", label: "Polls", icon: BarChart3 },
    { id: "lost-found", label: "Lost & Found", icon: Search },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          CampusPal
        </motion.div>

        <div className="flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <motion.button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`p-2 rounded-lg transition-all ${
                  currentPage === item.id ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
              </motion.button>
            )
          })}

          <motion.button
            onClick={onThemeToggle}
            className="p-2 rounded-lg hover:bg-muted transition-all ml-2"
            whileHover={{ scale: 1.1, rotate: 20 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>
      </div>
    </nav>
  )
}
