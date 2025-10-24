"use client"

import { useState } from "react"
import LoginPage from "@/components/login-page"
import HomePage from "@/components/home-page"
import ChatPage from "@/components/chat-page"
import EventsPage from "@/components/events-page"
import ProfilePage from "@/components/profile-page"
import Navbar from "@/components/navbar"
import AIChatPage from "@/components/ai-chat-page"
import YearChatPage from "@/components/year-chat-page"
import EventsQAPage from "@/components/events-qa-page"
import NotesPage from "@/components/notes-page"
import AskTeachersPage from "@/components/ask-teachers-page"
import MyMessagesPage from "@/components/my-messages-page"
import PollsPage from "@/components/polls-page"
import LostFoundPage from "@/components/lost-found-page"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [isDark, setIsDark] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />
  }

  return (
    <div className={isDark ? "dark" : ""}>
      <Navbar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        isDark={isDark}
        onThemeToggle={() => setIsDark(!isDark)}
      />
      <main className="bg-background text-foreground transition-colors duration-300 p-6 md:p-8">
        {currentPage === "home" && <HomePage />}
        {currentPage === "chat" && <ChatPage />}
        {currentPage === "events" && <EventsPage />}
        {currentPage === "profile" && <ProfilePage />}
        {currentPage === "ai-chat" && <AIChatPage />}
        {currentPage === "year-chat" && <YearChatPage />}
        {currentPage === "events-qa" && <EventsQAPage />}
        {currentPage === "notes" && <NotesPage />}
        {currentPage === "ask-teachers" && <AskTeachersPage />}
        {currentPage === "my-messages" && <MyMessagesPage />}
        {currentPage === "polls" && <PollsPage />}
        {currentPage === "lost-found" && <LostFoundPage />}
      </main>
    </div>
  )
}
