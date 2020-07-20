import React from "react"
import Header from "../components/header"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 1rem` }}>
        <Header />
        {children}
    </div>
  )
}