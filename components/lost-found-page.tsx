"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, MapPin, Calendar } from "lucide-react"

interface Item {
  id: string
  title: string
  type: "lost" | "found"
  description: string
  location: string
  date: string
  image: string
}

export default function LostFoundPage() {
  const [items] = useState<Item[]>([
    {
      id: "1",
      title: "Lost: Blue Backpack",
      type: "lost",
      description: "Blue North Face backpack with laptop inside. Very important!",
      location: "Library, 3rd Floor",
      date: "Oct 22, 2025",
      image: "🎒",
    },
    {
      id: "2",
      title: "Found: AirPods Pro",
      type: "found",
      description: "Found in the cafeteria. White AirPods Pro in charging case.",
      location: "Student Center Cafeteria",
      date: "Oct 21, 2025",
      image: "🎧",
    },
    {
      id: "3",
      title: "Lost: Student ID Card",
      type: "lost",
      description: "Red student ID card. Name: Alex Thompson. Please contact me!",
      location: "Gym",
      date: "Oct 20, 2025",
      image: "🆔",
    },
  ])

  const [filter, setFilter] = useState<"all" | "lost" | "found">("all")

  const filteredItems = items.filter((item) => filter === "all" || item.type === filter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5 p-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">
              Lost & Found
            </h1>
            <p className="text-muted-foreground">Help find lost items or report found items</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-gradient-to-r from-secondary to-accent text-white rounded-lg hover:shadow-lg transition-all"
          >
            <Plus size={24} />
          </motion.button>
        </motion.div>

        <div className="mb-6 flex gap-2">
          {(["all", "lost", "found"] as const).map((f) => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filter === f
                  ? "bg-gradient-to-r from-secondary to-accent text-white"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </motion.button>
          ))}
        </div>

        <div className="grid gap-4">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className={`p-4 border rounded-xl transition-all group cursor-pointer ${
                item.type === "lost"
                  ? "bg-red-500/5 border-red-500/20 hover:bg-red-500/10"
                  : "bg-green-500/5 border-green-500/20 hover:bg-green-500/10"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{item.image}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{item.title}</h3>
                    <motion.span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.type === "lost" ? "bg-red-500/20 text-red-600" : "bg-green-500/20 text-green-600"
                      }`}
                    >
                      {item.type === "lost" ? "Lost" : "Found"}
                    </motion.span>
                  </div>
                  <p className="text-sm text-foreground/70 mb-3">{item.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
