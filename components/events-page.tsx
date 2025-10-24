"use client"

import { useState } from "react"

import { motion } from "framer-motion"
import { Calendar, MapPin, Users, Heart } from "lucide-react"

interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  attendees: number
  image: string
  description: string
  liked: boolean
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Campus Music Festival",
      date: "Oct 28",
      time: "6:00 PM",
      location: "Main Quad",
      attendees: 2500,
      image: "/vibrant-music-festival.png",
      description: "Live performances from student bands",
      liked: false,
    },
    {
      id: 2,
      title: "Tech Hackathon",
      date: "Nov 2",
      time: "9:00 AM",
      location: "Engineering Building",
      attendees: 450,
      image: "/hackathon-event.png",
      description: "24-hour coding competition with prizes",
      liked: false,
    },
    {
      id: 3,
      title: "Career Fair",
      date: "Nov 5",
      time: "10:00 AM",
      location: "Student Center",
      attendees: 1200,
      image: "/career-fair.jpg",
      description: "Meet with top companies recruiting",
      liked: false,
    },
    {
      id: 4,
      title: "Sports Day",
      date: "Nov 8",
      time: "2:00 PM",
      location: "Athletic Complex",
      attendees: 800,
      image: "/diverse-group-playing-various-sports.png",
      description: "Inter-college sports competition",
      liked: false,
    },
  ])

  const [attendedEvents, setAttendedEvents] = useState<number[]>([])

  const toggleLike = (id: number) => {
    setEvents(events.map((event) => (event.id === id ? { ...event, liked: !event.liked } : event)))
  }

  const toggleAttend = (id: number) => {
    setAttendedEvents((prev) => (prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]))
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <motion.h1
        className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Upcoming Events
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)",
              y: -5,
            }}
          >
            <motion.div className="relative h-48 overflow-hidden" whileHover={{ scale: 1.05 }}>
              <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <motion.button
                onClick={() => toggleLike(event.id)}
                className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart size={20} fill={event.liked ? "#ef4444" : "none"} color={event.liked ? "#ef4444" : "#666"} />
              </motion.button>
            </motion.div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{event.title}</h3>
              <p className="text-muted-foreground mb-4">{event.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar size={16} className="text-primary" />
                  <span>
                    {event.date} at {event.time}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={16} className="text-accent" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users size={16} className="text-secondary" />
                  <span>{event.attendees.toLocaleString()} attending</span>
                </div>
              </div>

              <motion.button
                onClick={() => toggleAttend(event.id)}
                className={`w-full py-2 rounded-lg font-semibold transition-all ${
                  attendedEvents.includes(event.id)
                    ? "bg-accent/20 text-accent border border-accent"
                    : "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {attendedEvents.includes(event.id) ? "✓ Attending" : "Attend Event"}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
