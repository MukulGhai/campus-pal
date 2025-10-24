"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

interface LoginPageProps {
  onLogin: () => void
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [isSignup, setIsSignup] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10 flex items-center justify-center p-4">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="bg-card rounded-2xl shadow-2xl p-8 border border-border"
          whileHover={{ boxShadow: "0 20px 60px rgba(139, 92, 246, 0.2)" }}
        >
          <motion.h1
            className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            CampusPal
          </motion.h1>
          <p className="text-center text-muted-foreground mb-8">Connect with your campus community</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignup && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </motion.div>
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />

            <motion.button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              {isSignup ? "Sign Up" : "Login"}
            </motion.button>
          </form>

          <motion.button
            onClick={() => setIsSignup(!isSignup)}
            className="w-full mt-4 py-2 text-primary hover:text-accent transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}
