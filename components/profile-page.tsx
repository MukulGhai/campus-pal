"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Edit2, Mail, MapPin, BookOpen, Heart, MessageCircle, Share2, X, Check } from "lucide-react"

interface UserPost {
  id: number
  content: string
  likes: number
  timestamp: string
  liked: boolean
}

export default function ProfilePage() {
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [profile, setProfile] = useState({
    name: "Alex Chen",
    bio: "Computer Science student | Coffee enthusiast | Always up for campus adventures",
    department: "Computer Science",
    year: "Junior",
    email: "alex.chen@university.edu",
    location: "Campus Dorms",
    avatar: "/diverse-avatars.png",
  })

  const [editForm, setEditForm] = useState(profile)

  const [userPosts, setUserPosts] = useState<UserPost[]>([
    {
      id: 1,
      content: "Just finished my first hackathon! So excited about what we built",
      likes: 156,
      timestamp: "1 week ago",
      liked: false,
    },
    {
      id: 2,
      content: "Anyone else love the new library study spaces?",
      likes: 89,
      timestamp: "2 weeks ago",
      liked: false,
    },
    { id: 3, content: "Campus life is amazing!", likes: 234, timestamp: "3 weeks ago", liked: false },
  ])

  const handleSaveProfile = () => {
    setProfile(editForm)
    setIsEditingProfile(false)
  }

  const togglePostLike = (id: number) => {
    setUserPosts(
      userPosts.map((post) =>
        post.id === id ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 } : post,
      ),
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Profile Header */}
      <motion.div
        className="bg-card rounded-2xl p-8 border border-border shadow-lg mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ boxShadow: "0 20px 40px rgba(139, 92, 246, 0.15)" }}
      >
        {!isEditingProfile ? (
          <>
            <div className="flex items-start justify-between mb-6">
              <motion.img
                src={profile.avatar}
                alt={profile.name}
                className="w-24 h-24 rounded-full border-4 border-primary"
                whileHover={{ scale: 1.1 }}
              />
              <motion.button
                onClick={() => setEditForm(profile)}
                onClick={() => setIsEditingProfile(true)}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Edit2 size={18} /> Edit Profile
              </motion.button>
            </div>

            <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
            <p className="text-muted-foreground mb-4">{profile.bio}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Department</p>
                  <p className="font-semibold">{profile.department}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Year</p>
                  <p className="font-semibold">{profile.year}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-secondary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-sm">{profile.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold">{profile.location}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground">Name</label>
              <input
                type="text"
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Bio</label>
              <textarea
                value={editForm.bio}
                onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary mt-1 resize-none"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground">Department</label>
                <input
                  type="text"
                  value={editForm.department}
                  onChange={(e) => setEditForm({ ...editForm, department: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary mt-1"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Year</label>
                <input
                  type="text"
                  value={editForm.year}
                  onChange={(e) => setEditForm({ ...editForm, year: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary mt-1"
                />
              </div>
            </div>
            <div className="flex gap-3 pt-4">
              <motion.button
                onClick={handleSaveProfile}
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 rounded-lg font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Check size={18} /> Save Changes
              </motion.button>
              <motion.button
                onClick={() => setIsEditingProfile(false)}
                className="flex-1 flex items-center justify-center gap-2 bg-muted text-foreground px-4 py-2 rounded-lg font-semibold hover:bg-muted/80"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <X size={18} /> Cancel
              </motion.button>
            </div>
          </div>
        )}
      </motion.div>

      {/* User Posts */}
      <motion.h2 className="text-2xl font-bold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Your Posts
      </motion.h2>

      <div className="space-y-4">
        {userPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="bg-card rounded-2xl p-6 border border-border shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ boxShadow: "0 20px 40px rgba(139, 92, 246, 0.15)" }}
          >
            <p className="mb-3">{post.content}</p>
            <div className="flex justify-between items-center pt-3 border-t border-border">
              <span className="text-sm text-muted-foreground">{post.timestamp}</span>
              <div className="flex gap-3">
                <motion.button
                  onClick={() => togglePostLike(post.id)}
                  className={`flex items-center gap-1 px-3 py-1 rounded-lg transition-all ${
                    post.liked ? "bg-accent/20 text-accent" : "hover:bg-muted text-muted-foreground"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart size={16} fill={post.liked ? "currentColor" : "none"} />
                  <span className="text-sm font-semibold">{post.likes}</span>
                </motion.button>
                <motion.button
                  className="flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-muted text-muted-foreground transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle size={16} />
                </motion.button>
                <motion.button
                  className="flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-muted text-muted-foreground transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
