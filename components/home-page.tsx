"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Calendar,
  BarChart3,
  BookOpen,
  TrendingUp,
  MessageSquare,
  HelpCircle,
  ArrowRight,
  Clock,
  MapPin,
} from "lucide-react"

interface StatCard {
  id: number
  icon: React.ReactNode
  label: string
  value: number | string
  change?: string
  color: string
}

interface QuickAction {
  id: number
  icon: React.ReactNode
  title: string
  description: string
  color: string
  action: string
}

interface Event {
  id: number
  title: string
  date: string
  location: string
  attendees: number
  image?: string
}

interface Poll {
  id: number
  question: string
  votes: number
  options: Array<{ text: string; percentage: number }>
}

export default function HomePage() {
  const [username] = useState("mghai_be23")
  const [stats] = useState<StatCard[]>([
    {
      id: 1,
      icon: <Calendar className="w-6 h-6" />,
      label: "Upcoming Events",
      value: 3,
      change: "+2",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 2,
      icon: <BarChart3 className="w-6 h-6" />,
      label: "Active Polls",
      value: 2,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      icon: <BookOpen className="w-6 h-6" />,
      label: "New Study Notes",
      value: 9,
      change: "+5",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      icon: <TrendingUp className="w-6 h-6" />,
      label: "Engagement Score",
      value: "75%",
      color: "from-purple-500 to-pink-500",
    },
  ])

  const [quickActions] = useState<QuickAction[]>([
    {
      id: 1,
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Ask AI Assistant",
      description: "Get instant campus answers",
      color: "from-purple-500 to-pink-500",
      action: "ai-chat",
    },
    {
      id: 2,
      icon: <Calendar className="w-6 h-6" />,
      title: "Browse Events",
      description: "Find upcoming events",
      color: "from-orange-500 to-red-500",
      action: "events",
    },
    {
      id: 3,
      icon: <HelpCircle className="w-6 h-6" />,
      title: "Post in Forum",
      description: "Ask a public question",
      color: "from-blue-500 to-cyan-500",
      action: "qa-forum",
    },
    {
      id: 4,
      icon: <BookOpen className="w-6 h-6" />,
      title: "Share Notes",
      description: "Help out your classmates",
      color: "from-green-500 to-emerald-500",
      action: "notes",
    },
  ])

  const [upcomingEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Placement Drive - TCS",
      date: "Jan 25",
      location: "Placement Cell",
      attendees: 234,
      image: "/placement-drive.jpg",
    },
    {
      id: 2,
      title: "Cultural Fest Registration",
      date: "Jan 20",
      location: "Student Activity Center",
      attendees: 567,
      image: "/cultural-fest.jpg",
    },
  ])

  const [activePolls] = useState<Poll[]>([
    {
      id: 1,
      question: "Which event should we organize next for the cultural fest?",
      votes: 40,
      options: [
        { text: "Music Concert", percentage: 45 },
        { text: "Dance Battle", percentage: 35 },
        { text: "Comedy Show", percentage: 20 },
      ],
    },
    {
      id: 2,
      question: "What time should the library stay open during exams?",
      votes: 50,
      options: [
        { text: "24/7", percentage: 60 },
        { text: "Until 2 AM", percentage: 30 },
        { text: "Until Midnight", percentage: 10 },
      ],
    },
  ])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header Section */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-2">
          Good morning,{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{username}</span>
        </h1>
        <p className="text-muted-foreground text-lg">Here's what's happening on campus today.</p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-white border border-white/10 shadow-lg overflow-hidden group cursor-pointer relative`}
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity"
              animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">{stat.icon}</div>
                {stat.change && (
                  <motion.span
                    className="text-sm font-semibold bg-white/20 px-2 py-1 rounded-lg"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {stat.change}
                  </motion.span>
                )}
              </div>
              <p className="text-white/80 text-sm mb-2">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Quick Actions Section */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <motion.button
              key={action.id}
              className={`bg-gradient-to-br ${action.color} rounded-2xl p-6 text-white border border-white/10 shadow-lg overflow-hidden group relative text-left transition-all`}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white"
                animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">{action.icon}</div>
                  <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>
                <h3 className="font-bold text-lg mb-1">{action.title}</h3>
                <p className="text-white/80 text-sm">{action.description}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Events and Polls Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {event.image && (
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-3">{event.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {event.attendees} attending
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Active Polls */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">Active Polls</h2>
          <div className="space-y-4">
            {activePolls.map((poll, index) => (
              <motion.div
                key={poll.id}
                className="bg-card rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <h3 className="font-bold mb-4">{poll.question}</h3>
                <div className="space-y-3">
                  {poll.options.map((option, optIndex) => (
                    <motion.div
                      key={optIndex}
                      className="relative"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 + optIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">{option.text}</span>
                        <span className="text-xs text-muted-foreground">{option.percentage}%</span>
                      </div>
                      <motion.div
                        className="h-2 bg-muted rounded-full overflow-hidden"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.7 + optIndex * 0.1, duration: 0.6 }}
                      >
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-accent"
                          initial={{ width: 0 }}
                          animate={{ width: `${option.percentage}%` }}
                          transition={{ delay: 0.8 + optIndex * 0.1, duration: 0.8 }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
                <motion.button
                  className="mt-4 w-full py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Vote Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
