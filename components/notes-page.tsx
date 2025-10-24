"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, FileText, Trash2, Share2 } from "lucide-react"

interface Note {
  id: string
  title: string
  course: string
  date: string
  preview: string
  color: string
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: "1",
      title: "Calculus II - Integration Techniques",
      course: "MATH 201",
      date: "Oct 20, 2025",
      preview: "Key formulas and practice problems...",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "2",
      title: "Biology - Cell Structure",
      course: "BIO 101",
      date: "Oct 19, 2025",
      preview: "Organelles and their functions...",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "3",
      title: "History - World War II",
      course: "HIST 301",
      date: "Oct 18, 2025",
      preview: "Timeline and major events...",
      color: "from-purple-500 to-pink-500",
    },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              My Notes
            </h1>
            <p className="text-muted-foreground">Organize and share your study notes</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all"
          >
            <Plus size={24} />
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note, idx) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`p-4 bg-gradient-to-br ${note.color} rounded-xl text-white cursor-pointer group hover:shadow-xl transition-all`}
            >
              <div className="flex items-start justify-between mb-3">
                <FileText size={24} />
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-1 hover:bg-white/20 rounded"
                  >
                    <Share2 size={16} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-1 hover:bg-white/20 rounded"
                  >
                    <Trash2 size={16} />
                  </motion.button>
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-1">{note.title}</h3>
              <p className="text-sm text-white/80 mb-2">{note.course}</p>
              <p className="text-sm text-white/70 mb-3">{note.preview}</p>
              <p className="text-xs text-white/60">{note.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
